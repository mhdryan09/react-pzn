import { useState } from "react";

export default function TaskForm({ onSubmit }) {
	const [item, setItem] = useState("");

	function handleChange(e) {
		setItem(e.target.value);
	}

	function handleClick(e) {
		e.preventDefault(); // mencegah event submit
		onSubmit(item); // tambahkan item ke array menggunakan callback onSubmit
		setItem(""); // mengosongkan input
	}
	return (
		<div>
			<h1>Create Task</h1>
			<form action="">
				<input type="text" value={item} onChange={handleChange} />
				<button onClick={handleClick}>Add</button>
			</form>
		</div>
	);
}
