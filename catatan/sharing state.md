# Sharing State

- kadang, kita ingin membuat state untuk beberapa component yang selalu berubah bersama-sama, atau sederhananya adalah Sharing (berbagi) state
- untuk melakukan ini, kita harus mengubah lokasi state dari component - component itu, ke parent component mereka, lalu kita kirim state nya melalui props
- misal, pada form task sebelumnya, kita akan buat 2 child component, component untuk taskForm nya dan component untuk taskList nya
- kita akan share state nya dari Task ke TaskForm dan TaskList melalui `props`

## Mempertahankan State

- state terisolasi antar component. React melacak state mana yang dimiliki oleh component berdasarkan tempatnya di struktur UI
- kita bisa mengatur, kapan kita ingin mempertahankan state, kapan kita akan mereset state
- state sendiri tidak disimpan di dalam component. State itu disimpan di React, sedangkan ketika kita menggunakan state di component, maka sebenarnya kita akan menggunakan state yang ada di React
- cara React bisa tahu state mana yang digunakan oleh component adalah, melihat posisi component di struktur UI

# Tugas

- buat halaman baru dengan file
- counter.html
- src/counter/main.jsx
- src/counter/Counter.jsx
- registrasikan ke vite.config.js
