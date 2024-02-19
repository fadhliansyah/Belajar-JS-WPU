var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    //jika angkot kosong
    if( penumpang.length == 0 ){
    //tambah penumpang di awal Array
    penumpang.push(namaPenumpang);
    //kembalikan isi array & ke;lar dari functionret
    return penumpang;

    }else {
    //telusuri seluruh kursi dari awal 
        for( i = 0; i < penumpang.length; i++){
    //jika ada kursi kosong
            if(penumpang[i] == undefined){
    //tambah penumpang di kursi tersebut
                penumpang[i]= namaPenumpang;
    //kembalikan isi array & keluar dari function
                return penumpang;
            }
    //jika sudah ada ama yang sama
            else if(penumpang[i] == namaPenumpang){
    //tampilkan pesan kesalahannya
                console.log(namaPenumpang + 'Sudah ada di dalam.');
    //kembalikan isi array & keluar dari function
                return penumpang
    }
    //jika seluruh kursi terisi 
            else if( i == penumpang.length - 1){
    //tambah penumpang di akhir array
                penumpang.push(namaPenumpang)
    //kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    //jika angkot kosong
    if( penumpang.length == 0 ){
        //tampilkan pesan bahwa angkot kosong,dan
        //tidak mingkin ada penumpang turun
        console.log('Angkot masih kosong!');

    }
    //else
    else{
        //telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++){
            //jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang){
                //hapus penumpang dengan mengubah namanya,
                //menjadi undifined
                penumpang[i] = undefined;
                //kembalikan isi array & keluar dari 
                return penumpang;
            }else if( i == penumpang.length -1 ){
                console.log(namaPenumpang + " Tidak ada di dalam angkot");
                return penumpang;
            }
        }
    }
            //kembalian isi array & keluar dari function
            return penumpang;
}
