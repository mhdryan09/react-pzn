import { useState } from "react";

const initialData = {
	name: "",
	message: "",
};

export default function ContactForm() {
	const [contact, setContact] = useState(initialData);

	function handleNameChange(e) {
		setContact({ ...contact, name: e.target.value }); // menggunakan spread syntax untuk membantu mengcopy attribute di object dan mengubah value name
	}

	function handleMessageChange(e) {
		setContact({ ...contact, message: e.target.value });
	}

	return (
		<div>
			<h1>Contact Form</h1>
			<form>
				<input placeholder="Name" value={contact.name} onChange={handleNameChange} type="text" />
				<br />
				<textarea placeholder="Message" value={contact.message} onChange={handleMessageChange} />
			</form>
			<h1>Contact Detail</h1>
			<p>Name: {contact.name}</p>
			<p>Message : {contact.message}</p>
		</div>
	);
}
