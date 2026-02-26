(function () {
  const colors = ["#F06560", "#FBC636", "#45B84C"];
  const inactiveColor = "#5B5B5B";

  const style = Object.freeze({
    size: "13.5px",
    radius: "999px",
    fontSize: 8,
    fontWeight: "900",
    gap: "10px",
    marginX: "17px"
  });

  window.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(() => {
      const controls = document.querySelector(".titlebar-container .titlebar-right .window-controls-container");
      const leftTitlebar = document.querySelector(".titlebar-container .titlebar-left");
      
      if (!controls || !leftTitlebar) return;

      const closeControl = controls.lastChild;
      controls.removeChild(closeControl);
      controls.prepend(closeControl);

      controls.style.width = "auto";
      controls.style.display = "flex";
      controls.style.gap = style.gap;
      controls.style.marginLeft = style.marginX;
      controls.style.marginRight = style.marginX;

      const setButtonState = (isActive) => {
        controls.childNodes.forEach((child, i) => {
          const baseColor = isActive ? (colors[i] || "#33373e") : inactiveColor;
          child.style.backgroundColor = baseColor;
          child.style.color = baseColor;
        });
      };

      controls.childNodes.forEach((child, i) => {
        child.style.borderRadius = style.radius;
        child.style.width = child.style.height = style.size;
        child.style.margin = "auto";
        child.style.cursor = "pointer";
        child.style.fontWeight = style.fontWeight;
        child.style.fontSize = `${style.fontSize}px`;
        child.style.display = "flex";
        child.style.alignItems = "center";
        child.style.justifyContent = "center";
        child.style.transition = "filter 0.2s, color 0.2s, background-color 0.2s";

        child.onmouseenter = () => {
          if (document.hasFocus()) {
            child.style.color = "rgba(0, 0, 0, 1)";
          }
        };
        child.onmouseleave = () => {
          child.style.color = child.style.backgroundColor;
        };
      });

      setButtonState(document.hasFocus());

      window.onfocus = () => setButtonState(true);
      window.onblur = () => setButtonState(false);

      leftTitlebar.appendChild(controls);
      clearInterval(timer);
    }, 100);
  });
})();
