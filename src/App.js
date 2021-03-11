import React from "react";
import "./App.css";
import CollectionsPage from './components/modalForm'
import GroceryList from "./components/groceryList";

function App() {
	return (
		<div className="App">
			<CollectionsPage />
			<GroceryList />
		</div>
	);
}

export default App;
