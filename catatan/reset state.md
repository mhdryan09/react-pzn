# Reset State

- sekarang kita tahu bagaimana React mempertahankan data state
- lantas bagaiamana jika misal, pada kondisi tertentu, kita memang ingin melakukan Reset State, tidak mau mempertahankan state nya
- ada beberapa cara untuk melakukan Reset State
- yang pernah kita lakukan di materi sebelumnya adalah dengan cara menghapus component dari tampilan UI
- ketika component hilang dari tampilan UI, secara otomatis state akan ikut hilang

## Mengubah dengan component lain

- selain menghapus component, kita juga bisa mengubah component dengan component lain di posisi yang sama
- ketika posisi yang sama masih ada di struktur UI, tapi component nya berbeda, secara otomatis state akan direset
- misal sebelumnya kita menampilkan component counter, lalu kita ubah menjadi element paragraph. Secara otomatis state di component counter akan ikut dihapus

Contoh :

```jsx
<div>
	{show2 ? <Counter name="A" /> : <p>Hilang</p>}
	<input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2
</div>
```

## Mengubah posisi component

- karena React akan menyimpan state sesuai dengan component dan posisinya
- artinya, jika posisi component diubah atau dipindahkan, secara otomatis state juga akan di reset

Contoh :

```jsx
{
	show2 ? (
		<div>
			<Counter name="Budi" />
		</div>
	) : (
		<section>
			<Counter name="Andi" />
		</section>
	);
}
```

## Posisi component berbeda

- selain mengubah posisi, kita juga bisa jika component sama berada di posisi yang berbeda, secara otomatis state nya juga akan berbeda
- ini mungkin akan membingungkan, karena secara DOM mungkin posisinya sama, tapi secara posisi di component berbeda

Contoh :

```jsx
{
	show2 && <Counter name="Budi" />;
}
{
	!show2 && <Counter name="Andi" />;
}
```

## Menggunakan Key

- cara yang umum biasanya digunakan untuk mereset state, yaitu menambahkan key pada component
- saat component yang sama ditampilkan di posisi yang sama, jika key nya berbeda, maka akan dianggap component yang berbeda, dengan demikian, secara otomatis state akan direset
- ini mungkin cara yang paling direkomendasikan, dibandingkan harus mengubah-ubah posisi component

Contoh :

```jsx
{
	show2 ? <Counter key="budi" name="Budi" /> : <Counter key="andi" name="Andi" />;
}
```
