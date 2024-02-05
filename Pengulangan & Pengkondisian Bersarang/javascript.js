var s = "";

for (var i = 0; i < 7; i++){
    for( var j = 0; j <= i; j++){
        s += '*';
        
    }
    s +=  '\n';
    
}

for (var x = 8; x > 0; x--){
    for( var c = 0; c < x; c++){
        s += '*';
    }
    s +=  '\n';
}

var W = "";
for(var x = 0; x <= 10; x++){
    for( var c = 10; c >= x; c--){
        W += '*';
    }
    W += '\n';
}

// POLA SEGITIGA

var    n      = 5; // jumlah baris
var result = '';

// buat baris
for (var row = 1; row <= n; row++) {

  // cetak spasi
  for (var space = 0; space < n - row; space++) {
    result += ' ';
  }
  
  // buat pola
  for (var star = 0; star < row; star++) {
    
    // jika nilai var star lebih dari atau sama dengan 1 tambahkan simbol tambah (+) setelahnya 
    if (star >= 1) {
        result += ' '
    }
    
    // selain dari itu langsung cetak *
    result += '*';
  }
  
  // print row
  result += '\n';

  //FROM YT
}
let z = 5;
let string = "";

// create ROW
for (let i = 1; i <= 10; i++) {
  // printing STAR
  for (let j = 1; j <= z; j++) {
      //kita cek setiap barisnya, setiap variable i bilangan ganjil spasi di kanan, dan setiap variable i bilangan genap spasi di kiri.
    if (i % 2 == 1) {
        string += "# ";
    }else {
        string += " #";
    }
  }
  string += "\n";
}






console.log(s);
console.log(W);
console.log(result);
console.log(string);

