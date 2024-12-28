import { useImmer } from "use-immer";

export default function ContactFormImmer() {
	const [contact, setContact] = useImmer({ name: "", message: "" });

	function handleNameChange(e) {
		setContact(draft => {
			draft.name = e.target.value;
		});
	}
	// draft adalah object cloning, yang bisa kita manipulasi dan tidak mempengaruhi object asli

	function handleMessageChange(e) {
		setContact(draft => {
			draft.message = e.target.value;
		});
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
