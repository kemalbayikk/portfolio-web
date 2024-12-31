(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[406],{908:(e,t,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/doodle-game",function(){return l(1330)}])},1330:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>i});var o=l(4848),r=l(6540),n=l(8189);let a=["basket","apple","van","wine glass","basketball","axe","banana","bicycle","telephone","fork","cake","bridge","wristwatch","backpack","bird"],i=()=>{let[e,t]=(0,r.useState)(""),[l,i]=(0,r.useState)(30),[s,d]=(0,r.useState)(!1),[c,f]=(0,r.useState)(null),[u,h]=(0,r.useState)([]),[p,g]=(0,r.useState)(!1),x=(0,r.useRef)(null),[m,b]=(0,r.useState)(null);(0,r.useEffect)(()=>{(async()=>{try{let e=await n.wV.create("/models/quickdraw_model_15_classes.onnx");b(e),console.log("ONNX Model loaded successfully")}catch(e){console.error("Error loading ONNX model:",e)}})(),y();let e=setInterval(()=>{i(t=>(1===t&&(clearInterval(e),d(!0)),t-1))},1e3);return()=>clearInterval(e)},[]);let y=()=>{t(a[Math.floor(Math.random()*a.length)]),f(null),h([]),g(!1),w()},w=()=>{let e=x.current;if(e){let t=e.getContext("2d");t&&(t.fillStyle="black",t.fillRect(0,0,e.width,e.height))}},k=(e,t)=>{let l=e.getContext("2d");if(!l)return e;let o=l.getImageData(0,0,e.width,e.height).data,r=e.width,n=e.height,a=0,i=0;for(let t=0;t<o.length;t+=4)if(o[t+3]>0){let l=t/4%e.width,o=Math.floor(t/4/e.width);l<r&&(r=l),o<n&&(n=o),l>a&&(a=l),o>i&&(i=o)}if(r>a||n>i)return e;let s=a-r+1,d=i-n+1,c=s/d,f=t,u=t;c>1?u=Math.round(t/c):f=Math.round(t*c);let h=document.createElement("canvas");h.width=t,h.height=t;let p=h.getContext("2d");if(!p)return e;p.fillStyle="black",p.fillRect(0,0,t,t);let g=(t-f)/2,x=(t-u)/2;return p.imageSmoothingEnabled=!0,p.drawImage(e,r,n,s,d,g,x,f,u),h},S=async()=>{if(!m||!x.current)return;let t=k(x.current,28).getContext("2d"),l=null==t?void 0:t.getImageData(0,0,28,28);if(l){let t=new Float32Array(784);for(let e=0;e<l.data.length;e+=4){let o=.299*l.data[e]+.587*l.data[e+1]+.114*l.data[e+2];t[e/4]=o/255}let o=new n.qY("float32",t,[1,28,28,1]);try{let t=m.inputNames[0],l=(await m.run({[t]:o}))[m.outputNames[0]];if(l.data instanceof Float32Array){let t=Array.from(l.data),o=t.indexOf(Math.max(...t)),r=t[o];f(a[o]),h(t),a[o]===e&&r>.55&&(g(!0),setTimeout(y,2e3))}}catch(e){console.error("Error during prediction:",e)}}};return(0,o.jsxs)("div",{style:{fontFamily:"'Poppins', sans-serif",textAlign:"center",background:"linear-gradient(135deg, #2c3e50, #34495e)",padding:"20px",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#ffffff",gap:"40px"},children:[(0,o.jsx)("h1",{style:{fontSize:"3rem",fontWeight:"bold",color:"#ecf0f1"},children:"Doodle Recognition Game"}),(0,o.jsxs)("p",{style:{fontSize:"1.5rem",color:"#ecf0f1"},children:["Draw:"," ",(0,o.jsx)("span",{style:{fontWeight:"bold",color:"#f1c40f"},children:e.toUpperCase()})]}),(0,o.jsx)("canvas",{ref:x,width:300,height:300,style:{border:"6px solid #f1c40f",borderRadius:"15px",background:"black",cursor:"crosshair"},onMouseDown:e=>{let t=x.current;if(t){let l=t.getContext("2d");if(l){let o=t.getBoundingClientRect();l.beginPath(),l.moveTo(e.clientX-o.left,e.clientY-o.top),l.strokeStyle="white",l.lineWidth=10,t.onmousemove=e=>{l.lineTo(e.clientX-o.left,e.clientY-o.top),l.stroke(),S()}}}},onMouseUp:()=>{let e=x.current;e&&(e.onmousemove=null)}}),p&&(0,o.jsx)("div",{style:{backgroundColor:"#27ae60",color:"white",padding:"15px",borderRadius:"10px",marginTop:"20px",fontWeight:"bold",fontSize:"1.5rem"},children:"\uD83C\uDF89 Correct! Moving to the next class..."}),(0,o.jsxs)("div",{style:{display:"flex",gap:"20px",marginTop:"20px"},children:[(0,o.jsx)("button",{onClick:w,style:{padding:"12px 24px",background:"#e74c3c",color:"white",border:"none",borderRadius:"10px",cursor:"pointer",fontSize:"1.2rem",fontWeight:"bold"},children:"Clear"}),(0,o.jsx)("button",{onClick:()=>{i(30),y()},style:{padding:"12px 24px",background:"#3498db",color:"white",border:"none",borderRadius:"10px",cursor:"pointer",fontSize:"1.2rem",fontWeight:"bold"},children:"Restart"})]}),(0,o.jsxs)("div",{style:{marginTop:"20px",maxWidth:"400px",height:200,width:"100%",backgroundColor:"#2c3e50",padding:"15px",borderRadius:"10px"},children:[(0,o.jsx)("h2",{style:{fontSize:"1.2rem",color:"#ecf0f1",marginBottom:"10px"},children:"Top Confidence Scores"}),(0,o.jsx)("ul",{style:{listStyleType:"none",padding:0},children:u.map((e,t)=>({className:a[t],score:e})).sort((e,t)=>t.score-e.score).slice(0,3).map((e,t)=>(0,o.jsxs)("li",{style:{fontSize:"1rem",margin:"8px 0",color:"#ecf0f1",display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("span",{children:e.className}),(0,o.jsxs)("span",{style:{color:"#f1c40f",fontWeight:"bold"},children:[(100*e.score).toFixed(2),"%"]})]},t))})]})]})}},4342:(e,t,l)=>{"use strict";e.exports=l.p+"static/media/ort-wasm-simd-threaded.914b7d74.wasm"}},e=>{var t=t=>e(e.s=t);e.O(0,[258,636,593,792],()=>t(908)),_N_E=e.O()}]);