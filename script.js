/* eslint-env browser */
(function () {
  const colors = ["#F06560", "#FBC636", "#45B84C"];

  const style = Object.freeze({
    color: "#ffffff",
    size: "20px",
    radius: "999px",
    fontSize: 9,
    fontWeight: "400",
    gap: "8px"
  });

  window.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(() => {
      const controls = document.querySelector(".titlebar-container .titlebar-right .window-controls-container")
      const leftTitlebar = document.querySelector(".titlebar-container .titlebar-left")
      
      if (!controls || !leftTitlebar) return;

      const closeControl = controls.lastChild;
      controls.removeChild(closeControl);
      controls.prepend(closeControl);

      controls.style.width = "auto";
      controls.style.display = "flex";
      controls.style.gap = style.gap;
      controls.style.marginLeft = style.gap;

      controls.childNodes.forEach((child, i) => {
        const btnColor = colors[i] || "#33373e"; 
        
        child.style.borderRadius = style.radius;
        child.style.backgroundColor = btnColor;
        child.style.width = child.style.height = style.size;
        child.style.color = style.color;
        child.style.margin = "auto";
        child.style.cursor = "pointer";
        child.style.fontWeight = style.fontWeight;
        child.style.fontSize = `${style.fontSize}px`;
        child.style.display = "flex";
        child.style.alignItems = "center";
        child.style.justifyContent = "center";
        child.style.transition = "filter 0.2s";

        child.onmouseenter = () => child.style.filter = "brightness(0.8)";
        child.onmouseleave = () => child.style.filter = "brightness(1)";
      });

      leftTitlebar.appendChild(controls);
      clearInterval(timer);
    }, 100);
  });
})();
