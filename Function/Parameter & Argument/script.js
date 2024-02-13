// a dan b PArameter
function tambah(a, b) {
    return a + b ;
}
function kali(a, b) {
    return a * b;
}

var hasil = kali(tambah(1,2),tambah(4,5))

console.log(hasil);

//lain lagi juka argumen lebih banyak dari pada parameter

function tambah1() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
    //return c + d + e;
}
var coba = tambah1(1,2,3,4);
console.log(coba);

// var hasil1 = tambah1 (3, 4, 5);
// console.log(hasil1);