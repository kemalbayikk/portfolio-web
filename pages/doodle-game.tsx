import { useState, useEffect, useRef } from "react";
import * as ort from "onnxruntime-web";

const classes = [
  "basket",
"apple",
"van",
"wine glass",
"basketball",
"axe",
"banana",
"bicycle",
"telephone",
"fork",
"cake",
"bridge",
"wristwatch",
"backpack",
"bird",

];

const DoodleGame = () => {
  const [targetClass, setTargetClass] = useState("");
  const [timer, setTimer] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidenceScores, setConfidenceScores] = useState<number[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [session, setSession] = useState<ort.InferenceSession | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedSession = await ort.InferenceSession.create(
          "/models/quickdraw_model_15_classes.onnx"
        );
        setSession(loadedSession);
        console.log("ONNX Model loaded successfully");
      } catch (error) {
        console.error("Error loading ONNX model:", error);
      }
    };
    loadModel();

    chooseNextClass();

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setIsGameOver(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const chooseNextClass = () => {
    setTargetClass(classes[Math.floor(Math.random() * classes.length)]);
    setPrediction(null);
    setConfidenceScores([]);
    setIsCorrect(false);
    handleClearCanvas();
  };

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const cropAndResize = (canvas: HTMLCanvasElement, size: number) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return canvas;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let minX = canvas.width,
      minY = canvas.height,
      maxX = 0,
      maxY = 0;

    for (let i = 0; i < data.length; i += 4) {
      const alpha = data[i + 3];
      if (alpha > 0) {
        const x = (i / 4) % canvas.width;
        const y = Math.floor(i / 4 / canvas.width);
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }

    if (minX > maxX || minY > maxY) return canvas;

    const croppedWidth = maxX - minX + 1;
    const croppedHeight = maxY - minY + 1;

    const aspectRatio = croppedWidth / croppedHeight;
    let targetWidth = size;
    let targetHeight = size;

    if (aspectRatio > 1) {
      targetHeight = Math.round(size / aspectRatio);
    } else {
      targetWidth = Math.round(size * aspectRatio);
    }

    const croppedCanvas = document.createElement("canvas");
    croppedCanvas.width = size;
    croppedCanvas.height = size;

    const croppedCtx = croppedCanvas.getContext("2d");
    if (!croppedCtx) return canvas;

    croppedCtx.fillStyle = "black";
    croppedCtx.fillRect(0, 0, size, size);

    const offsetX = (size - targetWidth) / 2;
    const offsetY = (size - targetHeight) / 2;

    croppedCtx.imageSmoothingEnabled = true;
    croppedCtx.drawImage(
      canvas,
      minX,
      minY,
      croppedWidth,
      croppedHeight,
      offsetX,
      offsetY,
      targetWidth,
      targetHeight
    );

    return croppedCanvas;
  };

  const handlePredict = async () => {
    if (!session || !canvasRef.current) return;

    const canvas = canvasRef.current;

    const croppedCanvas = cropAndResize(canvas, 28);

    const resizedCtx = croppedCanvas.getContext("2d");
    const resizedImageData = resizedCtx?.getImageData(0, 0, 28, 28);

    if (resizedImageData) {
      const imgData = new Float32Array(28 * 28);

      for (let i = 0; i < resizedImageData.data.length; i += 4) {
        const gray =
          resizedImageData.data[i] * 0.299 +
          resizedImageData.data[i + 1] * 0.587 +
          resizedImageData.data[i + 2] * 0.114;

        imgData[i / 4] = gray / 255.0; // Normalizasyon
      }

      const inputTensor = new ort.Tensor("float32", imgData, [1, 28, 28, 1]);
      try {
        const inputName = session.inputNames[0];
        const results = await session.run({ [inputName]: inputTensor });
        const output = results[session.outputNames[0]] as ort.Tensor;

        if (output.data instanceof Float32Array) {
          const data = Array.from(output.data);
          const predictedIndex = data.indexOf(Math.max(...data));
          const predictedConfidence = data[predictedIndex];
          setPrediction(classes[predictedIndex]);
          setConfidenceScores(data);

          if (classes[predictedIndex] === targetClass && predictedConfidence > 0.55) {
            setIsCorrect(true);
            setTimeout(chooseNextClass, 2000);
          }
        }
      } catch (error) {
        console.error("Error during prediction:", error);
      }
    }
  };

  const getTop3Scores = () => {
    return confidenceScores
      .map((score, index) => ({ className: classes[index], score }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        background: "linear-gradient(135deg, #2c3e50, #34495e)",
        padding: "20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        gap: "40px",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#ecf0f1" }}>
        Doodle Recognition Game
      </h1>
      <p style={{ fontSize: "1.5rem", color: "#ecf0f1" }}>
        Draw:{" "}
        <span style={{ fontWeight: "bold", color: "#f1c40f" }}>
          {targetClass.toUpperCase()}
        </span>
      </p>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        style={{
          border: "6px solid #f1c40f",
          borderRadius: "15px",
          background: "black",
          cursor: "crosshair",
        }}
        onMouseDown={(e) => {
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
              const rect = canvas.getBoundingClientRect();
              ctx.beginPath();
              ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
              ctx.strokeStyle = "white";
              ctx.lineWidth = 10;
              canvas.onmousemove = (event) => {
                ctx.lineTo(
                  event.clientX - rect.left,
                  event.clientY - rect.top
                );
                ctx.stroke();
                handlePredict();
              };
            }
          }
        }}
        onMouseUp={() => {
          const canvas = canvasRef.current;
          if (canvas) {
            canvas.onmousemove = null;
          }
        }}
      />
      {isCorrect && (
        <div
          style={{
            backgroundColor: "#27ae60",
            color: "white",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "20px",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          🎉 Correct! Moving to the next class...
        </div>
      )}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <button
          onClick={handleClearCanvas}
          style={{
            padding: "12px 24px",
            background: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            setTimer(30);
            chooseNextClass();
          }}
          style={{
            padding: "12px 24px",
            background: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Restart
        </button>
      </div>
      <div
        style={{
          marginTop: "20px",
          maxWidth: "400px",
          height:200,
          width: "100%",
          backgroundColor: "#2c3e50",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ fontSize: "1.2rem", color: "#ecf0f1", marginBottom: "10px" }}>
          Top Confidence Scores
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {getTop3Scores().map((item, index) => (
            <li
              key={index}
              style={{
                fontSize: "1rem",
                margin: "8px 0",
                color: "#ecf0f1",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{item.className}</span>
              <span style={{ color: "#f1c40f", fontWeight: "bold" }}>
                {(item.score * 100).toFixed(2)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoodleGame;
