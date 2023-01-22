import { configureStore } from "@reduxjs/toolkit";

import taskReducers from './slices/task_slice';

export const store = configureStore({
	reducer: {
		tasks: taskReducers,
	}
});
