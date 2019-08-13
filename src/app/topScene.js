import Phaser from "phaser";

var _data = [];

export default {
    key: "top",
    init(data) {
        _data = data;
    },
    preload() {
        console.log(_data);
    },
    create() {
        this.back = this.add.sprite(640 / 2, 600 / 2, "back0");
        let button = this.add.image(640 / 2, 520, "button_top");
        button.setInteractive();
        //button.on("pointerdown", () => {});
        button.on("pointerdown", function () {
            //console.log("aa");
            //this.scene.switch("menu");
            this.scene.run("menu",_data);
            //this.scene.run("menu", []);
        }, this);
    },
    update() {
    },
};
//export default GameScene;