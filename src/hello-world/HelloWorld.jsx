import "./HelloWorld.css";

export default function HelloWorld() {
	const props = {
		text: "Hello World from Spread Operator",
	};
	return (
		<>
			<HeaderHelloWorld {...props} />
			<ParagraphHelloWorld />
		</>
	);
}

function HeaderHelloWorld({ text = "Ups lupa kasih text" }) {
	return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
	const text = "This is a simple component";
	return <p className="content">{text.toLowerCase()}</p>;
}
