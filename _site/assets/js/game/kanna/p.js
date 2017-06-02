// Call the canvas
var main = document.getElementById("mainCanvas");
var mainctx = main.getContext("2d");
var state = document.getElementById("stateCanvas");
var statectx = state.getContext("2d");

var CBH=600,CBW=1080,bexptime=150,maxwt=300,wk=50;
var inithp=10,initspd=5,initboom=8,initzz=5;
var inithp_M=5,initspd_M=3;
var ttt=0,ppp=1,mmm=0,hhh=0,los=1,wt=maxwt,boomnum=initboom,allkill=0;

var reftime=12;
var boomcd=200;
var bakacd=5000;
var boomper=1;

// Handle keyboard controls
var keysDown = {};
addEventListener("keydown", function (e) {
                 keysDown[e.keyCode] = true;
                 }, false);

addEventListener("keyup", function (e) {
                 delete keysDown[e.keyCode];
                 switch (e.keyCode){
                 case 13:if(mmm&&los){ppp=pause(mainctx,statectx,ppp);}else if(!mmm){mmm=1;}break;
                 case 27:if((!ppp)||(!los)){reset(),menu(mainctx,statectx);}break;
                 case 72:if(!mmm){hhh++,hhh%=2,menu(mainctx,statectx);}break;
                 }
                 }, false);

touch = function (A,B,dis){
    var dx = Math.abs(A.x-B.x);
    var dy = Math.abs(A.y-B.y);
    if(Math.max(dx,dy)<dis)
        return true;
    return false;
}

pause = function(mainctx,statectx,ppp){
    if(ppp){
        mainctx.drawImage(pausepic, 0, 0);
        statectx.clearRect(0, 0, CBW, 100);
        statectx.drawImage(pbg[0], 0, 0);
        return 0;
    }
    else return 1;
}

lose = function(mainctx,statectx){
    alert("Game Over! You Lose!\nKill:"+allkill+"   Time:"+(maxwt-wt));
    mainctx.drawImage(losepic, 0, 0);
    statectx.drawImage(pbg[1], 0, 0);
    los=0;
}

win = function(mainctx,statectx){

    alert("Congratulations! You Win!\nKill:"+allkill+"   Time:"+(maxwt-wt));
    mainctx.drawImage(winpic, 0, 0);
    statectx.drawImage(pbg[1], 0, 0);
    los=0;
}

menu = function(mainctx,statectx){
    mainctx.drawImage(sbgmain[hhh], 0, 0);
    statectx.clearRect(0, 0, CBW, 100);
    statectx.drawImage(sbgst[0], 0, 0);
}

reset = function(){
    keysDown={};
    ttt=0,ppp=1,mmm=0,hhh=0,los=1,wt=maxwt,boomnum=initboom,allkill=0;
    kanna = new K(kimg,CBW/2-128,CBH/2-128,inithp,initspd,initboom,[0,0,0,0],0);
    kobayashi = new X(ling,5,0);
    baka_pool = [];
    boom_pool = [];
    for(i = 0; i < kanna.boom;i++)
        boom_pool.push(new B(bing,-233,-233,0,0));
}

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
losepic.src = "/assets/img/game/kanna/lose.png";
winpic.src = "/assets/img/game/kanna/win.png";
pausepic.src = "/assets/img/game/kanna/pause.png";
stbg.src = "/assets/img/game/kanna/bg.png";
pbg[0].src = "/assets/img/game/kanna/pbg.png";
pbg[1].src = "/assets/img/game/kanna/ebg.png";
sbgmain[0].src = "/assets/img/game/kanna/menu.png";
sbgmain[1].src = "/assets/img/game/kanna/help.png";
sbgst[0].src = "/assets/img/game/kanna/sbg.png";
sbgst[1].src = "/assets/img/game/kanna/hbg.png";
bg.src = "/assets/img/game/kanna/background.png";
