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
