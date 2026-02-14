const images = document.querySelectorAll(".floating");

images.forEach((img) => {
    // Random starting position
    img.style.top = Math.random() * window.innerHeight + "px";
    img.style.left = Math.random() * window.innerWidth + "px";

    // Random movement speed
    let xSpeed = (Math.random() - 0.5) * 2;
    let ySpeed = (Math.random() - 0.5) * 2;

    function animate() {
        let top = parseFloat(img.style.top);
        let left = parseFloat(img.style.left);

        if (top <= 0 || top >= window.innerHeight - 120) {
            ySpeed *= -1;
        }
        if (left <= 0 || left >= window.innerWidth - 120) {
            xSpeed *= -1;
        }

        img.style.top = top + ySpeed + "px";
        img.style.left = left + xSpeed + "px";

        requestAnimationFrame(animate);
    }

    animate();
});
