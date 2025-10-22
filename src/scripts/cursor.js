let cursor = document.getElementById("cursor");
let cursorX = 0,
  cursorY = 0;
let targetX = 0,
  targetY = 0;
let lastTimestamp = 0;
let currentTime = 0;
let followSpeed = 0.02;

let frameCounter = 0;
const frameInterval = 5;

function easeOutQuad(t) {
  return t * (2 - t);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function updateCursor(e) {
  targetX = e.clientX - 16;
  targetY = e.clientY - 12;
}

function animate(timestamp) {
  const elapsed = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  currentTime += elapsed * followSpeed;
  const t = Math.min(1, currentTime);

  cursorX = lerp(cursorX, targetX, easeOutQuad(t));
  cursorY = lerp(cursorY, targetY, easeOutQuad(t));

  frameCounter++;

  if (frameCounter >= frameInterval) {
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    frameCounter = 0;
  }

  if (t >= 1) {
    currentTime = 0;
  }

  requestAnimationFrame(animate);
}

function onMouseEnterLink() {
  // cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(4)`;
  cursor.style.background = "rgba(0,0,0,0.65)";
  cursor.style.setProperty("--cursor-size", "30px");
}

function onMouseLeaveLink() {
  // cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  cursor.style.background = "#000";
  cursor.style.setProperty("--cursor-size", "15px");
}

window.addEventListener("mousemove", updateCursor);

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("mouseenter", onMouseEnterLink);
  link.addEventListener("mouseleave", onMouseLeaveLink);
});

window.addEventListener("load", () => {
  requestAnimationFrame((timestamp) => {
    lastTimestamp = timestamp;
    animate(timestamp);
  });
});
