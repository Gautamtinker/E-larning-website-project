import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from "./Card_Course";

function AllCourse(){

    const [data, setData] = useState([]);

    function callCard(ele, ind){
        console.log(ele);
        return <Card 
        key = {ind} 
        title = {ele.Title} 
        content = {ele.Content}
        button_text = "Enroll"
        />
    }

    useEffect( ()=>{
        async function getData(){
            const res = await axios.get("allCourse");
            setData(res.data);
            console.log(res);
        }

        getData();
    } ,[]);

    

    return <div>
        <h1> All Courses </h1>
        {data.map(callCard)}
        
    </div>
}

export default AllCourse; 