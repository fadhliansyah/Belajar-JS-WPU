//Alert
alert('Selamat');
alert('Datang');

//Prompt
var nama = prompt('Masukan Nama: ');
alert('Selamat Datang '+ nama);

//Confirm
var tes = confirm('Apakah kamu adalah  '+ nama);
if (tes === true) { 
    alert('Baiklah Fadhli');   
}else{
    alert('SIAPA KAMU?');
}

//Gabung
alert('Selamat Datang..');
var ulang = true;

while (ulang) {
    var nama = prompt('Masukan Nama Anda:');
    alert('Hiii '+ nama);

    ulang = confirm('Lakukan Ulang?');
}

alert('Terima Kasih')