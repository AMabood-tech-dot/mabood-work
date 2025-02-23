import axios from "axios"
import React, { useEffect, useState } from "react"

function FetchData() {
    const [records, setRecords] = useState([])

useEffect(()=>{
    //fetch('https://logicracks.com/api/secondcellmart/demoapi/getbrands.php')
    //.then(response => {return response.json()})
    //.then(data => setRecords(data))
    //.catch(err => console.log(err))

axios({
    url: 'https://logicracks.com/api/secondcellmart/demoapi/getbrands.php',
    method:'get'

})
    .then(response =>{
        setRecords(response.data);
    

})

}, [])



return (
    <div>
        {records.map((list, index)=> (
            <h1>posts</h1>
            <table classroom='table'>
            <tr>
            <td>{item</td>

            </tr>
        
            <li key={index}>{list.id} | {list.name}</li>
        ))}
    </div>
)
}
export default FetchData


