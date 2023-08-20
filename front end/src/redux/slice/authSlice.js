import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const user=JSON.parse(localStorage.getItem('user'));
 
const initialState={
   
    user:user?user:null,
    loading:false,
    success:false,
    error:null,
    message:""

}

const register=createAsyncThunk('auth/register',async(data,thunkApi)=>{

    try {
        const  user= await axios.post('http://localhost:7000/user/register',data)

    if(user.data)
    localStorage.setItem('user',JSON.stringify(user.data))
   
    return user.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data)
    }
    

})

export const authSlice=createSlice( {
    name:"auth",
    initialState:initialState,
    reducers:{
        reset:(state)=>{
            state.message=""
            state.loading=null
            state.error=null
            state.success=null
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(register.fulfilled,(state)=>{
            state.message="user registered successfully"
            state.success=true
        }).addCase(register.rejected,(state,action)=>{
            state.message="user failed to register"
            state.success=false
            state.error=action.payload
        }).addCase(register.pending,(state)=>{
            state.message="user pending registration"
            state.pending=true
        })
    }
    
})
export const {reset}=authSlice.actions
export default authSlice.reducer
