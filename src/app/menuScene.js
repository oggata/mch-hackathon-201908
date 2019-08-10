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

function getRandNumberFromRange(min, max) {
    var rand = min + Math.floor(Math.random() * (max - min));
    return rand;
};

export default {
    key: "menu",
    preload: function () {
        console.log("preload");
    },

    init(data){
console.log("call init");
console.log(data);

var aaa = localStorage.getItem("STST");
console.log(aaa);
console.log("call init2");




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
            this.gouseiText.setText(results[0][0] + " + " + results[1][0]);
            var _name1 = results[0][0];
            var _name1rand = getRandNumberFromRange(1,_name1.length);
            var _name1converted = _name1.slice(0,_name1rand);
            var _name2 = results[1][0];
            //console.log(getRandNumberFromRange(1,_name2.length));
            var _name2rand = getRandNumberFromRange(1,_name2.length);
            var _name2converted = _name2.slice(0,_name2rand);
            console.log(_name1converted + _name2converted);
            this.gouseiText.setText(results[0][0] + " + " + results[1][0] + "\r\n=");
            this.gouseiText2.setText(_name1converted + _name2converted);
            //this.load.image('chara001', results[0][1]);
            //this.load.image('chara002', results[1][1]);
        }).catch(reject => {
            console.log(reject);
        });

        //this.back = this.add.tileSprite(0, 0, 2000, 2000, "back");
        this.back = this.add.sprite(640/2, 600/2, "back");

        this.char1 = this.add.sprite(50, 200, 'chara001');
        this.char1.setScale(0.1);
        this.char2 = this.add.sprite(500, 200, 'chara001');
        this.char2.setScale(0.1);
        //this.gosei = this.add.sprite(300, 200, 'gosei1');
        //this.gosei.anims.play("gosei_play");
        this.gouseiText = this.add.text(100, 150, "", {
            fontSize: "32px",
            fill: "#FFFFFF"
        });
        this.gouseiText2 = this.add.text(100, 200, "", {
            fontSize: "56px",
            fill: "#FFFFFF"
        });

        let button = this.add.image(640/2, 450, "button");
        button.setInteractive();
        button.on("pointerdown", () => {});
        button.on("pointerdown", function () {
            console.log("aa");
            this.scene.switch("play");
            //this.scene.run("play", ["namae","hoge"]);
        }, this);
    },
    update() {
        //console.log(this.player2.x);
        this.char2.x = this.char2.x - 10;
        if (this.char2.x <= 100) {
            this.char2.x = 100;
        }
        this.char1.x = this.char1.x + 10;
        if (this.char1.x >= 500) {
            this.char1.x = 500;
        }
    }
};