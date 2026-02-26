/* eslint-env browser */
(function () {
  const colors = ["#F06560", "#FBC636", "#45B84C"];

  const style = Object.freeze({
    size: "12px",
    radius: "999px",
    fontSize: 8,
    fontWeight: "700",
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
        child.style.color = btnColor;
        child.style.width = child.style.height = style.size;
        child.style.margin = "auto";
        child.style.cursor = "pointer";
        child.style.fontWeight = style.fontWeight;
        child.style.fontSize = `${style.fontSize}px`;
        child.style.display = "flex";
        child.style.alignItems = "center";
        child.style.justifyContent = "center";
        child.style.transition = "filter 0.2s, color 0.2s";

        child.onmouseenter = () => {
          child.style.color = "rgba(0, 0, 0, 0.6)";
        };
        child.onmouseleave = () => {
          child.style.filter = "brightness(1)";
          child.style.color = btnColor;
        };
      });

      leftTitlebar.appendChild(controls);
      clearInterval(timer);
    }, 100);
  });
})();
