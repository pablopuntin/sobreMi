
//titulo Pablo puntin
let writing = str => {
    let arrFromStr =str.split('');
    let i=0;
    let printStr =setInterval(function(){
        document.getElementById("logo1").innerHTML += arrFromStr[i];
        i++;
       
       if (i === arrFromStr.length){
           clearInterval(printStr);
       }
    },280);
};

setInterval(writing('Pablo Puntin'), 100);

//subtitulo programador web

let writing1 = str1 => {
    let arrFromStr1 =str1.split('');
    let i=0;
    let printStr1 =setInterval(function(){
        document.getElementById("logo2").innerHTML += arrFromStr1[i];
        i++;
       
       if (i === arrFromStr1.length){
           clearInterval(printStr1);
       }
    },280);
};

setInterval(writing1('Desarrollador Web'), 100);

