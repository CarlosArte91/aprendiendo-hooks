import { createSlice } from "@reduxjs/toolkit";

let initialState = {
	text: 'estado de redux',
};

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		changeTask: (state, action) => {
			state.text = action.payload;
		}
	}
});

export const { changeTask } = taskSlice.actions;
export default taskSlice.reducer;
