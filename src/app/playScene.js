import Phaser from "phaser";
export default {
    key: "play",
    preload() {
        this.gameTime = 0;
        this.player = "";
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
    },
    create() {
        /*
        this.bgm = this.sound.add('music')
        this.bgm.setLoop(true)
        this.bgm.play();
        */
        this.background1 = this.add.tileSprite(400, 300, 1600, 600, "background1");
        this.ground = this.add.tileSprite(400, 600, 800, 100, "platform");
        this.physics.add.existing(this.ground);
        this.ground.body.immovable = true;
        this.ground.body.moves = false;
        this.player = this.physics.add.sprite(230, 250, "doux");
        this.player.setScale(0.2);
        this.player.getBounds();
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.player.setSize(100, 180, true);
        this.player.setOffset(130, 140);

        function getRandNumberFromRange(min, max) {
            var rand = min + Math.floor(Math.random() * (max - min));
            return rand;
        };

        this.physics.add.collider(this.player, this.ground);

        this.scoreText = this.add.text(16, 16, "SCORE: 0", {
            fontSize: "32px",
            fill: "#FFFFFF"
        });
        this.lifeAmountText = this.add.text(300, 16, "★★★", {
            fontSize: "32px",
            fill: "#FFFFFF"
        });

        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
        this.cameras.main.setBounds(0, 0, 800, 600);
    },
    update() {
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
    },
};
//export default GameScene;