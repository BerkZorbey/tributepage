//Change page En->TR
function changepage() {

    var url = "index.html";
    if (range = 1) {
        window.open(url, '_self');
    }

}
//Change page TR->EN
function changepage1() {

    var url = "tributepage-en.html";
    if (range = 1) {
        window.open(url, '_self');
    }

}
function hiddennote(){
    var note=document.getElementById("note");
    note.hidden=true;
   if(note.hidden=true){
       document.getElementById("note1").hidden=true;
    }
}
