const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 1;

let src = `https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F451a2619-a21b-462d-bb59-a50196e3057a%2Ffashion-unsplash.jpg?table=block&id=efd09440-86df-4dcc-ae21-29097de2bc9b&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=2000&userId=&cache=v2`;
let image = new Image();
image.src = src;
image.onload = () => imgDraw();

const square = [];
let target = { stx: 0, sty: 0, w: 0, h: 0, id: 0, text: "" };
let drawing = false;
let modify = false;

function imgDraw() {
  let width = image.width;
  let height = image.height;
  let aspect = width / height;
  let iW = canvas.width;
  let iH = iW / aspect;
  ctx.canvas.width = iW;
  ctx.canvas.height = iH;
  ctx.drawImage(image, 0, 0, iW, iH);
}

function addTitle(square) {
  const ul = document.querySelector("#title-list");
  ul.innerHTML = "";
  square.map((item) => {
    if (item.text) {
      const li = document.createElement("li");
      li.classList.add("item");
      li.textContent = item.text;
      ul.appendChild(li);
    }
  });
}

function draw(target) {
  const { stx, sty, w, h, text } = target;
  ctx.strokeStyle = "#00e6e6";
  ctx.fillStyle = "#66ff66";
  ctx.globalAlpha = 0.2;
  if (text) {
    ctx.fillRect(stx, sty, w, h);
    ctx.globalAlpha = 1;
    ctx.strokeRect(stx, sty, w, h);
    drawText(target);
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawText(target) {
  const { stx, sty, w, h, text } = target;
  if (text) {
    ctx.fillStyle = "black";
    ctx.globalAlpha = 1;
    ctx.textBaseline = "top";
    ctx.font = "bold 28px Libre Baskerville";
    let x = w > 0 ? stx : stx + w;
    let y = h > 0 ? sty : sty + h;
    ctx.fillText(text, x + 10, y + 10);
  }
}

function reDraw(square) {
  imgDraw();
  square.map((target) => {
    draw(target);
    drawText(target);
  });
}

canvas.onmousedown = (e) => {
  if (e.which === 3 || modify) return;
  target.stx = e.offsetX - ctx.canvas.offsetLeft;
  target.sty = e.offsetY - ctx.canvas.offsetTop;
  drawing = true;
};

canvas.onmouseup = (e) => {
  if (!drawing || modify) return;
  target.text = window.prompt("text");
  target.id = square[square.length - 1] ? square[square.length - 1].id + 1 : 0;
  clearCanvas();
  reDraw(square);
  square.push(target);
  draw(target);
  addTitle(square);
  target = { stx: 0, sty: 0, w: 0, h: 0, text: "" };
  drawing = false;
};

canvas.onmouseleave = (e) => {
  if (!drawing) return;
  target.text = window.prompt("text");
  target.id = square[square.length - 1] ? square[square.length - 1].id + 1 : 0;
  clearCanvas();
  reDraw(square);
  square.push(target);
  draw(target);
  addTitle(square);
  target = { stx: 0, sty: 0, w: 0, h: 0, id: 0, text: "" };
  drawing = false;
};

canvas.onmousemove = (e) => {
  if (!drawing) return;
  target.w = e.offsetX - ctx.canvas.offsetLeft - target.stx;
  target.h = e.offsetY - ctx.canvas.offsetTop - target.sty;
  clearCanvas();
  reDraw(square);
  ctx.strokeStyle = "#e60073";
  ctx.fillStyle = "#ff3399";
  ctx.globalAlpha = 0.2;
  ctx.fillRect(target.stx, target.sty, target.w, target.h);
  ctx.globalAlpha = 1;
  ctx.strokeRect(target.stx, target.sty, target.w, target.h);
};

// modify, delete handler
document.addEventListener("click", function (e) {
  if (e.target && e.target.className == "item") {
    square.filter((item, index) => {
      if (item.text === e.target.innerText) {
        console.log(item);
        // 수정
        const { stx, sty, w, h, id, text } = item;
        target = { stx, sty, w, h, id, text };
        modify = true;
        drawing = true;
        canvas.onmousedown = (e) => {
          target.text = window.prompt("text");
          target.id = id;
          clearCanvas();
          square[index] = target;
          draw(target);
          addTitle(square);
          target = { stx: 0, sty: 0, w: 0, h: 0, text: "" };
          drawing = false;
          modify = false;
          reDraw(square);
          console.log(square);
        };

        // 삭제
        // square.splice(index, 1);
        // console.log(square);
        // reDraw(square);
      }
    });
  }
});
