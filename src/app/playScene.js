import Phaser from "phaser";


function getRandNumberFromRange(min, max) {
    var rand = min + Math.floor(Math.random() * (max - min));
    return rand;
};

export default {
    key: "play",
    preload() {
        this.gameTime = 0;
        
        this.isGameOver = false;
        this.isPointerDown = false;
        this.touchingTime = 0;
        this.score = 0;
        this.scoreText = "";
        this.lifeAmountText = "";
        this.scoreLifeAmount = 3;
        this.backgroundSpeed = 1;
        this.bgm = null;
        this.playerJumpCnt = 0;
        //currentPage = getParam('page')

        this.p1 = "";
        this.p2 = "";
        this.p3 = "";
        this.p4 = "";
    },

    create() {

        /*
        this.bgm = this.sound.add('music')
        this.bgm.setLoop(true)
        this.bgm.play();
        */

        /*
        this.background1 = this.add.tileSprite(400, 300, 1600, 600, "background1");
        this.ground = this.add.tileSprite(400, 600, 800, 100, "platform");
        this.physics.add.existing(this.ground);
        this.ground.body.immovable = true;
        this.ground.body.moves = false;
        */

        var rand1 = getRandNumberFromRange(1,4);
        var rand1str = "p1_" + rand1;

        var rand2 = getRandNumberFromRange(1,4);
        var rand2str = "p1_" + rand2;

        var rand3 = getRandNumberFromRange(1,4);
        var rand3str = "p1_" + rand3;

        var rand4 = getRandNumberFromRange(1,4);
        var rand4str = "p1_" + rand4;


        
        this.p1 = this.add.sprite(230, 100+160*0, rand1str);
        this.p2 = this.add.sprite(230, 100+160*1, "p2_1");
        this.p3 = this.add.sprite(230, 100+160*2, "p3_1");
        this.p4 = this.add.sprite(230, 100+160*3, "p4_1");




        /*
        this.scoreText = this.add.text(16, 16, "SCORE: 0", {
            fontSize: "32px",
            fill: "#FFFFFF"
        });
        this.lifeAmountText = this.add.text(300, 16, "★★★", {
            fontSize: "32px",
            fill: "#FFFFFF"
        });
        */

        //this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
        //this.cameras.main.setBounds(0, 0, 800, 600);



        //var currentPage = this.getParam('page');
        //console.log(currentPage);
    },
    update() {

        /*
        this.playerJumpCnt += 1;
        if (this.isGameOver === false) {
                var pointer = this.input.activePointer;
                if (pointer.isDown) {
                    //タッチ時間を計測
                    var touchX = pointer.x;
                    var touchY = pointer.y;
                    this.touchingTime += 1;
                }
                this.input.on('pointerup', function (pointer) {
                    //短いとジャンプ扱い
                    if (0 < this.touchingTime && this.touchingTime <= 10) {
                        this.isPointerDown = true;
                    }
                    this.touchingTime = 0;
                }, this);
                //進む
                if (10 <= this.touchingTime) {
                    this.player.x += 5;
                    //戻る
                } else if (this.touchingTime == 0) {
                    this.player.x -= 5;
                }
                //後方限界
                if (this.player.x <= 180) {
                    this.player.x = 180;
                }

            if (this.isPointerDown && this.playerJumpCnt >= 30) {
                this.isPointerDown = false;
                this.playerJumpCnt = 1;
                this.player.setVelocityY(-500);
            } else if (this.isPointerDown && this.player.body.touching.down && this.playerJumpCnt <= 30) {
                this.isPointerDown = false;
                this.player.setVelocityY(-1000);
            }
            this.player.anims.play("run", true);
        }
        this.background1.tilePositionX += this.backgroundSpeed * 2;
        //this.ground.tilePositionX += this.backgroundSpeed;
        */
    },
};
//export default GameScene;