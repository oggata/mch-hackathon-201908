import Phaser from "phaser";
export default {
    key: "boot",
    preload: function () {

        this.load.image('chara001', 'https://www.mycryptoheroes.net/images/heroes/2000/5001.png');
        //this.load.image('chara002', 'https://www.mycryptoheroes.net/images/heroes/2000/5001.png');
        this.load.image("back", require("../assets/background/1.png"));
        this.load.image("title", require("../assets/background/title.png"));
        this.load.image("button", require("../assets/button.png"));
        this.load.image("button_oc", require("../assets/button_oc.png"));
        this.load.image("platform", require("../assets/background/platform.png"));


        this.load.image("p1_1", require("../assets/gosei/p1/1.png"));
        this.load.image("p1_2", require("../assets/gosei/p1/2.png"));
        this.load.image("p1_3", require("../assets/gosei/p1/3.png"));
        this.load.image("p1_4", require("../assets/gosei/p1/4.png"));

        this.load.image("p2_1", require("../assets/gosei/p2/1.png"));
        this.load.image("p2_2", require("../assets/gosei/p2/2.png"));
        this.load.image("p2_3", require("../assets/gosei/p2/3.png"));
        this.load.image("p2_4", require("../assets/gosei/p2/4.png"));

        this.load.image("p3_1", require("../assets/gosei/p3/1.png"));
        this.load.image("p3_2", require("../assets/gosei/p3/2.png"));
        this.load.image("p3_3", require("../assets/gosei/p3/3.png"));
        this.load.image("p3_4", require("../assets/gosei/p3/4.png"));

        this.load.image("p4_1", require("../assets/gosei/p4/1.png"));
        this.load.image("p4_2", require("../assets/gosei/p4/2.png"));
        this.load.image("p4_3", require("../assets/gosei/p4/3.png"));
        this.load.image("p4_4", require("../assets/gosei/p4/4.png"));



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
        //this.scene.start("top");
    }
};