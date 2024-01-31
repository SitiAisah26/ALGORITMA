// 1. mencari keliling persegi panjang
// memasukkan nilai panjang, lebar 
// menghitung rumus: 2*panjang + 2*lebar
// menampilkan hasil

// memasukkan nilai panjang, lebar 

let panjang = 150 ;
let lebar = 40 ;

// menghitung rumus 
let hasil = 2 * panjang + 2 * lebar;

// menampilkan 
console.log ("keliling persegi panjang adalah: " + hasil )

// 2. luas lingkaran

//tentukan phi dan r
let phi = 3.14;
let r = 10;

let hasilL = phi * r * r;

console.log ("hasilnya: " + hasilL)

let lp = 64;

let sisi = Math.sqrt(lp)

let hasilNya = 4 * sisi;

console.log (sisi)

console.log (hasilNya)
 
// syarat umur membuat KTP
// input
let umur = 14;

// proses / logika
if(umur >=17){
    result = "membuat KTP";
} else {
    result = "belum bisa mebuat KTP"
}

// output
console.log(result)

// nilai akhir
let PABP = 86;
let MTK = 82;
let DPK = 77;

// proses / logika
let medium = (PABP + MTK + DPK) / 3

if(medium >= 80 && medium <= 100){
   grade ="A"
}
   else if (medium >=75 && medium <=100) {
   grade ="B"
}

console.log (medium)

