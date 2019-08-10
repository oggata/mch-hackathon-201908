import Phaser from "phaser";

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default {
    key: "menu",
    preload: function () {
        console.log("preload");
    },
    create: function () {
        console.log("create");
        var hero_id1 = getParam('hero_id1');
        if(!hero_id1){
            hero_id1 = 50010001;
        }
        //50010001
        console.log(hero_id1);
        var hero_id2 = getParam('hero_id2');
        if(!hero_id2){
            hero_id2 = 40070005;
        }

        console.log(hero_id2);
        const p11 = new Promise((resolve, reject) => {
            var url = "https://www.mycryptoheroes.net/metadata/heroes/" + hero_id1;
            var request = new XMLHttpRequest();
            request.open('GET', url);
            request.onreadystatechange = function () {
                if (request.readyState != 4) {} else if (request.status != 200) {} else {
                    var result = request.responseText;
                    var obj = JSON.parse(result);
                    console.log(obj.extra_data.hero_type);
                    console.log(obj.image_url);
                    //this.load.image('chara001', obj.image_url);
                    var heroType = obj.extra_data.hero_type;
                    var url2 = "https://www.mycryptoheroes.net/metadata/heroType/" + heroType;
                    var request2 = new XMLHttpRequest();
                    request2.open('GET', url2);
                    request2.onreadystatechange = function () {
                        if (request2.readyState != 4) {} else if (request2.status != 200) {} else {
                            var result2 = request2.responseText;
                            var obj2 = JSON.parse(result2);
                            console.log(obj2.name.ja);
                            var _array = [obj2.name.ja, url2];
                            resolve(_array);
                        }
                    }
                    request2.send(null);
                }
            };
            request.send(null);
        });
        const p22 = new Promise((resolve, reject) => {
            var url = "https://www.mycryptoheroes.net/metadata/heroes/" + hero_id2;
            var request = new XMLHttpRequest();
            request.open('GET', url);
            request.onreadystatechange = function () {
                if (request.readyState != 4) {} else if (request.status != 200) {} else {
                    var result = request.responseText;
                    var obj = JSON.parse(result);
                    console.log(obj.extra_data.hero_type);
                    var heroType = obj.extra_data.hero_type;
                    var url2 = "https://www.mycryptoheroes.net/metadata/heroType/" + heroType;
                    var request2 = new XMLHttpRequest();
                    request2.open('GET', url2);
                    request2.onreadystatechange = function () {
                        if (request2.readyState != 4) {} else if (request2.status != 200) {} else {
                            var result2 = request2.responseText;
                            var obj2 = JSON.parse(result2);
                            var _array2 = [obj2.name.ja, url2];
                            resolve(_array2);
                        }
                    }
                    request2.send(null);
                }
            };
            request.send(null);
        });
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("one")
            }, 2000);
        });
        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("two")
            }, 1000);
        });
        console.log("start");
        Promise.all([p11, p22]).then(results => {
            //console.log(results);
            console.log(results);
            console.log("gogogogoo");

            //this.scoreText = results[0][1] + "と" +results[1][1] + "を合成します";
            this.gouseiText.setText(results[0][0] + " + " + results[1][0]);

        }).catch(reject => {
            console.log(reject);
        });

        this.char1 = this.physics.add.sprite(50, 50, 'chara001');
        this.char1.setScale(0.1);
        this.char1.setCollideWorldBounds(true);
        this.char1.body.setAllowGravity(false);
        this.char2 = this.physics.add.sprite(500, 50, 'chara001');
        this.char2.setScale(0.1);
        this.char2.setCollideWorldBounds(true);
        this.char2.body.setAllowGravity(false);
        this.gosei = this.physics.add.sprite(300, 200, 'gosei1');
        //this.gosei.setScale(0.1);
        //this.char2.setCollideWorldBounds(true);
        this.gosei.body.setAllowGravity(false);
        this.gosei.anims.play("gosei_play");
        this.gouseiText = this.add.text(100, 100, "予想:ちんちん", {
            fontSize: "32px",
            fill: "#FFFFFF"
        });
        let button = this.add.image(400, 300, "button");
        button.setInteractive();
        button.on("pointerdown", () => {});
        button.on("pointerover", () => title.setTint(0xcccccc));
        button.on("pointerout", () => title.setTint(0xffffff));
        button.on("pointerdown", function () {
            console.log("aa");
            this.scene.switch("play");
        }, this);
    },
    update() {
        //console.log(this.player2.x);
        this.char2.x = this.char2.x - 10;
        if (this.char2.x <= 0) {
            this.char2.x = 0;
        }
        this.char1.x = this.char1.x + 10;
        if (this.char1.x >= 600) {
            this.char1.x = 600;
        }
    }
};