import {createAsyncThunk, createEntityAdapter, createSlice, EntityState} from "@reduxjs/toolkit";
import {IUser, TUser} from "../../interface";
import {userLogin, userLogout, userRegister, verifyAccount} from "../../services/service.ts";

interface IAuthState {
    isLoggedIn: boolean;
    userInfo:{
        userId:string,
        firstName :string,
        lastName :string,
        email :string,
        isAdmin :boolean,
    }

    /* status: "Loading" | "Completed" |"Failed"
     error:string | null*/
}

const authAdapter = createEntityAdapter({
    selectId: (user: IUser) => user._id
})

const initialState: IAuthState & EntityState<IUser, string> = authAdapter.getInitialState({
    isLoggedIn: false,
    userInfo:{
        userId:"",
        firstName :"",
        lastName :"",
        email :"",
        isAdmin :false,
    }

})

export const authApiRegister = createAsyncThunk("/auth/userApiRegister",
    async (user: TUser) => {
        const response = await userRegister(user)
        return response.data
    })

export const authApiLogin = createAsyncThunk("/auth/authApiLogin",
    async (user: TUser) => {
       try{
           const response = await userLogin(user)
           return response.data
       }catch (error:any) {
           throw  error.response.data.message
       }
    })

    export const authApiVerification = createAsyncThunk("/auth/authApiVerification",
    async (token:string) => {
       try{
           const response = await verifyAccount(token)
           return response.data
       }catch (error:any) {
           throw  error.response.data.message
       }
    })

   export  const authApiLogout = createAsyncThunk("/auth/authApiLogout",async()=>{
    try {
        const response = await userLogout()
        return response.data
    } catch (error:any) {
        throw  error.response.data.message

    }
   })


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLogIn:(state,action)=>{
            state.isLoggedIn=action.payload
        },
        setUserInfo:(state,action)=>{
            state.userInfo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authApiRegister.fulfilled, authAdapter.addOne)
            .addCase(authApiLogin.fulfilled,authAdapter.addOne)
            .addCase(authApiLogout.fulfilled,authAdapter.addOne)
            .addCase(authApiVerification.fulfilled,authAdapter.setAll)
    },
})

export const  {setIsLogIn,setUserInfo}= authSlice.actions
export default authSlice.reducer