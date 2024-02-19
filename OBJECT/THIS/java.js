// THIS
// var a = 10;
// console.log(window.a);


// Cara 1 -- function declaration
// function halo(){
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikan object Global



//cara 2 - object literal
// var obj = {};
// obj.halo = function(){
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();


//cara 3 - contructor
function Halo(){
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat