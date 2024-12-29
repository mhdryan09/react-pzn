# Sharing State

- kadang, kita ingin membuat state untuk beberapa component yang selalu berubah bersama-sama, atau sederhananya adalah Sharing (berbagi) state
- untuk melakukan ini, kita harus mengubah lokasi state dari component - component itu, ke parent component mereka, lalu kita kirim state nya melalui props
- misal, pada form task sebelumnya, kita akan buat 2 child component, component untuk taskForm nya dan component untuk taskList nya
- kita akan share state nya dari Task ke TaskForm dan TaskList melalui `props`
