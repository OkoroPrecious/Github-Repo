import {IUser} from "../../types/user.type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IUserSlice {
  user?: IUser;
}

const initialState: IUserSlice = {
  user: undefined,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    }
  }
});

export const userActions = userSlice.actions;

export default userSlice;
