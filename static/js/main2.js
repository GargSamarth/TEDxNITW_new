window.onscroll = function () {
    var info4Y = document.getElementById('info4').offsetTop;
    var info3Y = document.getElementById('info3').offsetTop;
    var info2Y = document.getElementById('info2').offsetTop;
    var info1Y = document.getElementById('info1').offsetTop;
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos + 80 < info4Y){
        document.getElementById('ed5').style.opacity = "1"
        document.getElementById('ed4').style.opacity = "0.7";
        document.getElementById('ed3').style.opacity = "0.7";
        document.getElementById('ed2').style.opacity = "0.7";
        document.getElementById('ed1').style.opacity = "0.7";
    }  
    else if(currentScrollPos + 80 >= info4Y && currentScrollPos + 80 < info3Y){
        document.getElementById('ed5').style.opacity = "0.7"
        document.getElementById('ed4').style.opacity = "1";
        document.getElementById('ed3').style.opacity = "0.7";
        document.getElementById('ed2').style.opacity = "0.7";
        document.getElementById('ed1').style.opacity = "0.7";
    }  
    else if(currentScrollPos + 80 >= info3Y && currentScrollPos + 80 < info2Y){
        document.getElementById('ed5').style.opacity = "0.7"
        document.getElementById('ed4').style.opacity = "0.7";
        document.getElementById('ed3').style.opacity = "1";
        document.getElementById('ed2').style.opacity = "0.7";
        document.getElementById('ed1').style.opacity = "0.7";
    }
    else if(currentScrollPos +80 >= info2Y && currentScrollPos + 80 < info1Y){
        document.getElementById('ed5').style.opacity = "0.7"
        document.getElementById('ed4').style.opacity = "0.7";
        document.getElementById('ed3').style.opacity = "0.7";
        document.getElementById('ed2').style.opacity = "1";
        document.getElementById('ed1').style.opacity = "0.7";
    }   
    else{
        document.getElementById('ed5').style.opacity = "0.7"
        document.getElementById('ed4').style.opacity = "0.7";
        document.getElementById('ed3').style.opacity = "0.7";
        document.getElementById('ed2').style.opacity = "0.7";
        document.getElementById('ed1').style.opacity = "1";
    }
}