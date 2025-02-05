const sonic = document.querySelector('.sonic');
const enemy = document.querySelector('.enemy');

const jump = () => {
    sonic.classList.add('jump');

    setTimeout(()=>{sonic.classList.remove('jump');

    } , 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const enemyPosition = enemy.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px','');

    console.log(sonicPosition);

    if(enemyPosition <= 90 && enemyPosition > 0 && sonicPosition < 65) {

        enemy.style.animation = 'none';
        enemy.style.left = `${enemyPosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = 'imagens/sonic_game_over.gif';
        sonic.style.width = '200px'
        

        clearInterval(loop);
    }

},10);

document.addEventListener('keydown',jump);   