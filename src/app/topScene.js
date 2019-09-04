import Phaser from "phaser";

var _data = [];

export default {
    key: "top",
    init(data) {
        _data = data;
    },
    preload() {
        console.log(_data);

        //const circle = document.createElement('canvas');
        /*
        const canvas1 = document.createElement('SimpleCanvas1');
        const canvas2 = document.createElement('SimpleCanvas2');
        const canvas3 = document.createElement('SimpleCanvas3');

        */
    },
    create() {

        const circle = document.createElement('canvas');
        const canvas1 = document.createElement('canvas');
        const canvas2 = document.createElement('canvas');
        const canvas3 = document.createElement('canvas');

        let { width, height } = this.sys.game.canvas;
        this.back = this.add.sprite(width / 2, height / 2, "back0");
        let button = this.add.image(width / 2, height / 2 + 320, "button_top");
        button.setInteractive();
        button.on("pointerdown", function () {
            this.scene.run("menu",_data);
        }, this);

        const context1 = canvas1.getContext('2d');
        const context2 = canvas2.getContext('2d');
        const context3 = canvas3.getContext('2d');
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        img1.src = 'https://www.mycryptoheroes.net/images/heroes/2000/5001.png';
        img2.src = 'https://www.mycryptoheroes.net/images/heroes/2000/4014.png';
        img1.crossOrigin = "Anonymous";
        img2.crossOrigin = "Anonymous";
        img3.crossOrigin = "Anonymous";
        img1.onload = () => {
            img2.onload = () => {
                context1.drawImage(img1, 0, 0);
                context2.drawImage(img2, 0, 0);
                var imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
                var imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
                var imageData3 = context3.getImageData(0, 0, canvas2.width, canvas2.height);
                var width = imageData1.width,
                    height = imageData1.height;
                var pixels1 = imageData1.data;
                var pixels2 = imageData2.data;
                for (var y = 0; y < height; ++y) {
                    for (var x = 0; x < width; ++x) {
                        var base = (y * width + x) * 4;
                        var random = Math.floor(Math.random() * 6) + 5;
                        if (random > 7) {
                            pixels1[base + 0] = pixels1[base + 0]; // R
                            pixels1[base + 1] = pixels1[base + 1]; // G
                            pixels1[base + 2] = pixels1[base + 2]; // B
                            pixels1[base + 3] = pixels1[base + 3]; // B
                        } else {
                            pixels1[base + 0] = pixels2[base + 0]; // R
                            pixels1[base + 1] = pixels2[base + 1]; // G
                            pixels1[base + 2] = pixels2[base + 2]; // B
                            pixels1[base + 3] = pixels2[base + 3]; // B
                        }
                    }
                }
                context3.putImageData(imageData1, 0, 0);

                this.textures.addCanvas('circle', context3);
                const circleImage = this.add.image(100, 100, 'circle');
            };
        }
        

/*
        const ctx = circle.getContext('2d');
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();
        // Draw the circle using Phaser 3
        this.textures.addCanvas('circle', circle);
        const circleImage = this.add.image(150, 200, 'circle');
*/



    },
    update() {
    },
};
//export default GameScene;