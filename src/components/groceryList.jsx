import React from "react";
import Entry from "./entry";
import { useSelector } from "react-redux";


function GroceryList() {
	const itemList = useSelector((state) => state.groceryListReducer.groceryList);
	const renderEntry = () =>
		itemList.map((e) => (
			<Entry
				name={e.name}
				status={e.status}
				priority={e.priority}
				id={e.date}
				lastChanged={e.lastChange}
				key={e.date}
			/>
		));
	return <div className="listContainer">{renderEntry()}</div>;
}

export default GroceryList;
