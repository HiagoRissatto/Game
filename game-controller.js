function controlJog(dx, dy) {
    const newX = PosiPlayer.x + dx;
    const newY = PosiPlayer.y + dy;

    //TAVA CHECARANDO AS PAREDES DO MAPOA
    if (newX >= 0 && newX < mapSize && newY >= 0 && newY < mapSize) {
        PosiPlayer.x = newX;
        PosiPlayer.y = newY;
        renderMap();
    }
}

// CONTROLES CARALHO
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            controlJog(0, -1);
            break;
        case 'ArrowDown':
            controlJog(0, 1);
            break;
        case 'ArrowLeft':
            controlJog(-1, 0);
            break;
        case 'ArrowRight':
            controlJog(1, 0);
            break;
    }
});
