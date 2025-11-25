const trackingBox = document.getElementById("trackingBox");
const coordX = document.getElementById("coordX");
const coordY = document.getElementById("coordY");

trackingBox.addEventListener("mousemove", (e) => {
  const rect = trackingBox.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  coordX.textContent = Math.round(x);
  coordY.textContent = Math.round(y);
});

trackingBox.addEventListener("mouseleave", () => {
  coordX.textContent = "0";
  coordY.textContent = "0";
});

trackingBox.addEventListener("dblclick", (e) => {
  const rect = trackingBox.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = x + "px";
  dot.style.top = y + "px";

  trackingBox.appendChild(dot);

  console.log(`Dot placed at X: ${Math.round(x)}, Y: ${Math.round(y)}`);
});
