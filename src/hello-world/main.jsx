import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Container>
			<HelloWorld />
			<TodoList />
			<Table />

			<AlertButton text="Click Me" message={"Hello World"} />
			<MyButton text="Hit Me" onSmash={() => alert("Smashed")} />

			<Toolbar
				onClick={e => {
					e.stopPropagation(); // untuk mencegah event bubbling
					alert("Toolbar clicked");
				}}
			/>

			<SearchForm />
			<SayHelloForm />
		</Container>
	</StrictMode>,
);
