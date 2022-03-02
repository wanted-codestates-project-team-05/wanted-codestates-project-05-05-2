import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./reset.css";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [pos, setPos] = useState({
    stx: 0,
    sty: 0,
    w: 0,
    h: 0,
    id: 0,
    text: "",
  });
  const [datas, setDatas] = useState(
    () => JSON.parse(window.localStorage.getItem("square")) || []
  );
  const [isDrawing, setIsDrawing] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [modifyData, setModifyData] = useState({});
  let src = `https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F451a2619-a21b-462d-bb59-a50196e3057a%2Ffashion-unsplash.jpg?table=block&id=efd09440-86df-4dcc-ae21-29097de2bc9b&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=2000&userId=&cache=v2`;
  let image = new Image();
  image.src = src;

  const drawImg = () => {
    let width = image.width;
    let height = image.height;
    let aspect = width / height;
    let imgWidth = 800;
    let imgHeight = imgWidth / aspect;
    ctx.canvas.width = imgWidth;
    ctx.canvas.height = imgHeight;
    ctx.drawImage(image, 0, 0, imgWidth, imgHeight);
  };

  const drawSquare = (data, color) => {
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.2;
    ctx.fillRect(data.stx, data.sty, data.w, data.h);
  };

  const drawStroke = (data, color) => {
    ctx.strokeStyle = color;
    ctx.globalAlpha = 1;
    ctx.strokeRect(data.stx, data.sty, data.w, data.h);
  };

  const drawText = (data) => {
    ctx.textBaseline = "top";
    ctx.font = "bold 28px sans-serif";
    ctx.fillStyle = "black";
    ctx.globalAlpha = 1;
    const x = data.w > 0 ? data.stx : data.stx + data.w;
    const y = data.h > 0 ? data.sty : data.sty + data.h;
    ctx.fillText(data.text, x, y + 5);
  };

  const resetCanvas = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawImg(ctx);
    datas.forEach((data) => {
      drawSquare(data, "#66ff66");
      drawStroke(data, "#00e6e6");
      drawText(data);
    });
  };

  const startDraw = ({ nativeEvent }) => {
    if (nativeEvent.which === 3) return;
    resetCanvas();
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
    drawSquare(pos, "#ff3399");
    drawStroke(pos, "#e60073");
  };

  const finishDraw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const text = window.prompt("영역의 이름을 정해주세요.");
    resetCanvas();
    //수정
    if (isModify) {
      setPos({
        ...pos,
        text,
        id: modifyData.id,
      });
    } else {
      setPos({
        ...pos,
        text,
        id: datas[datas.length - 1] ? datas[datas.length - 1].id + 1 : 0,
      });
    }
    setIsDrawing(false);
  };

  const modifyDraw = (data) => {
    setIsModify(true);
    setModifyData(data);
    alert(data.text + " 영역 수정하겠습니다");
  };

  // 시작할 때 canvas세팅
  useEffect(() => {
    const canvas = canvasRef.current;
    setCtx(canvas.getContext("2d"));
    if (ctx && datas) {
      image.onload = () => {
        resetCanvas();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx, datas]);

  // prompt창에서 텍스트를 입력했을 때
  useEffect(() => {
    if (pos.text && !isDrawing) {
      resetCanvas();
      // 수정
      if (isModify) {
        const newData = datas.filter((data) => data.id !== pos.id).concat(pos);
        setDatas(newData);
        setIsModify(false);
      } else {
        setDatas((prev) => [...prev, pos]);
      }
      setPos({ stx: 0, sty: 0, w: 0, h: 0, id: 0, text: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDrawing, pos]);

  // localstorage에 데이터 저장
  useEffect(() => {
    window.localStorage.setItem("square", JSON.stringify(datas));
  }, [datas]);

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
                <div id="btnBox">
                  <button id="edit" onClick={() => modifyDraw(data)}>
                    <AiFillEdit size={16} />
                  </button>
                  <button
                    id="delete"
                    onClick={() =>
                      setDatas((prev) =>
                        prev.filter((item) => item.id !== data.id)
                      )
                    }
                  >
                    <AiFillDelete size={16} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
