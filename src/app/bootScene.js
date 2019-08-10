import Phaser from "phaser";
export default {
    key: "boot",
    preload: function () {

        this.load.image('chara001', 'https://www.mycryptoheroes.net/images/heroes/2000/5001.png');
        this.load.image("background1", require("../assets/background/back1.png"));
        this.load.image("title", require("../assets/background/title.png"));
        this.load.image("button", require("../assets/button.png"));
        this.load.image("platform", require("../assets/background/platform.png"));

        this.load.spritesheet("gosei1", require("../assets/sprites/pipo-btleffect168_640.png"), {
            frameWidth: 640,
            frameHeight: 480
        });

        var rect = new Phaser.Geom.Rectangle(200, 285, 400, 30);
        var gfx = this.add.graphics();
        this.load.on("progress", function (progress) {
            gfx.clear().fillStyle(0x666666).fillRectShape(rect).fillStyle(0xffffff).fillRect(rect.x, rect.y, progress * rect.width, rect.height);
        });
    },
    create: function () {

        this.anims.create({
            key: "gosei_play",
            frames: this.anims.generateFrameNumbers("gosei1", {
                start: 0,
                end: 4
            }),
            frameRate: 15,
            repeat: -1
        });


        this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("doux", {
                start: 0,
                end: 2
            }),
            frameRate: 15,
            repeat: -1
        });
        this.anims.create({
            key: "death",
            frames: this.anims.generateFrameNumbers("doux", {
                start: 3,
                end: 5
            }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.start("menu");
    }
};