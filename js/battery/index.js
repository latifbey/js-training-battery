


function renkDegistir0(hucreId, renk){
    
    $("#hucre0").css("background-color","black")
     $("#hucre1").css("background-color","white")
     $("#hucre2").css("background-color","white")
     $("#hucre3").css("background-color","white")
     $("#hucre4").css("background-color","white")
}

function renkDegistir1(hucreId, renk){
    
    $("#hucre0").css("background-color","black")
     $("#hucre1").css("background-color","red")
     $("#hucre2").css("background-color","white")
     $("#hucre3").css("background-color","white")
     $("#hucre4").css("background-color","white")
}
function renkDegistir2(hucreId, renk){
    
    $("#hucre0").css("background-color","black")
     $("#hucre1").css("background-color","#ffbf00")
     $("#hucre2").css("background-color","#ffbf00")
     $("#hucre3").css("background-color","white")
     $("#hucre4").css("background-color","white")
}
function renkDegistir3(hucreId, renk){
    
    $("#hucre0").css("background-color","black")
     $("#hucre1").css("background-color","yellow")
     $("#hucre2").css("background-color","yellow")
     $("#hucre3").css("background-color","yellow")
     $("#hucre4").css("background-color","white")
}
function renkDegistir4(hucreId, renk){
    
    $("#hucre0").css("background-color","green")
     $("#hucre1").css("background-color","green")
     $("#hucre2").css("background-color","green")
     $("#hucre3").css("background-color","green")
     $("#hucre4").css("background-color","green")
}


function time() {
    var x =$('#game');
    setTimeout(function(){ x=renkDegistir1();}, 2000);
    setTimeout(function(){x=renkDegistir2(); }, 4000);
    setTimeout(function(){ x=renkDegistir3(); }, 6000);
    setTimeout(function(){ x=renkDegistir4(); }, 8000);

}
$("button").on('click').time();