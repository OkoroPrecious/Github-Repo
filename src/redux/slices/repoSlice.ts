import {IRepository} from "../../types/repository.type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IRepoSLice {
  repos: IRepository[];
}

const initialState: IRepoSLice = {
  repos: [],
}

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setRepos: (state, action: PayloadAction<IRepository[]>) => {
      state.repos = action.payload;
    }
  }
});

export const repoActions = repoSlice.actions;
export default repoSlice;
