function showMessage() {
    document.getElementById('message').style.display = 'block';

    // Add confetti
    for(let i=0; i<30; i++){
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 70%)`;
        confetti.style.width = confetti.style.height = (5 + Math.random()*10) + 'px';
        confetti.style.animationDuration = (2 + Math.random()*3) + 's';
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }

    // Add floating hearts
    for(let i=0; i<15; i++){
        let heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (3 + Math.random()*3) + 's';
        heart.style.fontSize = (20 + Math.random()*20) + 'px';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }
}
function showMessage() {
    document.getElementById('message').style.display = 'block';

    // Confetti
    for(let i=0;i<30;i++){
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 70%)`;
        confetti.style.width = confetti.style.height = (5 + Math.random()*10) + 'px';
        confetti.style.animationDuration = (2 + Math.random()*3) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }

    // Floating hearts
    for(let i=0;i<15;i++){
        let heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (3 + Math.random()*3) + 's';
        heart.style.fontSize = (20 + Math.random()*20) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}
