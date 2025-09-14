import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	{
		/* Декларативно создаём состояние, переменную*/
	}
	const [count, setCount] = useState(0);
	const currentYear = new Date().getFullYear();

	return (
		<>
			{" "}
			{/* Декларативно описываем UI */}
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				{/* Декларативно описываем поведение кнопки через событие */}
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<footer>
				{/* Декларативно выводим текущий год */}
				<p>{currentYear}</p>
			</footer>
		</>
	);
}

export default App;
