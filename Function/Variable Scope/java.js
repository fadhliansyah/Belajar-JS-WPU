 //variabel global 
 var a = 1;
//var global bisa di akses oleh func
 function test(){
    //variabel dalam global tidak bisa di akses dari luar
    var b = 2;

    //name conflict tidak akan menumpuk var yang di global
    var a = 3; 
    console.log(a);
    console.log(b);

    console.log(window.a);// mengambil yang global

    //jika tidak pakai var akan di ambil yang di func atau akan menimpa yang ada di variabel global



 }

 

 console.log(a);//sukses
 console.log(b);//error