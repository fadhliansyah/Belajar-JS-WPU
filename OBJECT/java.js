 var mahasiswa = {
    nama : 'Ahmad Fadhliansyah',
    lulus : true,
    IPSemester : [3.10, 3.50, 3.69, 3.78, 3.66],

    IPKumulatif : function(){
        var total = 0;
        var ips = this.IPSemester;
        for( var i = 0; i < ips.length; i++){
            total += ips[i];
        }
        return total / ips.length
    }

};
var orang = {
    nama : 'M Ramdhan Afiqisyah',
    umur : 22,
    Pekerjaan : 'Pekerja dan Mahasiswa',
    sapa : function(){
        return 'Hi, Nama saya '+ this.nama + ' Umur saya saat ini ' +this.umur+ ' dan kegiatan saya ialah ' +pekerjaan;
    }
};