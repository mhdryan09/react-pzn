# State

- Component kadang perlu untuk berubah dikarenakan interaksi yang dilakukan pengguna
- Misal, input di klik bisa menaikkan data counter. Tombol next bisa mengubah gambar banner yang sedang muncul, dan lain lain
- Component harus bisa mengingat nilai saat ini, seperti counter saat ini, gambar saat ini, dan lain lain
- Di React, memori spesific di component disebut `state`

## State Menggunakan Local Variabel biasa

- Apakah local variabel biasa di Component bisa digunakan untuk State? sayangnya hal ini tidak bisa dilakukan
- Ketika React melakukan render Component untuk yang kedua kali dan seterusnya, maka semua code Component akan dieksekusi ulang, oleh karena itu local variable akan kembali ke nilai awal
- Perubahan di local variabel juga, tidak akan memicu render ulang Component

## useState

- untuk membuat State, kita bisa menggunakan function `useState(initial)`
- https://react.dev/reference/react/useState
- function `useState` akan mengembalikan array dengan 2 nilai, nilai pertama adalah state nya, dan nilai kedua adalah function untuk mengubah value di state tersebut
- component yang menggunakan state tersebut, secara otomatis akan di render ulang

## State terisolasi dan Private

- State merupakan data yang terisolasi dan private secara local terhadap component yang menggunakan nya
- Artinya, jika kita me-render component yang sama berkali kali, maka state dari tiap component tersebut akan terpisah satu sama lain

## State Updates

- seperti yang sebelumnya dibahas, melakukan update state berkali-kali, tidak akan mengubah data state di snapshot saat itu, melainkan hanya memicu untuk render ulang dengan data state baru
- tapi, kadang kadang, kita memang mungkin ada keperluan untuk mengubah data di state yang sama berkali kali
- dan jika kita memang ingin mengubah data di state dengan data yang harapannya sudah diubah sebelumnya (walaupun belum di render ulang)
- kita bisa menggunakan `closure` sebagai parameter ketika memanggil function untuk update data state

```jsx
setCounter(prevState => prevState + 1);
```
