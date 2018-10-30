export function setControllers(video: any) {
  const brightnessController = video.parentNode.parentNode.querySelector(
    ".brightnessController",
  );
  const contrastController = video.parentNode.parentNode.querySelector(
    ".contrastController",
  );

  brightnessController.oninput = (e: any) => {
    const currentFilters = video.style.filter;
    const val = e.target.value;

    if (currentFilters.indexOf("contrast") < 0) {
      video.style.filter = `brightness(${val})`;
    } else {
      const contrastVal = contrastController.value;
      video.style.filter = `brightness(${val}) contrast(${contrastVal})`;
    }
  };

  contrastController.oninput = (e: any) => {
    const currentFilters = video.style.filter;
    const val = e.target.value;

    if (currentFilters.indexOf("brightness") < 0) {
      video.style.filter = `contrast(${val})`;
    } else {
      const brightVal = brightnessController.value;
      video.style.filter = `brightness(${brightVal}) contrast(${val})`;
    }
  };
}
