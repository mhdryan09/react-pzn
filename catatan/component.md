# Component

## Posisi Component

- seperti dijelaskan sebelumnya, React menyimpan state sesuai dengan posisi Component
- ketika posisi component berubah, misal hilang dari tampilan layaar
- secara otomatis state akan dihapus dari React
- misal, kita akan membuat component counter bisa dihilangkan
- ketika nanti component tersebut dihilangkan dari tampilan, maka secara otomatis state nya juga akan hilang

contoh ada di file `src/counter/CounterApp.jsx`

## Component sama di posisi sama

- jika terdapat kasus kita menampilkan component yang sama
- tapi secara struktur UI dia berada di posisi yang sama
- maka state akan dipertahankan oleh React, yang artinya tidak akan dihapus
- hal ini mungkin akan membingungkan, tapi kita harus mengerti hal ini, karena React akan menyimpan informasi state mengikuti posisi component, jika component nya sama, dan posisi nya sama, maka state akan dipertahankan

contoh

```jsx
<div>
	{show2 ? <Counter name="A" /> : <Counter name="B" />}
	<input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2
</div>
```

## kenapa state masih sama?

- hal ini terjadi karena secara struktur UI, posisi component ada di posisi yang sama persis
- jika posisi component dan jenis componentnya sama, maka secara otomatis state akan dipertahankan oleh React
- kecuali posisinya berubah atau component nya berbeda, maka React akan menghapus state nya
