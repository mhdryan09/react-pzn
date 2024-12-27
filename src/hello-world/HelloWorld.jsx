export default function HelloWorld() {
	return (
		<>
			<HeaderHelloWorld />
			<ParagraphHelloWorld />
		</>
	);
}

function HeaderHelloWorld() {
	return <h1>Hello World</h1>;
}

function ParagraphHelloWorld() {
	return <p>This is a simple component</p>;
}
