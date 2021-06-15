import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './components/userSlice';

// const reducers =combineReducers({
//   user:userReducer
// })

export default configureStore({
  reducer:{users:userReducer}
})