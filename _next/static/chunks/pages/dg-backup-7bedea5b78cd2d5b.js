(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[926],{8272:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dg-backup",function(){return r(2934)}])},2934:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var o=r(4848),l=r(6540),n=r(8189);let a=["wine glass","axe","banana","bicycle","fork","bridge"],i=()=>{let[e,t]=(0,l.useState)(""),[r,i]=(0,l.useState)(30),[d,s]=(0,l.useState)(!1),[c,f]=(0,l.useState)(null),u=(0,l.useRef)(null),g=(0,l.useRef)(null),[h,b]=(0,l.useState)(null);(0,l.useEffect)(()=>{(async()=>{try{let e=await n.wV.create("/models/quickdraw_model.onnx");b(e),console.log("ONNX Model loaded successfully")}catch(e){console.error("Error loading ONNX model:",e)}})(),t(a[Math.floor(Math.random()*a.length)]);let e=setInterval(()=>{i(t=>(1===t&&(clearInterval(e),s(!0)),t-1))},1e3);return()=>clearInterval(e)},[]);let x=(e,t)=>{let r=e.getContext("2d");if(!r)return e;let o=r.getImageData(0,0,e.width,e.height).data,l=e.width,n=e.height,a=0,i=0;for(let t=0;t<o.length;t+=4)if(o[t+3]>0){let r=t/4%e.width,o=Math.floor(t/4/e.width);r<l&&(l=r),o<n&&(n=o),r>a&&(a=r),o>i&&(i=o)}if(l>a||n>i)return e;let d=a-l+1,s=i-n+1,c=d/s,f=t,u=t;c>1?u=Math.round(t/c):f=Math.round(t*c);let g=document.createElement("canvas");g.width=t,g.height=t;let h=g.getContext("2d");if(!h)return e;h.fillStyle="black",h.fillRect(0,0,t,t);let b=(t-f)/2,x=(t-u)/2;return h.imageSmoothingEnabled=!0,h.drawImage(e,l,n,d,s,b,x,f,u),g},p=(e,t,r,o)=>{let l=new Float32Array(e.length);for(let o=0;o<r;o++)for(let n=0;n<t;n++){let a=o*t+n;e[a]>0&&([{dx:0,dy:-1},{dx:0,dy:1}].forEach(e=>{let{dx:a,dy:i}=e,d=n+a,s=o+i;d>=0&&d<t&&s>=0&&s<r&&(l[s*t+d]=1)}),l[a]=1)}return l},m=async()=>{if(!h||!u.current||!g.current)return;let e=u.current,t=g.current,r=e.getContext("2d"),o=t.getContext("2d");if(!r||!o)return;let l=x(e,28).getContext("2d"),i=null==l?void 0:l.getImageData(0,0,28,28);if(i){let e=new Float32Array(784);for(let t=0;t<i.data.length;t+=4){let r=.299*i.data[t]+.587*i.data[t+1]+.114*i.data[t+2];e[t/4]=r/255}let t=p(e,28,28,1),r=new ImageData(28,28);for(let e=0;e<t.length;e++){let o=255*t[e];r.data[4*e]=o,r.data[4*e+1]=o,r.data[4*e+2]=o,r.data[4*e+3]=255}o.putImageData(r,0,0),console.log("Dilated Image Data (Flattened):",t);let l=new n.qY("float32",t,[1,28,28,1]);try{let e=h.inputNames[0],t=(await h.run({[e]:l}))[h.outputNames[0]];if(t.data instanceof Float32Array){let e=t.data,r=Array.from(e).indexOf(Math.max(...e)),o=Array.from(e),l=o[r];console.log("Confidence Scores:",o),console.log("Predicted Class:",a[r]),console.log("Confidence Level:",l),f("".concat(a[r]," (").concat((100*l).toFixed(2),"%)"))}}catch(e){console.error("Error during prediction:",e)}}};return(0,o.jsxs)("div",{style:{fontFamily:"'Poppins', sans-serif",textAlign:"center",background:"linear-gradient(135deg, #3b82f6, #1e3a8a)",padding:"20px",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"20px",color:"#ffffff"},children:[(0,o.jsx)("h1",{style:{fontSize:"3rem",fontWeight:"bold"},children:"Doodle Recognition Game"}),(0,o.jsxs)("p",{style:{fontSize:"1.5rem"},children:["Draw:"," ",(0,o.jsx)("span",{style:{fontWeight:"bold",color:"#fbbf24"},children:e.toUpperCase()})]}),(0,o.jsx)("canvas",{ref:u,width:300,height:300,style:{border:"6px solid #fbbf24",borderRadius:"15px",background:"black",cursor:"crosshair"},onMouseDown:e=>{let t=u.current;if(t){let r=t.getContext("2d");if(r){let o=t.getBoundingClientRect();r.beginPath(),r.moveTo(e.clientX-o.left,e.clientY-o.top),r.strokeStyle="white",r.lineWidth=8,t.onmousemove=e=>{r.lineTo(e.clientX-o.left,e.clientY-o.top),r.stroke()}}}},onMouseUp:()=>{let e=u.current;e&&(e.onmousemove=null)}}),(0,o.jsx)("h3",{style:{color:"#fbbf24"},children:"Processed Image:"}),(0,o.jsx)("canvas",{ref:g,width:28,height:28,style:{border:"3px solid #fbbf24",borderRadius:"5px",background:"black",width:300,height:300}}),(0,o.jsx)("button",{onClick:m,style:{padding:"15px 30px",background:"linear-gradient(135deg, #fbbf24, #f59e0b)",color:"#ffffff",border:"none",borderRadius:"30px",cursor:"pointer",fontSize:"1.2rem",fontWeight:"bold",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)",transition:"transform 0.2s, box-shadow 0.2s",margin:"10px"},children:"Predict"}),(0,o.jsx)("button",{onClick:()=>{let e=u.current,t=g.current;if(e){let t=e.getContext("2d");t&&(t.fillStyle="black",t.fillRect(0,0,e.width,e.height))}if(t){let e=t.getContext("2d");e&&(e.fillStyle="black",e.fillRect(0,0,t.width,t.height))}f(null)},style:{padding:"15px 30px",background:"linear-gradient(135deg, #3b82f6, #1e3a8a)",color:"#ffffff",border:"none",borderRadius:"30px",cursor:"pointer",fontSize:"1.2rem",fontWeight:"bold",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)",transition:"transform 0.2s, box-shadow 0.2s",margin:"10px"},children:"Clear"}),c&&(0,o.jsxs)("p",{style:{fontSize:"1.5rem",color:"#fbbf24"},children:["Prediction: ",c.toUpperCase()]})]})}},4342:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/ort-wasm-simd-threaded.914b7d74.wasm"}},e=>{var t=t=>e(e.s=t);e.O(0,[258,636,593,792],()=>t(8272)),_N_E=e.O()}]);