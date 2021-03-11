import React from "react";
import { useDispatch } from "react-redux";
import { deleteEntry, changeStatus } from "../features/groceryListSlice";
import { Button } from "antd";
import "antd/dist/antd.css";

function Entry(props) {
	const { name, status, priority, lastChanged, id } = props;
	const dispatch = useDispatch();

	const statusChangeAction = (statusValue) => {
		dispatch(
			changeStatus({
				date: id,
				status: statusValue,
			})
		);
	};

	const delEntry = () => {
		dispatch(deleteEntry(id));
	};
	return (
		<div className="entryBox">
			<p>Name: {name}</p>
			<p>Status: {status}</p>
			<p>Priority: {priority}</p>
			<p>Last changed: {lastChanged}</p>
			<Button onClick={delEntry} type="primary" danger>
				Delete
			</Button>
			<Button onClick={() => statusChangeAction("Ran out")}>
				{" "}
				Ran out{" "}
			</Button>
			<Button onClick={() => statusChangeAction("Have")}> Have </Button>
		</div>
	);
}

export default Entry;
