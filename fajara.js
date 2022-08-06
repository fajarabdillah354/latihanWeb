alert("halo selamat datang mylove");
var love = prompt("masukan nama lengkap");
var lagi = true;

var nama = prompt("kamu sayang aku ngk");
alert("hhhmmm serius " + nama);
lagi = confirm("apa kamu yakin");
alert("terimakasih aku juga sayang kamu " + love);
// soal buatlah perulangan genap dan ganjil dari angka 1-100
let nilai_genap = [];
let nilai_ganjil = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    nilai_genap = [...nilai_genap, i];
  } else {
    nilai_ganjil = [...nilai_ganjil, i];
  }
}
console.log({ nilai_genap, nilai_ganjil });
