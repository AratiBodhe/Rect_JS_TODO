import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log('addtask', action);
            state.tasks.push(action.payload)
        },
        deleteTodo: (state, action) => {
            console.log('action is', action);
            const newList = state.tasks.filter((task,index) =>
            index !== action.payload
                //  console.log('id is',task,state.tasks.indexOf[task],action.payload)
            );
            console.log('newList', newList);
            state.tasks = newList
        }
    }
});
export const { addTask, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
