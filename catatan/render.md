# Render

- sebelum component yang kita buat ditampilkan dilayar, component harus dirender oleh React
- oleh karena itu, kita perlu tahu bagaimana cara kerja proses React ini ketika menampilkan component yang kita buat
- terdapat 3 tahapan proses menampilkan component di React
- pertama, trigger (memicu) proses render
- kedua, melakukan proses render component
- ketiga, menempatkan hasil render component ke DOM (document object model)

## Trigger Render

- pemicu render biasanya terjadi karena 2 hal
- pertama adalah inisialisasi awal component, yang kita lakukan menggunakan method render()
- kedua adalah ketika ada pemicu perubahan state
- setiap terjadi perubahan state, secara otomatis React akan mengirimkan antrian untuk memicu proses render ulang

## Render Component

- setelah proses trigger render terjadi, React akan memanggil component yang kita buat untuk mencari tahu apa yang harus ditampilkan di layar
- rendering adalah proses React memanggil component yang kita buat
- pada proses inisialisasi awal, React akan memanggil root component (paling atas)
- pada saat proses render ulang, React hanya akan memanggil ulang component yang state nya berubah
- setelah proses render selesai, React akan melakukan proses commit

## Commit Changes

- setelah proses render selesai, React akan melakukan proses commit changes (menyimpan perubahan) ke DOM
- untuk inisialisasi awal, karena baru pertama kali, artinya element di DOM belum ada, maka React akan menggunakan `appendChild()` untuk menambahkan element ke DOM
- sedangkan untuk proses render ulang, React akan mencoba melakukan perubahan seminimal mungkin untuk menyamakan DOM saat ini dengan hasil rendering
- React hanya akan mengubah element di DOM, jika memang element tersebut berbeda dari hasil rendering
