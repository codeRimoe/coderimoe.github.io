window.onload = function(){

var shareArea = document.getElementById('share');
var back = document.getElementById('back');
var ali = document.getElementById('ali');
var wc = document.getElementById('wechat');
var bb = document.getElementById('bb');
var alp = document.getElementById('alp');
var wcp = document.getElementById('wcp');
var lop = document.getElementById('lop');
var loco = document.getElementById('loco');
var xx = document.getElementById('xx');
bb.style.display = 'none';
xx.style.display = 'none';

var click=0;

shareArea.onclick = function(){
    bb.style.display = 'block';
    shareArea.style.display = 'none';
};
back.onclick = function(){
    bb.style.display = 'none';
    shareArea.style.display = 'block';
};

ali.onclick = function(){
    if(click==1){
        loco.src=lop.src;
        click=0;
    }
    else{
        loco.src=alp.src;
        click=1;
    }
};

wc.onclick = function(){
    if(click==2){
        loco.src=lop.src;
        click=0;
    }
    else{
        loco.src=wcp.src;
        click=2;
    }
};

}
