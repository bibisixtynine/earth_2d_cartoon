document.addEventListener('DOMContentLoaded', () => {
  const earth = document.querySelector('.earth');

  let angle = 0;

  function animate() {
    angle += 0.15;
    if (earth) {
      const shift = Math.sin(angle * Math.PI / 180) * 6;
      earth.style.transform = `translateX(${shift}px)`;
    }
    requestAnimationFrame(animate);
  }

  animate();
});
