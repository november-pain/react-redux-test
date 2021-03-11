import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveEntry } from "../features/groceryListSlice";
import { Button } from "antd";
import CollectionCreateForm from "./createForm";

const CollectionsPage = () => {
	const [visible, setVisible] = useState(false);
	const dispatch = useDispatch();
	const onCreate = (values) => {
		dispatch(
			saveEntry({
				name: values.name,
				priority: values.priority,
				status: values.status,
				date: Date.now(),
				lastChange: new Date().toString(),
			})
		);
		setVisible(false);
	};

	return (
		<div>
			<Button
				type="primary"
				onClick={() => {
					setVisible(true);
				}}
			>
				New Entry
			</Button>
			<CollectionCreateForm
				visible={visible}
				onCreate={onCreate}
				onCancel={() => {
					setVisible(false);
				}}
			/>
		</div>
	);
};

export default CollectionsPage;
