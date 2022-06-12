import React, {useEffect} from 'react';
import { useSearchParams } from "react-router-dom";
import axios from "axios";


const parameterInit = {
    page:1,
    size:10
}


const getServerGuestTodo = async (requestParam) => {

    const header = { 'content-type': 'application/x-www-form-urlencoded' }

    const res = await axios.get("http://localhost:8080/guest/todo/list", {headers:header, params:requestParam})

    console.log(res.data)

    return res.data

}

const PListPage = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    console.log("searchParams")
    console.log(searchParams.get("page"))
    console.log("--------------------")

    const pageRequest = {page: searchParams.get("page")| parameterInit.page, size: searchParams.get("size")|parameterInit.size}

    console.log(pageRequest)

    useEffect(() => {

        console.log("useEffect....")
        getServerGuestTodo(pageRequest)


    },[])

    return (
        <div>
            <h1>Product List Page</h1>
        </div>
    );
};

export default PListPage;