//mengunakan base case

function cetakAngka(n){
    ///////////////
    if(n === 0) {//
        return;  ///////=> BASE CASE
    }            //
    ///////////////
    console.log(n);
    cetakAngka(n-1);

}
cetakAngka(10);

//faktorial
var f = parseInt(prompt('Masukan angka :'))
function faktorial(f){
    if (f === 0){
        return 1;
    }

    return f * faktorial(f-1);
}

console.log('faktorial '+ f +' = '+ faktorial(f));