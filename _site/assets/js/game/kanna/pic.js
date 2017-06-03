
var kimg = [new Image(),new Image()];
var ming = [new Image(),new Image(),new Image(),new Image()];
var bing = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
var ling = [new Image(),new Image()];
var stpic =[new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
var losepic=new Image();
var winpic=new Image();
var pausepic=new Image();
var sbgmain = [new Image(),new Image()];
var sbgst = [new Image(),new Image()];
var pbg=[new Image(),new Image()];
var stbg = new Image();
var bg = new Image();

kimg[0].src = "/assets/img/game/kanna/figure/kn.png";
kimg[1].src = "/assets/img/game/kanna/figure/kn2.png";
ling[0].src = "/assets/img/game/kanna/figure/xl.png";
ling[1].src = "/assets/img/game/kanna/figure/xl2.png";
ming[0].src = "/assets/img/game/kanna/figure/tr1.png";
ming[1].src = "/assets/img/game/kanna/figure/tr2.png";
ming[2].src = "/assets/img/game/kanna/figure/tr3.png";
ming[3].src = "/assets/img/game/kanna/figure/tr4.png";
bing[0].src = "/assets/img/game/kanna/boom/boom1.png";
bing[1].src = "/assets/img/game/kanna/boom/boom2.png";
bing[2].src = "/assets/img/game/kanna/boom/boom3.png";
bing[3].src = "/assets/img/game/kanna/boom/boom4.png";
bing[4].src = "/assets/img/game/kanna/boom/boom5.png";
bing[5].src = "/assets/img/game/kanna/boom/boom6.png";
stpic[0].src = "/assets/img/game/kanna/state/udoff.png";
stpic[1].src = "/assets/img/game/kanna/state/sdoff.png";
stpic[2].src = "/assets/img/game/kanna/state/disoff.png";
stpic[3].src = "/assets/img/game/kanna/state/dzoff.png";
stpic[4].src = "/assets/img/game/kanna/state/udon.png";
stpic[5].src = "/assets/img/game/kanna/state/sdon.png";
stpic[6].src = "/assets/img/game/kanna/state/dison.png";
stpic[7].src = "/assets/img/game/kanna/state/dzon.png";

if(device.mobile()){
    losepic.src = "/assets/img/game/kanna/mobile/lose.png";
    winpic.src = "/assets/img/game/kanna/mobile/win.png";
    pausepic.src = "/assets/img/game/kanna/mobile/ppp.png";
    pbg[0].src = "/assets/img/game/kanna/mobile/pbg.png";
    pbg[1].src = "/assets/img/game/kanna/mobile/ebg.png";
    sbgmain[0].src = "/assets/img/game/kanna/mobile/menu.png";
    sbgmain[1].src = "/assets/img/game/kanna/mobile/help.png";
    sbgst[0].src = "/assets/img/game/kanna/mobile/sbg.png";
    sbgst[1].src = "/assets/img/game/kanna/mobile/hbg.png";
}
else {
    losepic.src = "/assets/img/game/kanna/pc/lose.png";
    winpic.src = "/assets/img/game/kanna/pc/win.png";
    pausepic.src = "/assets/img/game/kanna/pc/ppp.png";
    pbg[0].src = "/assets/img/game/kanna/pc/pbg.png";
    pbg[1].src = "/assets/img/game/kanna/pc/ebg.png";
    sbgmain[0].src = "/assets/img/game/kanna/pc/menu.png";
    sbgmain[1].src = "/assets/img/game/kanna/pc/help.png";
    sbgst[0].src = "/assets/img/game/kanna/pc/sbg.png";
    sbgst[1].src = "/assets/img/game/kanna/pc/hbg.png";
}

stbg.src = "/assets/img/game/kanna/bg.png";
bg.src = "/assets/img/game/kanna/background.png";
