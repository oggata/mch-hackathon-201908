import Phaser from "phaser";

function getRandNumberFromRange(min, max) {
    var rand = min + Math.floor(Math.random() * (max - min));
    return rand;
};
export default {
    key: "play",
    init(data) {
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
        var rand1 = getRandNumberFromRange(1, 6);
        var rand1str = "p1_" + rand1;
        var rand2 = getRandNumberFromRange(1, 6);
        var rand2str = "p2_" + rand2;
        var rand3 = getRandNumberFromRange(1, 4);
        var rand3str = "p3_" + rand3;
        var rand4 = getRandNumberFromRange(1, 4);
        var rand4str = "p4_" + rand4;
        this.back = this.add.sprite(640 / 2, 600 / 2, "back2");
        this.gosei = this.add.sprite(320, 240, 'gosei1');
        this.gosei.anims.play("gosei_play");
        this.array = [];
        var array = ["すごーい", "やった", "おめでとう", "タピオカ！", "わっしょい", "それそれ", "待ってました", "嬉しい！", "おおおお", "いえい", "！！！", "><"];
        //console.log(array[Math.floor(Math.random() * array.length)]);
        this.texts = [];
        for (var i = 0; i <= 100; i++) {
            var ouen = this.add.text(getRandNumberFromRange(100, 1500), getRandNumberFromRange(10, 500), array[Math.floor(Math.random() * array.length)], {
                fontSize: "32px",
                fill: "#FFFFFF"
            });
            ouen.setVisible(false);
            this.texts.push(ouen);
        }
        this.posY = 0;
        this.p2 = this.add.sprite(640 / 2, 200 + 80 * 1, rand2str);
        this.p1 = this.add.sprite(640 / 2, 200 + 80 * 0 - 10, rand1str);
        this.p1.visible = false;
        this.p2.visible = false;
        let button = this.add.image(640 / 2, 500, "button_oc");
        button.setInteractive();
        button.on("pointerdown", () => {});
        button.on("pointerdown", function () {
            console.log("aa");
            //this.scene.switch("play");
            //this.scene.run("play", ["namae","hoge"]);
            //location.href = "https://opensea.io/";
            open("https://rinkeby.opensea.io/assets/0x399f4d789b525214e11ff9c48d334ec094c8fbb4/112341982520043874066671001570240942421174457542527788973733432059544112090992", "_blank");
        }, this);
    },
    update() {
        this.posY += 1;
        if (this.posY >= 10) {
            this.posY = 0;
        }
        this.p1.y = 200 + 80 * 0 - 10 + this.posY;
        this.p2.y = 200 + 80 * 1 + this.posY;
        this.renseiTime++;
        if (this.renseiTime >= 30 * 3) {
            this.p1.visible = true;
        }
        if (this.renseiTime >= 30 * 3) {
            this.p2.visible = true;
            for (var i = 0; i <= 50; i++) {
                this.texts[i].x -= 1;
                console.log(this.texts[0].x);
                this.texts[i].setVisible(true);
            }
        }
    },
};
//export default GameScene;