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
    },
    init(data) {
        _data = data;
    },
    create: function () {
        console.log("call create");
//?hero_id1=30040250&hero_id2=40140045
        var _kimeraName = makeKimeraName(_data[0][0],_data[1][0]);

        this.back = this.add.sprite(640 / 2, 600 / 2, "back");
        this.char1 = this.add.sprite(50, 270, 'chara005');
        this.char1.setScale(0.1);
        this.char1Name = this.add.text(100, 400, _data[0][0], {
            fontSize: "18px",
            fill: "#FFFFFF"
        });        
        this.char2 = this.add.sprite(500, 270, 'chara006');
        this.char2.setScale(0.1);
        this.char2Name = this.add.text(100, 400, _data[1][0], {
            fontSize: "18px",
            fill: "#FFFFFF"
        });
        this.gouseiText = this.add.text(100, 70, _kimeraName, {
            fontSize: "28px",
            fill: "#FFFFFF"
        });

        let button = this.add.image(640 / 2, 520, "button");
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
        this.char1Name.x = this.char1.x - 20;
        this.char2Name.x = this.char2.x - 20;
    }
};