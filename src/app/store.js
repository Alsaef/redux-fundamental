import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice';
import userReducer from '../feature/userlist/userListSlice';
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    user:userReducer
  },
})