import Phaser from "phaser";
import bootScene from "./bootScene";
import playScene from "./playScene";
import menuScene from "./menuScene";
import topScene from "./topScene";
import AwaitLoaderPlugin from '../../plugins/awaitloader-plugin.js';



export default {
  type: Phaser.AUTO,
scale: {
        mode: Phaser.Scale.FIT,
        parent: 'canvas',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 640,
        height: 600
    },
  //width: 800,
  //height: 600,
  //parent: "canvas",
  pixelArt: true,
  title: "201908",
  url: "https://github.com/oggata/",
  banner: {
    text: "white",
    background: ["#FD7400", "#FFE11A", "#BEDB39", "#1F8A70", "#004358"]
  },
  plugins: {
        global: [{
            key: 'AwaitLoader',
            plugin: AwaitLoaderPlugin,
            start: true
        },
        ]
    },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 980
      },
      debug:false
    }
  },
  scene: [bootScene,topScene, menuScene, playScene]
};
