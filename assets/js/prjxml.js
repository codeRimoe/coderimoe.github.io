window.onload=function(){
    //xml files
    if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else{
        // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","http://demo.rimoe.xyz/element/list.xml",false);
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
        console.log(_ctx);
    }
    console.log(x);
    prj_show.innerHTML=ctx;
}