import Todo from "./Todo";

export default function TodoList() {
	const data = [
		{
			id: 1,
			text: "Learn HTML",
			isCompleted: true,
		},
		{
			id: 2,
			text: "Learn CSS",
			isCompleted: true,
		},
		{
			id: 3,
			text: "Learn Javascript",
			isCompleted: true,
		},
		{
			id: 4,
			text: "Learn React",
			isCompleted: false,
		},
	];

	return (
		<ul>
			{data.map(todo => (
				<Todo {...todo} key={todo.id} />
			))}
		</ul>
	);
}
