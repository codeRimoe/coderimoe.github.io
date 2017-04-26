window.onload = function(){

var shareArea = document.getElementById('share');
var back = document.getElementById('back');
var ali = document.getElementById('ali');
var wc = document.getElementById('wechat');
var bb = document.getElementById('bb');
var alp = document.getElementById('alp');
var wcp = document.getElementById('wcp');
bb.style.display = 'none';
alp.style.display = 'none';
wcp.style.display = 'none';
var show_div = document.getElementById('sponsor');
var bg_div = document.getElementById('fade');

shareArea.onclick = function(){
    bb.style.display = 'block';
    shareArea.style.display = 'none';
};
back.onclick = function(){
    bb.style.display = 'none';
    shareArea.style.display = 'block';
};

//鼠标移入分享区域，分享区域内容呈现
ali.addEventListener("mouseover",function(){
    var e = event || window.event;
    alp.style.left=(e.pageX)+"px";
    alp.style.top=(e.pageY-132)+"px";
    alp.style.display="block";
},false);

wc.addEventListener("mouseover",function(){
    var e = event || window.event;
    wcp.style.left=(e.pageX)+"px";
    wcp.style.top=(e.pageY-132)+"px";
    wcp.style.display="block";

},false);

//鼠标移出分享区域，分享区域内容消失
ali.addEventListener("mouseout",function(){
    alp.style.display="none";
},false);

wc.addEventListener("mouseout",function(){
   wcp.style.display="none";
},false);

}
