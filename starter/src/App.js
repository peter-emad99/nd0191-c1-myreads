import "./App.css";
import MyReads from "./Pages/MyReads";
import SearchInput from "./components/SearchInput";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div>
			{" "}
			<Routes>
				<Route path="/" element={<MyReads />} />
				<Route path="/search" element={<SearchInput />} />
			</Routes>
		</div>
	);
}

export default App;
