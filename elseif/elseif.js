var angka = prompt('Masukan Angka:');

if (angka % 2 == 0) {
    alert(angka + ' Adalah bilangan GENAP');
}else if (angka % 2 == 1){
    alert(angka + 'Adalah bilangn GANJIL');
}else{
    alert('Yang anda masukan bukanlah angka!')
}