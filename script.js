const convert=()=>{
    var a=document.getElementById("myinput").value;
    var b=a*2.205
   document.getElementById("myp").innerHTML='<h4>' +b+'</h4>';
}

document.getElementById("myinput2").addEventListener("input",function(e){
    var a=e.target.value;
    var b=a/2.205;
    document.getElementById("kid").innerText=b;
   var c=a;
   var d=c*454;
   document.getElementById("grms").innerHTML= d;

   var e=a;
   var f=e*16;
   document.getElementById("ouns").innerHTML=f;

})