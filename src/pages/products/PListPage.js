import React, {useEffect, useState} from 'react';
import { useSearchParams, useNavigate  } from "react-router-dom";
import axios from "axios";


const initPageParam = {
    page:1,
    size:10
}

const initState = {
    dtoList:[],
    page:0,
    size:0,
    start:0,
    end:0,
    total:0,
    prev:false,
    next:false
}


const getServerGuestTodo = async (requestParam) => {

    console.log('getServerGuestTodo....')

    const header = { 'content-type': 'application/x-www-form-urlencoded' }

    const res = await axios.get("http://localhost:8080/guest/todo/list", {headers:header, params:requestParam})

    return res.data

}


const makeList = (start, end) => {

    const result = Array.from({length:(end-start +1)}, (key,idx) => idx+1)
    return result

}


const PListPage = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [serverData, setServerData] = useState(initState)

    console.log("--------------------")
    console.log(serverData)

    useEffect(() => {

        console.log("useEffect....")

        const pageRequest = {page: searchParams.get("page")||1, size:searchParams.get("size")||10}


        getServerGuestTodo(pageRequest)
            .then(newData =>{
                setServerData({...newData})
                navigate(`../list?page=${pageRequest.page}&size=${pageRequest.size}`, { replace: true });
            })

    },[searchParams.get("page")])

    const movePage = (num) => {

        alert(`../list?page=${num}&size=${searchParams.get("size")}`)

        navigate(`../list?page=${num}&size=${searchParams.get("size")}`, { push: true });
    }

    return (
        <div>
            <h1>Product List Page</h1>
            <h2>{serverData.total}</h2>
            <ul>
                {serverData.dtoList.map(dto => <li key={dto.tno}>{dto.title}</li>)}
            </ul>
            <div>
                <ul>
                    {serverData.prev?<li>Prev</li>:<></>}
                    {makeList(serverData.start,serverData.end).map((num, ki) => <li key={ki} onClick={(e) => movePage(num)}><b>{num}</b></li>) }
                    {serverData.next?<li>Next</li>:<></>}
                </ul>

            </div>
        </div>
    );
};

export default PListPage;