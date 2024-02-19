// Manipulasi Array

//1. Menambah isi array
// var arr = [];
// arr[0] = "Ahmad";
// arr[1] = "Fadhliansyah";

// console.log(arr);
// console.log(arr[1]);

//2.Menhapus isi Array

// var arr = ["Ahmad", "Fadhliansyah", "Mantap"];
// arr[2] = undifined;
// console.log(arr);

//3. Menampilkan isi Array
// var arr = ["Ahmad", "Fadhliansyah", "Mantap"];

// for( var i = 0; i < arr.length; i++){
//     console.log('Urutan Nama saya ke-'+ i + ' : ' + arr[i]);
// }

// Method pada array
// var arr = ["Ahmad", "Fadhliansyah", "Mantap"];
//1. JoIN
// console.log(arr.join(' - '));

//2. push & POP
// arr.push('Mantap');
// arr.pop();
// console.log(arr.join(' - '));

//3. Unshift & Shift
// arr.unshift('Hi');
// arr.shift();
// console.log(arr.join(' - '));

// var arr = ["Ahmad", "Fadhliansyah", "Mantap"];
//4.Splice
// splicee(indexAwal, mauDihapusBerapa, elemenbaru1, elemenbaru2, ...)
// arr.splice(1, 1, 'Suherman', 'Ronaldo');
// console.log(arr.join(' - '));

//5. Slice
// slice(awal,akhir)
// var arr = ["Ahmad", "Fadhliansyah", "Mantap",'Suherman', 'Ronaldo'];
// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));


//6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["Ahmad", "Fadhliansyah", "Mantap",'Suherman', 'Ronaldo'];
// // for(var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }
// angka.forEach(function(e){
//     console.log(e);
// })

// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + (i+1) + 'Adalah : ' + e);
// })

//7.map
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
//     return e * 2;
// })
// console.log(angka2.join(' - '));

//8. sort
// var angka = [1,2,10,6,7,5,20,3,4,8];
// console.log(angka.join(' - '));
// angka.sort(function(a,b){
//     return a - b;
// });
// console.log(angka.join(' - '));

//9. FIlter & find
var angka = [1,2,10,6,7,5,20,3,4,8];

var angka2 = angka.filter(function(x){
    return x > 4;
})
console.log(angka2.join(' - '));

var angka3 = angka.find(function(x){
    return x > 4;
})
console.log(angka3);