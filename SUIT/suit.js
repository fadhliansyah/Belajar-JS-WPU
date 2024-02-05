var tanya = true;

while ( tanya ){
    //Nangkep dulu dari user
    var p = prompt('Apa Pilihan mu: gajah, semut, orang');
    //lalu pulihan komputernya
    // random
    var comp = Math.random();

    if( comp < 0.34){
        comp = 'gajah';
    }else if( comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else{
        comp = 'semut';
    }

    var hasil = '';
    //rules
    if( p == comp){
        hasil = 'SERI !';
    }else if(p == 'gajah'){
        // if( comp == 'orang'){
        //     hasil = 'MENANG';
        // }else{
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    }else if(p == 'orang'){
        // if (comp == 'gajah'){
        //     hasil = 'KALAH';
        // }else{
        //     hasil = 'Menang';
        // }
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    }else if(p == 'semut'){
        // if (comp == 'gajah'){
        //     hasil = 'MENANG';
        // }else{
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    }else{
        hasil = 'Memasukan pilihan yang salah!!'
    }

    //tampilan hasilnya

    alert ('Kamu memilih : ' + p + '. Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil );

    tanya = confirm(' Mau kah lagi?');
}

alert('Terima Kasih sudah mau bermain dengan saya');