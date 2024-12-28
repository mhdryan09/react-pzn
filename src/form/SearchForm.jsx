export default function SearchForm() {
	return (
		<form>
			<input type="text" />
			<button
				onClick={e => {
					e.preventDefault(); // untuk mencegah event submit
					alert("Searching...");
				}}
			>
				Search
			</button>
		</form>
	);
}
