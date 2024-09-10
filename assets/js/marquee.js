document.addEventListener("DOMContentLoaded", (event) => {
  let marquee = (selector, speed) => {
    const list = document.querySelector(selector);
    let move = 0;

    setInterval(() => {
      list.style.marginLeft = `-${move}px`;

      if (move > list.clientWidth) {
        move = 0;
      }

      move += speed;
    }, 0);
  };

  marquee(".marquee__list", 0.2);
});
