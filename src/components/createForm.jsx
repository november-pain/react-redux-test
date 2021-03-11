import React from "react";
import { Modal, Form, Input, Radio, InputNumber } from "antd";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
	const [form] = Form.useForm();
	return (
		<Modal
			visible={visible}
			title="Create a new entry"
			okText="Create"
			cancelText="Cancel"
			onCancel={onCancel}
			onOk={() => {
				form.validateFields()
					.then((values) => {
						form.resetFields();
						onCreate(values);
					})
					.catch((info) => {
						console.log("Validate Failed:", info);
					});
			}}
		>
			<Form
				form={form}
				layout="vertical"
				name="form_in_modal"
				initialValues={{
					status: "Have",
				}}
			>
				<Form.Item
					name="name"
					label="Name"
					rules={[
						{
							required: true,
							message: "Please input the name of entry!",
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="priority"
					label="Priority"
					rules={[
						{
							required: true,
							message: "Please input the priority of an entry!",
						},
					]}
				>
					<InputNumber min={1} max={5} />
				</Form.Item>
				<Form.Item
					name="status"
                    label="Status"
					className="collection-create-form_last-form-item"
					rules={[
						{
							required: true,
							message: "Please input the priority of an entry!",
						},
					]}
				>
					<Radio.Group>
						<Radio value="Have">Have</Radio>
						<Radio value="Ran out">Ran out</Radio>
					</Radio.Group>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default CollectionCreateForm;
