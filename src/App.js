import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [pos, setPos] = useState({ stx: 0, sty: 0, w: 0, h: 0, id: 0, text: "" });
  const [datas, setDatas] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  let src = `https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F451a2619-a21b-462d-bb59-a50196e3057a%2Ffashion-unsplash.jpg?table=block&id=efd09440-86df-4dcc-ae21-29097de2bc9b&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=2000&userId=&cache=v2`;
  let image = new Image();
  image.src = src;

  function imgDraw(ctx) {
    let width = image.width;
    let height = image.height;
    let aspect = width / height;
    let iW = 500;
    let iH = iW / aspect;
    ctx.canvas.width = iW;
    ctx.canvas.height = iH;
    ctx.drawImage(image, 0, 0, iW, iH);
  }

  const startDraw = ({ nativeEvent }) => {
    if (nativeEvent.which === 3) return;
    setPos({
      ...pos,
      stx: nativeEvent.offsetX,
      sty: nativeEvent.offsetY,
    });
    setIsDrawing(true);
  };

  const drawing = ({ nativeEvent }) => {
    if (!isDrawing) return;
    setPos({
      ...pos,
      w: nativeEvent.offsetX - canvasRef.current.offsetLeft - pos.stx,
      h: nativeEvent.offsetY - canvasRef.current.offsetTop - pos.sty,
    });
    resetCanvas();
    ctx.strokeStyle = "#e60073";
    ctx.fillStyle = "#ff3399";
    ctx.globalAlpha = 0.2;
    ctx.fillRect(pos.stx, pos.sty, pos.w, pos.h);
    ctx.globalAlpha = 1;
    ctx.strokeRect(pos.stx, pos.sty, pos.w, pos.h);
  };

  const finishDraw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const text = window.prompt("text");
    resetCanvas();
    setPos({
      ...pos,
      text,
      id: datas[datas.length - 1] ? datas[datas.length - 1].id + 1 : 0,
    });
    resetCanvas();
    setIsDrawing(false);
  };

  function resetCanvas() {
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      imgDraw(ctx);
      if (datas.length) {
        datas.forEach((data) => {
          ctx.strokeStyle = "#00e6e6";
          ctx.fillStyle = "#66ff66";
          ctx.globalAlpha = 0.2;
          ctx.fillRect(data.stx, data.sty, data.w, data.h);
          ctx.globalAlpha = 1;
          ctx.strokeRect(data.stx, data.sty, data.w, data.h);
          ctx.fillStyle = "black";
          ctx.globalAlpha = 1;
          ctx.textBaseline = "top";
          ctx.font = "bold 28px Libre Baskerville";
          const x = data.w > 0 ? data.stx : data.stx + data.w;
          const y = data.h > 0 ? data.sty : data.sty + data.h;
          ctx.fillText(data.text, x + 5, y + 5);
        });
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    setCtx(canvas.getContext("2d"));
  }, []);

  useEffect(() => {
    if (pos.text && !isDrawing) {
      ctx.strokeStyle = "#00e6e6";
      ctx.fillStyle = "#66ff66";
      ctx.globalAlpha = 0.2;
      ctx.fillRect(pos.stx, pos.sty, pos.w, pos.h);
      ctx.globalAlpha = 1;
      ctx.strokeRect(pos.stx, pos.sty, pos.w, pos.h);
      ctx.fillStyle = "black";
      ctx.globalAlpha = 1;
      ctx.textBaseline = "top";
      ctx.font = "bold 28px Libre Baskerville";
      const x = pos.w > 0 ? pos.stx : pos.stx + pos.w;
      const y = pos.h > 0 ? pos.sty : pos.sty + pos.h;
      ctx.fillText(pos.text, x + 5, y + 5);
      setDatas((prev) => [...prev, pos]);
      setPos({});
    }
  }, [isDrawing]);

  useEffect(() => {
    if (ctx) {
      resetCanvas();
    }
  }, [datas.length]);

  useEffect(() => {
    if (ctx) {
      image.onload = () => {
        imgDraw(ctx);
      };
    }
  }, [ctx]);

  return (
    <div className="App">
      <div className="container">
        <canvas
          ref={canvasRef}
          onMouseDown={startDraw}
          onMouseUp={finishDraw}
          onMouseLeave={finishDraw}
          onMouseMove={drawing}
        />
        <ul>
          {datas.map((data, idx) => {
            return (
              <li key={idx}>
                {data.text}
                <button onClick={() => setDatas((prev) => prev.filter((item) => item.id !== data.id))}>x</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
