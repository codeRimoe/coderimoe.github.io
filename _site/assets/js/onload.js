window.onload = function(){
    //xml files
    if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else{
        // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","https://demo.rimoe.xyz/element/list.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;
    x=xmlDoc.getElementsByTagName("demo");
    prj_show = document.getElementById("projectsxml")
    var ctx = "";
    for(var i=0;i<5;i++){
        try{
            x[i].getElementsByTagName("blog");
        }
        catch(e){
            break;
        }
        var _ctx = "<li><a href='";
        try{
            var source=(x[i].getElementsByTagName("source")[0].childNodes[0].nodeValue);
        }
        catch(e){
            var source="";
        }
        _ctx += source + "'>"  + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</a>";
        try{
            var blog=(x[i].getElementsByTagName("blog")[0].childNodes[0].nodeValue);
            _ctx += "  <a href='" + blog + "'>[NOTE BLOG]</a>";
        }
        catch(e){
        }
        try{
            var web=(x[i].getElementsByTagName("web")[0].childNodes[0].nodeValue);
            _ctx += "  <a href='" + web + "'>[TRY NOW]</a>";
        }
        catch(e){
        }
        _ctx += "</li>";
        ctx += _ctx;
    }
    prj_show.innerHTML=ctx;

    //Sponsor
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
        loco.src=lop.src;
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
        console.log(click)
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
