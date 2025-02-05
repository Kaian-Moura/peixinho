var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('peixe1', 'assets/peixes/peixe_serio.png')

    this.load.image('peixe2', 'assets/peixes/peixinho_rosa.png')

    // Carregar o jogo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    // Carregar o peixe
    this.load.image('peixe', 'assets/peixes/baiacu.png');

    this.load.image('tubarao', 'assets/tubaraofundo.png')

    this.load.image('tubaraofrente', 'assets/tubaraofrente.png')

    this.load.image('pesca', 'assets/pesca.png');

    this.load.image('alga', 'assets/alga.png')
}

function create() {
    this.add.image(400, 300, 'mar');

    const imagem = this.add.image(700, 50, 'pesca');
    imagem.setDepth(10);

    this.add.image(400, 500, 'alga').setScale(0.4);

    const imagemtubarao = this.add.image(803, 401, 'tubarao').setScale(0.5);
    imagemtubarao.setDepth(0)

    const imagemtubarao2 = this.add.image(798, 400, 'tubaraofrente').setScale(0.5);
    imagemtubarao2.setDepth(1)

    const imagemalga = this.add.image(300, 500, 'alga').setScale(0.4);
    imagemalga.setDepth(10)

    this.add.image(100, 500, 'alga').setScale(0.4);

    const imagemalga2 = this.add.image(600, 500, 'alga').setScale(0.4);
    imagemalga2.setDepth(10)

    this.add.image(800, 600, 'alga').setScale(0.4);

    peixe1 = this.add.image(40, 100, 'peixe1').setScale(0.3);

    peixe2 = this.add.image(40, 135, 'peixe2').setScale(0.6);

    this.tweens.add({
        targets: peixe1,
        x: 800, // Posição final no eixo X
        duration: 4000, // 
        yoyo: true, // Faz o movimento voltar ao início
        repeat: -1, // Faz o movimento repetir infinitamente
        ease: 'Linear' // Animação suave
    })

    this.tweens.add({
        targets: peixe2,
        x: 800, // Posição final no eixo X
        duration: 3000, // 
        yoyo: true, // Faz o movimento voltar ao início
        repeat: -1, // Faz o movimento repetir infinitamente
        ease: 'Linear' // Animação suave
    })
    // Adicionar logo
    const logointeli = this.add.image(400, 525, 'logo').setScale(0.5);
    logointeli.setDepth(10)
    // Adicionar peixe
    peixinho = this.add.image(400, 300, 'peixe');

    peixinho.setFlip(true, false);
}

function update() {
    // Move o peixe com o mouse
    peixinho.x = this.input.activePointer.x;
    peixinho.y = this.input.activePointer.y;
}
