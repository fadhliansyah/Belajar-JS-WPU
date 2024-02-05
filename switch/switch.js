var angka = parseInt(prompt('Masukan Angka :'));

switch (angka) {
    case 1:
        alert('Anda memasukan angka 1');
        break;
    case 2:
        alert('Anda memasukan angka 2');
        break;
    case 3:
        alert('Anda memasukan angka 3');
        break;
    default:
        alert('Angka yangg anda masukan salah')
        break;
}

alert('ADA LAGI YAA');

var item = prompt('Masukan nama makanan / minuman : \n (Ex: nasi, daging, susu, hambburger, softdrink)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('Makanan / minuman sehat nih');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('Makanan / minuman tidak sehat nih');
        break;

    default:
        alert('Coba masukan yang ada di Example yaaa');
        break;
}