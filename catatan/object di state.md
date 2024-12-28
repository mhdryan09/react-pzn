# Object di State

- state bisa menyimpan jenis data javascript apapun, termasuk object
- tapi kita tidak disarankan untuk mengubah object yang terdapat di state
- jika kita ingin mengubah object di state, kita disarankan membuat object baru lalu mengubah data di state tersebut dengan object baru

## Immutable Data

- saat kita membuat data di state, kita harus memperlakukan data di state sebagai `immutable data (tidak bisa berubah)`
- artinya, data di state hanya digunakan untuk dibaca (read only)
- jika kita ingin mengubah data di state, maka kita harus ubah menggunakan data baru, yang artinya, data lama tidak dimodifikasi
- ini adalah praktek yang biasa dilakukan di React. Walaupun pada kenyataannya object di javascript tidak immutable
- hal ini disarankan agar kita tidak salah mengubah data langsung, padahal kita tahu bahwa mengubah data tidak akan memicu proses render ulang
- untungnya di javascript kita bisa menggunakan `spread syntax` untuk membantu mencopy attribute di object

# Tugas

- buat halaman baru dengan file
- contact.html
- src/contact/main.jsx
- src/contact/ContactForm.jsx
- registrasikan ke vite.config.js

## Nested Object

- kadang ada kasus kita menggunakan Nested Object
- sama seperti sebelumnya, kita disarankan untuk selalu membuat object baru ketika mengubah state
- kadang memang menyulitkan ketika nested object nya terlalu besar, oleh karena itu disarankan tidak terlalu dalam membuat nested object

## Immer Library

- salah satu library yang sering digunakan ketika develop aplikasi menggunakan React adalah `Immer`
- immer adalah library yang digunakan untuk membuat immutable object dari object saat ini
- menggunakan immer akan lebih mudah dibandingkan menggunakan spread syntax, terutama untuk object yang kompleks dan nested
- https://github.com/immerjs/immer

## Use Immer

- library Immer juga bisa diintegrasikan dengan React State dengan mudah
- kita bisa menggunakan library `Use-Immer`
- https://github.com/immerjs/use-immer
- kita cukup mengganti `useState` dengan `useImmer`
- dan untuk mengupdate object di state, kita bisa menggunakan function sebagai parameter di update method nya
