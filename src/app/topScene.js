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
        let { width, height } = this.sys.game.canvas;
        this.back = this.add.sprite(width / 2, height / 2, "back0");
        let button = this.add.image(width / 2, height / 2 + 320, "button_top");
        button.setInteractive();
        button.on("pointerdown", function () {
            this.scene.run("menu",_data);
        }, this);
    },
    update() {
    },
};
//export default GameScene;