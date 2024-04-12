import { createSlice } from '@reduxjs/toolkit'

export type UserType = {
  userName: string,
  email: string,
  password: string
}

export type AuthStateType = {
  isAuthenticated: boolean,
  user: UserType | null,
}

const initialState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer