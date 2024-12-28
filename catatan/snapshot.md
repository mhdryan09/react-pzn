# Snapshot

- variable state sekilas mungkin terlihat seperti variabel javascript biasa
- tapi sebenarnya, state itu mirip seperti snapshot (kondisi saat itu). Mengubah nilai variable state tidak akan mengubah snapshot, melainkan akan memicu render ulang untuk membuat snapshot baru
- kita mungkin berpikir bahwa tampilan web berubah secara langsung karena response dari event yang dilakukan oleh pengguna, seperti klik tombol
- namun sebenarnya tidak seperti itu, kita sudah tahu di materi sebelumnya, ketika terjadi perubahan state, itu akan memicu render ulang, sehingga akan membuat snapshot baru yang ditampilkan di layar

## Kesalahan mengubah State

- paham tentang snaphsot ini, akan memberi gambaran cara pandang kita terhadap data di state
- berikut adalah contoh kesalahan yang biasa dilakukan ketika mengubah state
- kita berpikir jika mengubah state, saat itu juga data akan berubah, padahal mengubah state sebenarnya hanyalah mentrigger render ulang dengan nilai state yang baru

```jsx
function handleClick() {
	setCounter(counter + 1);
	setCounter(counter + 1);
	setCounter(counter + 1);
	console.log(counter);
}
```

## kenapa Counter tidak berubah 3x?

- hal ini dikarenakan, `setCounter()` tidak akan mengubah data counter yang ada di snapshot saat ini
- setCounter() hanya akan melakukan render ulang dengan data counter yang baru
- saat kita memanggil `setCounter()` sebanyak 3x, bukan berarti React akan melakukan render ulang sebanyak 3x, React akan menunggu sampai `Event Handler` selesai, jika ada perubahan state, maka akan dilakukan render ulang
- artinya, render ulang akan dilakukan sekali saja, walaupun kita mengubah state berkali-kali

- untuk menghindari kesalahan ini, kita bisa menggunakan `setCounter(prevState => prevState + 1)`
- atau bisa juga dengan `setCounter(counter + 3);`
