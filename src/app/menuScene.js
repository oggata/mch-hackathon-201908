import Phaser from "phaser";

    //http://localhost:1234/?address=0xbe21a1ccc576f2978f33227d302e3123843112f0

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
    create: function () {
        var hero_id1 = getParam('hero_id1');
        console.log(hero_id1);

        var hero_id2 = getParam('hero_id2');
        console.log(hero_id2);

        var url = "https://www.mycryptoheroes.net/metadata/heroes/50010001";
        //var url = "https://www.mycryptoheroes.net/api/proxy/HeroAsset/heroes/" + address;
        //https://www.mycryptoheroes.net/metadata/heroType/5001
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onreadystatechange = function () {
            if (request.readyState != 4) {
            } else if (request.status != 200) {
            } else {
                var result = request.responseText;
                var obj = JSON.parse(result);
                console.log(obj.extra_data.hero_type);
                var heroType = obj.extra_data.hero_type;

                var url2 = "https://www.mycryptoheroes.net/metadata/heroType/" + heroType;
                var request2 = new XMLHttpRequest();
                request2.open('GET', url2);
                
                request2.onreadystatechange = function () {
                    if (request2.readyState != 4) {
                    } else if (request2.status != 200) {
                    } else {
                        var result2 = request2.responseText;
                        var obj2 = JSON.parse(result2);
                        console.log(obj2.name.ja);
                    }
                }
                request2.send(null);
                





            }
        };
        request.send(null);


        this.char1 = this.physics.add.sprite(50, 50, 'chara001');
        this.char1.setScale(0.1);
        this.char1.setCollideWorldBounds(true);
        this.char1.body.setAllowGravity(false);

        this.char2 = this.physics.add.sprite(500, 50, 'chara001');
        this.char2.setScale(0.1);
        this.char2.setCollideWorldBounds(true);
        this.char2.body.setAllowGravity(false);


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
        this.char1.x = this.char1.x + 10;
    }
};