export function disableScrolling() {
  const x: number = window.scrollX;
  const y: number = window.scrollY;
  window.onscroll = () => {
    window.scrollTo(x, y);
  };
}

export function enableScrolling(event: any): void {
  window.onscroll = () => {event.preventDefault();};
}
