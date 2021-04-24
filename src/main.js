// import string from './css.js'
const string = `
/*首先准备皮卡丘的皮肤*/

.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before,.skin *::after{box-sizing: border-box;}
.skin{
    background: #ffe600;
    min-height: 100vh;
    position: relative;
}

/*准备皮卡丘的鼻子*/

.nose{
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}

/*添加鼻子动效*/

@keyframes wave{

 0%{
    transform: rotate(0deg);
 }
 33%{
    transform: rotate(5deg);
 }
 66%{
    transform: rotate(-5deg);
 }
 100%{
    transform: rotate(0deg);
 }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}

/*制作眼睛*/

.yuan{
    position:absolute;
    width: 20PX;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 14px 14px 0 0;
    background: black;
}
.eye{
    border:2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left:50% ;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
    z-index:5;
}
.eye::before{
    content: '';
    display: block;
    border:0px solid black;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 3px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}

/*制作上嘴唇*/

.mouth{
    width: 180px;
    height: 180px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -90px;
}
.mouth .up{
 position: relative;
 top: -10px;
 z-index: 1;
}
.mouth .up .lip{
    border:4px solid black;
    height: 25px;
    width: 102px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    border-top: none;
    border-right: none;
    border-left: none;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-20deg)translateX(-54px);
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    transform: rotate(20deg)translateX(54px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 10px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.left::before{
    right: -6px;
}
.mouth .up .lip.right::before{
    left: -6px;
}

/*制作下嘴唇*/

.mouth .down{
    height: 160px;
    position: absolute;
    top: 15px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 160px;
    height: 800px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -80px;
    border-radius:100px/450px;
    background: #9b000a;
    overflow: hidden;
}

/*制作舌头*/

.mouth .down .yuan1 .yuan2{

    width: 200px;
    height: 275px;
    background: #ff485f;
    position: absolute;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}

/*添加腮红*/

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
}
.face.left{
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50px;
}
.face.right{
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50px;
}

/*皮卡丘制作完成*/
`
const player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    n: 1,
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key] // pause / play / slow
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        window.clearInterval(player.id)
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}
player.init()