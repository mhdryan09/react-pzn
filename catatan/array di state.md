# Array di State

- sama seperti Object, Array di State juga harus kita perlakukan sebagai `Immutable data` (tidak bisa diubah)
- artinya, operasi menambah data, mengubah data, atau menghapus data di Array, kita harus membuat Array baru untuk di update ke State
- hal ini memang agak menyulitkan, oleh karena itu dengan bantuan library seperti `Immer` akan lebih mudah

## Mengubah Array

- Menambah

  - hindari : push, unshift
  - gunakan : concat, spread syntax [...arr]

- Menghapus

  - hindari : pop, shift, splice
  - gunakan : filter, slice

- Mengubah

  - hindari : splice, arr[i] = ...
  - gunakan : map

- Mengurutkan
  - hindari : sort, reverse
  - gunakan : buat array baru

# Tugas

- buat halaman baru dengan file
- task.html
- src/task/main.jsx
- src/task/Task.jsx
- registrasikan ke vite.config.js
