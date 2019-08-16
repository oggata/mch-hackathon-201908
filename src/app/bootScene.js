import Phaser from "phaser";
import AwaitLoaderPlugin from '../../plugins/awaitloader-plugin.js';

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var _sendData = "";
function setHoge(data){
    _sendData = data;
}
export default {
    key: "boot",
    preload: function () {
        let { width, height } = this.sys.game.canvas;
        var callback = function (successCallback,failureCallback) {
            var hero_id1 = getParam('hero_id1');
            if (!hero_id1) {
                hero_id1 = 50010001;
            }
            //50010001
            var hero_id2 = getParam('hero_id2');
            if (!hero_id2) {
                hero_id2 = 40140045;
            }
            const p11 = new Promise((resolve, reject) => {
                var url = "https://www.mycryptoheroes.net/metadata/heroes/" + hero_id1;
                var request = new XMLHttpRequest();
                request.open('GET', url);
                request.onreadystatechange = function () {
                    if (request.readyState != 4) {} else if (request.status != 200) {} else {
                        var result = request.responseText;
                        var obj = JSON.parse(result);
                        var heroType = obj.extra_data.hero_type;
                        var url2 = "https://www.mycryptoheroes.net/metadata/heroType/" + heroType;
                        var request2 = new XMLHttpRequest();
                        request2.open('GET', url2);
                        request2.onreadystatechange = function () {
                            if (request2.readyState != 4) {} else if (request2.status != 200) {} else {
                                var result2 = request2.responseText;
                                var obj2 = JSON.parse(result2);
                                var _array = [obj2.name.ja, obj.image_url];
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
                        //console.log(obj.extra_data.hero_type);
                        var heroType = obj.extra_data.hero_type;
                        var url2 = "https://www.mycryptoheroes.net/metadata/heroType/" + heroType;
                        var request2 = new XMLHttpRequest();
                        request2.open('GET', url2);
                        request2.onreadystatechange = function () {
                            if (request2.readyState != 4) {} else if (request2.status != 200) {} else {
                                var result2 = request2.responseText;
                                var obj2 = JSON.parse(result2);
                                var _array2 = [obj2.name.ja, obj.image_url];
                                resolve(_array2);
                            }
                        }
                        request2.send(null);
                    }
                };
                request.send(null);
            });
            Promise.all([p11, p22]).then(results => {
                setHoge(results);
                successCallback("aaa");
            }).catch(reject => {
                successCallback();
            });
        };
        this.load.rexAwait("aa", {
            callback: callback,
            // scope: scope
        });
        this.load.image("back0", require("../assets/background/0.png"));
        this.load.image("back", require("../assets/background/1.png"));
        this.load.image("back2", require("../assets/background/2.png"));
        this.load.image("title", require("../assets/background/title.png"));
        this.load.image("button", require("../assets/button.png"));
        this.load.image("button_top", require("../assets/button_top.png"));
        this.load.image("button_oc", require("../assets/button_oc.png"));
        this.load.image("platform", require("../assets/background/platform.png"));
        this.load.image("p1_1", require("../assets/gosei/p1/1.png"));
        this.load.image("p1_2", require("../assets/gosei/p1/2.png"));
        this.load.image("p1_3", require("../assets/gosei/p1/3.png"));
        this.load.image("p1_4", require("../assets/gosei/p1/4.png"));
        this.load.image("p1_5", require("../assets/gosei/p1/5.png"));
        this.load.image("p1_6", require("../assets/gosei/p1/6.png"));
        this.load.image("p2_1", require("../assets/gosei/p2/1.png"));
        this.load.image("p2_2", require("../assets/gosei/p2/2.png"));
        this.load.image("p2_3", require("../assets/gosei/p2/3.png"));
        this.load.image("p2_4", require("../assets/gosei/p2/4.png"));
        this.load.image("p2_5", require("../assets/gosei/p2/4.png"));
        this.load.image("p2_6", require("../assets/gosei/p2/4.png"));
        this.load.image("p3_1", require("../assets/gosei/p3/1.png"));
        this.load.image("p3_2", require("../assets/gosei/p3/2.png"));
        this.load.image("p3_3", require("../assets/gosei/p3/3.png"));
        this.load.image("p3_4", require("../assets/gosei/p3/4.png"));
        this.load.image("p4_1", require("../assets/gosei/p4/1.png"));
        this.load.image("p4_2", require("../assets/gosei/p4/2.png"));
        this.load.image("p4_3", require("../assets/gosei/p4/3.png"));
        this.load.image("p4_4", require("../assets/gosei/p4/4.png"));

        this.load.spritesheet("gosei1", require("../assets/sprites/pipo-btleffect168_640.png"), {
            frameWidth: 640,
            frameHeight: 480
        });

        this.load.spritesheet("kamifubuki", require("../assets/sprites/kamifubuki36.png"), {
            frameWidth: 320,
            frameHeight: 240
        });

        var rect = new Phaser.Geom.Rectangle(width/2-100, 285, 200, 30);
        var gfx = this.add.graphics();
        this.load.on("progress", function (progress) {
            gfx.clear().fillStyle(0x666666).fillRectShape(rect).fillStyle(0xffffff).fillRect(width/2-100, rect.y, progress * 200, rect.height);
        });
    },
    create: function () {
        this.anims.create({
            key: "gosei_play",
            frames: this.anims.generateFrameNumbers("gosei1", {
                start: 0,
                end: 24
            }),
            frameRate: 15,
            repeat: 0
        });
        this.anims.create({
            key: "kamifubuki_play",
            frames: this.anims.generateFrameNumbers("kamifubuki", {
                start: 0,
                end: 24
            }),
            frameRate: 15,
            repeat: -1
        });
        this.scene.run("top",_sendData);
    }
};