import Phaser from "phaser";

function getRandNumberFromRange(min, max) {
    var rand = min + Math.floor(Math.random() * (max - min));
    return rand;
};

export default {
    key: "play",


    init(data){
console.log("call init");
console.log(data);
    },
    preload() {
        this.p1 = "";
        this.p2 = "";
        this.p3 = "";
        this.p4 = "";

        this.renseiTime = 0;
    },
    create() {
        var rand1 = getRandNumberFromRange(1,4);
        var rand1str = "p1_" + rand1;
        var rand2 = getRandNumberFromRange(1,4);
        var rand2str = "p2_" + rand2;
        var rand3 = getRandNumberFromRange(1,4);
        var rand3str = "p3_" + rand3;
        var rand4 = getRandNumberFromRange(1,4);
        var rand4str = "p4_" + rand4;

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

        this.p1.visible = false;
        this.p2.visible = false;
        this.p3.visible = false;
        this.p4.visible = false;


        let button = this.add.image(640/2, 450, "button_oc");
        button.setInteractive();
        button.on("pointerdown", () => {});
        button.on("pointerdown", function () {
            console.log("aa");
            //this.scene.switch("play");
            //this.scene.run("play", ["namae","hoge"]);
             //location.href = "https://opensea.io/";
             open( "https://opensea.io", "_blank" ) ;
        }, this);

    },
    update() {
        this.renseiTime++;
        if(this.renseiTime>=30*5){
            this.p1.visible = true;
        }  
        if(this.renseiTime>=30*5){
            this.p2.visible = true;
        }

    },
};
//export default GameScene;