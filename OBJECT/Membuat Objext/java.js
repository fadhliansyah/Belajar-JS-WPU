//Membuat Object
//Object Literal

var mhs1 = {
    nama : 'Ahmad Fadhliansyah',
    nim : '0110121189',
    email : 'ahma21189si@student.nurulfikri.ac.id',
    smt : 6,
    jurusan : 'Sistem Informasi'
};

var mhs2 = {
    nama : 'M Ramdhan Afiqisyah',
    nim : '0110812030',
    email : 'muha21189si@student.nurulfikri.ac.id',
    smt : 4,
    jurusan : 'Sistem Informasi'
};


//function declaration
function buatObjectMahasiswa(nama, nim, email,smt,jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.smt = smt;
    mhs.jurusan = jurusan;

    return mhs;
}

var mhs3= buatObjectMahasiswa('Ahmad Fadhliansyah', '0110121189', 'fadhliansyah9f@gmail.com', 6, 'Sistem Informasi');


//Contructor
function Mahasiswa(nama,nim,email,smt,jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.smt = smt;
    this.jurusan = jurusan;
};

var mhs4 = new Mahasiswa('Dadan Subianto', '01121930', 'dadangGokil@gmail.com',2 , 'Tekknik Informatika');