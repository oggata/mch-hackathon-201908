import Phaser from "phaser";

var _data;

function getRandNumberFromRange(min, max) {
    var rand = min + Math.floor(Math.random() * (max - min));
    return rand;
};

function makeKimeraName(name1,name2){
    var _name1rand = getRandNumberFromRange(1, name1.length);
    var _name1converted = name1.slice(0, _name1rand);
    var _name2rand = getRandNumberFromRange(1, name2.length);
    var _name2converted = name2.slice(0, _name2rand);
    return _name1converted + _name2converted;
};

export default {
    key: "menu",
    preload: function () {
        this.load.image('chara005', _data[0][1]);
        this.load.image('chara006', _data[1][1]);  
        this.load.spritesheet("chara005_conv", _data[0][1], {
            frameWidth: 2000,
            frameHeight: 1000
        });
        this.load.spritesheet("chara006_conv", _data[1][1], {
            frameWidth: 2000,
            frameHeight: 1000
        });

        this.load.spritesheet("gosei1", require("../assets/sprites/pipo-btleffect168_640.png"), {
            frameWidth: 2000,
            frameHeight: 1000
        });
    },
    init(data) {
        _data = data;
    },
    create: function () {

        this.anims.create({
            key: "chara006_conv2",
            frames: this.anims.generateFrameNumbers("chara006_conv", {
                start: 0,
                end: 1
            }),
            frameRate: 15,
            repeat: 0
        });
        
        console.log("call create");
        let { width, height } = this.sys.game.canvas;
        var _kimeraName = makeKimeraName(_data[0][0],_data[1][0]);
        this.back = this.add.sprite(width / 2, height / 2, "back");
        this.char1 = this.add.sprite(50, 270+ 100, 'chara005');


        this.char1.setScale(0.1);
        this.char1Name = this.add.text(180, 410+ 100, _data[0][0]).setFontSize(18).setFontFamily("Arial").setOrigin(0.5);
        this.char2 = this.add.sprite(500, 270+ 100, 'chara006');
        this.char2.setScale(0.1);
        this.char2Name = this.add.text(180, 410+ 100, _data[1][0]).setFontSize(18).setFontFamily("Arial").setOrigin(0.5);
        this.gouseiText = this.add.text(320, 100 + 100, _kimeraName).setFontSize(32).setFontFamily("Arial").setOrigin(0.5);
        //let button = this.add.image(width / 2, 620+ 100, "button");
        let button = this.add.image(640 / 2, height / 2 + 320, "button");
        button.setInteractive();
        button.on("pointerdown", () => {});
        button.on("pointerdown", function () {
            console.log("aa");
            this.scene.switch("play");
            //this.scene.run("play", []);
        }, this);
    },
    update() {
        this.char1.x = this.char1.x + 10;
        if (this.char1.x >= 500) {
            this.char1.x = 500;
        }
        this.char2.x = this.char2.x - 10;
        if (this.char2.x <= 120) {
            this.char2.x = 120;
        }
        this.char1Name.x = this.char1.x + 20;
        this.char2Name.x = this.char2.x + 40;
    }
};