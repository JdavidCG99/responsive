//declaraciones de escucha de eventos
$(document).ready(function(){
    document.getElementById("btnder").addEventListener("click",moverderlist1,false); 
    document.getElementById("btnder1").addEventListener("click",moverderlist2,false);    
    document.getElementById("btnder3").addEventListener("click",moverderlist3,false);
    document.getElementById("btnderes").addEventListener("click",moverderlist1,false); 
    document.getElementById("btnderes1").addEventListener("click",moverderlist2,false);    
    document.getElementById("btnderes3").addEventListener("click",moverderlist3,false);
    //document.getElementById("btnp1").addEventListener("click",acomodar1,false);
});
//movimientos de la lista 1
function moverderlist1(){
    var locales=document.querySelectorAll(".local");
    if(visibleder()){
        for(var y=0; y<1;y++){
            if(y<locales.length){
                $(locales[y]).replaceWith(jQuery(locales[y+1]));  
            }
        }
    }
}
function visibleder(){
    v=true;
    const relativePosition = new ScrollUtility.Scroll().getRelativeElementPosition("#local7");
    if (relativePosition > 0 && relativePosition < 1) {
        v=false;
    }
    return v;
}

//movimiento lista2
function moverderlist2(){
    var locales=document.querySelectorAll(".local1");
    if(visibleder2()){
        for(var y=0; y<1;y++){
            if(y<locales.length){
                $(locales[y]).replaceWith(jQuery(locales[y+1]));  
            }
        }
    }
}
function visibleder2(){
    v=true;
    const relativePosition = new ScrollUtility.Scroll().getRelativeElementPosition("#local13");
    if (relativePosition > 0 && relativePosition < 1) {
        v=false;
    }
    return v;
}

//movimiento lista3
function moverderlist3(){
    var locales=document.querySelectorAll(".local2");
    if(visibleder3()){
        for(var y=0; y<1;y++){
            if(y<locales.length){
                $(locales[y]).replaceWith(jQuery(locales[y+1]));  
            }
        }
    }
}
function visibleder3(){
    v=true;
    const relativePosition = new ScrollUtility.Scroll().getRelativeElementPosition("#local23");
    if (relativePosition > 0 && relativePosition < 1) {
        v=false;
    }
    return v;
}

/*
function acomodar1(){
    //alert("entro");
    if(!visible11()){
        alert("no se ve");
    }
}
function visible11(){
    v=true;
    const relativePosition = new ScrollUtility.Scroll().getRelativeElementPosition("#local1");
    if (relativePosition > 0 && relativePosition < 1) {
        v=false;
    }
    return v;
}*/