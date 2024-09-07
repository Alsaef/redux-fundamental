import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    user: [],
    isLoading:true,
    isError:false,
    error:''
}

export const userListin=createAsyncThunk('user/userListin',async()=>{
    const response= await axios.get('https://jsonplaceholder.typicode.com/todos/')
    return response.data
})

export const userListSlice=createSlice({
    name: 'user',
    initialState,
    reducers:{
       
    },
    extraReducers:(builder)=>{
     builder.addCase(userListin.pending,(state)=>{
        state.isLoading = true;
        state.isError=false;
     })
     builder.addCase(userListin.fulfilled,(state,{payload})=>{
        state.isLoading = false;
        state.user=payload;
        state.isError=false;
     })
     builder.addCase(userListin.rejected,(state,{payload})=>{
        state.isLoading = false;
        state.isError=true;
        
     })
    }
})

export default userListSlice.reducer