import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import RepositoryPage from "../pages/RepositoryPage";

type Props = {};
const RootNavigation = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path=":username" element={<RepositoryPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;