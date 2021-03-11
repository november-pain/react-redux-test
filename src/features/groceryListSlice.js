import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	groceryList: [],
};

const groceryListSlice = createSlice({
	name: "groceryEntries",
	initialState,
	reducers: {
		saveEntry: (state, action) => {
			state.groceryList.push(action.payload);
		},
		deleteEntry: (state, action) => {
			const newArr = state.groceryList.filter(function (el) {
				return el.date !== action.payload;
			});
			state.groceryList = newArr;
		},
		changeStatus: (state, action) => {
            console.log(action.payload.date)

			const index = state.groceryList.findIndex(
				(e) => e.date === action.payload.date
			);
            console.log(index)
            state.groceryList[index].status = action.payload.status
            state.groceryList[index].lastChange = new Date().toString();
		},
	},
});

export const {
	saveEntry,
	deleteEntry,
	changeStatus,
} = groceryListSlice.actions;

export default groceryListSlice.reducer;
