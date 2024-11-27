import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const api = 'https://jsonplaceholder.typicode.com/users';
import axios from 'axios';
const initialState = {
    username: '',
    email: '',
    users: [],
    status: '',
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeValueUserName: (state, action) => {
            state.username = action.payload;

        },
        changeValueEmail: (state, action) => {
            state.email = action.payload;

        },
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
    },
    extraReducers: (builder) => builder.addCase(getUsers.fulfilled, (state, action) => {

        state.users = action.payload;
        console.log("done");
        state.status = 'done';
    }).addCase(getUsers.pending, (state) => {
        console.log("loading")
        state.status = 'loading';
    }).addCase(getUsers.rejected, (state, action) => {
        console.log("rejected")
        state.status = 'rejected';
        state.error = action.payload;
    })
});

export const getUsers = createAsyncThunk('user/getUsers', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(api);
        return res.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue(e.response.data);
    }
})

// Action creators are generated for each case reducer function
export const { addUser, changeValueEmail, changeValueUserName } = userSlice.actions

export default userSlice.reducer