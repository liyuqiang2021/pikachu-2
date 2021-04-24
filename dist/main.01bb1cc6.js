// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
// import string from './css.js'
var string = "\n/*\u9996\u5148\u51C6\u5907\u76AE\u5361\u4E18\u7684\u76AE\u80A4*/\n\n.skin *{box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before,.skin *::after{box-sizing: border-box;}\n.skin{\n    background: #ffe600;\n    min-height: 100vh;\n    position: relative;\n}\n\n/*\u51C6\u5907\u76AE\u5361\u4E18\u7684\u9F3B\u5B50*/\n\n.nose{\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    position: relative;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    z-index: 10;\n}\n\n/*\u6DFB\u52A0\u9F3B\u5B50\u52A8\u6548*/\n\n@keyframes wave{\n\n 0%{\n    transform: rotate(0deg);\n }\n 33%{\n    transform: rotate(5deg);\n }\n 66%{\n    transform: rotate(-5deg);\n }\n 100%{\n    transform: rotate(0deg);\n }\n}\n.nose:hover{\n    transform-origin: center bottom;\n    animation: wave 300ms infinite linear;\n}\n\n/*\u5236\u4F5C\u773C\u775B*/\n\n.yuan{\n    position:absolute;\n    width: 20PX;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    border-radius: 14px 14px 0 0;\n    background: black;\n}\n.eye{\n    border:2px solid #000;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left:50% ;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n    z-index:5;\n}\n.eye::before{\n    content: '';\n    display: block;\n    border:0px solid black;\n    width: 25px;\n    height: 25px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 3px;\n}\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translateX(100px);\n}\n\n/*\u5236\u4F5C\u4E0A\u5634\u5507*/\n\n.mouth{\n    width: 180px;\n    height: 180px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -90px;\n}\n.mouth .up{\n position: relative;\n top: -10px;\n z-index: 1;\n}\n.mouth .up .lip{\n    border:4px solid black;\n    height: 25px;\n    width: 102px;\n    background: #ffe600;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    border-top: none;\n    border-right: none;\n    border-left: none;\n}\n.mouth .up .lip.left{\n    border-radius: 0 0 0 50px;\n    transform: rotate(-20deg)translateX(-54px);\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 50px 0;\n    transform: rotate(20deg)translateX(54px);\n}\n.mouth .up .lip::before{\n    content: '';\n    display: block;\n    width: 10px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n}\n.mouth .up .lip.left::before{\n    right: -6px;\n}\n.mouth .up .lip.right::before{\n    left: -6px;\n}\n\n/*\u5236\u4F5C\u4E0B\u5634\u5507*/\n\n.mouth .down{\n    height: 160px;\n    position: absolute;\n    top: 15px;\n    width: 100%;\n    overflow: hidden;\n}\n.mouth .down .yuan1{\n    border: 3px solid black;\n    width: 160px;\n    height: 800px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -80px;\n    border-radius:100px/450px;\n    background: #9b000a;\n    overflow: hidden;\n}\n\n/*\u5236\u4F5C\u820C\u5934*/\n\n.mouth .down .yuan1 .yuan2{\n\n    width: 200px;\n    height: 275px;\n    background: #ff485f;\n    position: absolute;\n    bottom: -150px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n}\n\n/*\u6DFB\u52A0\u816E\u7EA2*/\n\n.face {\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n}\n.face.left{\n    transform: translateX(-180px);\n    background: #ff0000;\n    border-radius: 50px;\n}\n.face.right{\n    transform: translateX(180px);\n    background: #ff0000;\n    border-radius: 50px;\n}\n\n/*\u76AE\u5361\u4E18\u5236\u4F5C\u5B8C\u6210*/\n";
var player = {
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
  init: function init() {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.01bb1cc6.js.map