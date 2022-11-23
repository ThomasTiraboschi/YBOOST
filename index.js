const sneakers = document.querySelector('.sneakers');

sneakers.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10
    sneakers.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

sneakers.addEventListener("mouseleave", (e) => {
    sneakers.style.transform = `rotateY(0deg) rotateX(0deg)`;
});