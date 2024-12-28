export default function SayHelloForm() {
	function handleClick(e) {
		e.preventDefault();
		const name = document.getElementById("input_name").value; // mengambil value dari input
		document.getElementById("text_hello").innerHTML = `Hello ${name}`; // mengganti value dari inputan
	}
	return (
		<div>
			<form>
				<input type="text" id="input_name" />
				<button onClick={handleClick}>Say Hello</button>
				<h1 id="text_hello">Hello World</h1>
			</form>
		</div>
	);
}
