import Phaser from "phaser";

function getRandNumberFromRange(min, max) {
    var rand = min + Math.floor(Math.random() * (max - min));
    return rand;
};

export default {
    key: "play",
    preload() {
        this.p1 = "";
        this.p2 = "";
        this.p3 = "";
        this.p4 = "";
    },
    create() {
        var rand1 = getRandNumberFromRange(1,4);
        var rand1str = "p1_" + rand1;
        var rand2 = getRandNumberFromRange(1,4);
        var rand2str = "p1_" + rand2;
        var rand3 = getRandNumberFromRange(1,4);
        var rand3str = "p1_" + rand3;
        var rand4 = getRandNumberFromRange(1,4);
        var rand4str = "p1_" + rand4;

        this.back = this.add.tileSprite(0, 0, 2000, 2000, "back");

        this.gosei = this.add.sprite(300, 200, 'gosei1');
        this.gosei.anims.play("gosei_play");

        this.p1 = this.add.sprite(640/2, 100+80*0, rand1str);
        this.p1.setScale(0.5);

        this.p2 = this.add.sprite(640/2, 100+80*1, rand2str);
        this.p2.setScale(0.5);

        this.p3 = this.add.sprite(640/2, 100+80*2, rand3str);
        this.p3.setScale(0.5);

        this.p4 = this.add.sprite(640/2, 100+80*3, rand4str);
        this.p4.setScale(0.5);
    },
    update() {
    },
};
//export default GameScene;