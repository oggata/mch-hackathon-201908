import Phaser from "phaser";
export default {
    key: "menu",
    create: function () {

//var url = "https://www.mycryptoheroes.net/metadata/heroes/50010001";
var url = "https://www.mycryptoheroes.net/api/proxy/HeroAsset/heroes/0xbe21a1ccc576f2978f33227d302e3123843112f0";

var request = new XMLHttpRequest();
request.open('GET', url);
request.onreadystatechange = function () {
    if (request.readyState != 4) {
        // リクエスト中
    } else if (request.status != 200) {
        // 失敗
    } else {
        // 取得成功
        var result = request.responseText;
        console.log(result);
    }
};
request.send(null);


        this.background1 = this.add.image(400, 300, "background1");
        let title = this.add.image(400, 300, "title");
        title.setInteractive();
        title.on("pointerdown", () => {});
        title.on("pointerover", () => title.setTint(0xcccccc));
        title.on("pointerout", () => title.setTint(0xffffff));
        title.on("pointerdown", function () {
            console.log("aa");
            this.scene.switch("play");
        }, this);
    }
};