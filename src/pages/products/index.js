import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import PListPage from "./PListPage";
import PDetail from "./PDetail";

const ProductLanding = () => {

    console.log("productlanding...")

    return (
        <Routes>
            <Route path={"list"} element = {<PListPage></PListPage>}></Route>
            <Route path={"view/:pno"} element = {<PDetail/>}></Route>
        </Routes>
    );
};

export default ProductLanding;