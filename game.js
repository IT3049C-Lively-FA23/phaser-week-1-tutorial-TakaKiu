// Define Phaser configuration object
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false // Set to true for debugging physics
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Initialize Phaser game
const game = new Phaser.Game(config);

// Define variables
let player;

function preload() {
    // Load assets
    this.load.image('player', 'assets/player.png');
    // Add more assets as needed (e.g., backgrounds, enemies)
}

function create() {
    // Create game elements
    player = this.physics.add.sprite(400, 300, 'player');
    player.setCollideWorldBounds(true); // Ensure player stays within game boundaries

    // Define cursor keys for player movement
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Player movement
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
    } else {
        player.setVelocityY(0);
    }
}
