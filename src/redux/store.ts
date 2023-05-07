import {configureStore} from '@reduxjs/toolkit'
import userSlice from "./slices/userSlice";
import repoSlice from "./slices/repoSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    repo: repoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
