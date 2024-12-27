export default function HelloWorld() {
	return (
		<>
			<HeaderHelloWorld />
			<ParagraphHelloWorld />
		</>
	);
}

function HeaderHelloWorld() {
	const text = "Hello World";
	return (
		<h1
			style={{
				color: "red",
				backgroundColor: "aqua",
			}}
		>
			{text.toUpperCase()}
		</h1>
	);
}

function ParagraphHelloWorld() {
	const text = "This is a simple component";
	const style = {
		color: "blue",
		backgroundColor: "yellow",
	};
	return <p style={style}>{text.toLowerCase()}</p>;
}
