import { useEffect, useState } from "react"


const useFetch = (url)=>{
    const [data , setData] = useState({data:null , loading:true});
    useEffect(()=>{
        const f =async()=>{
            const request = await fetch(url,{
                headers:{
                    'content-type':'application/json'
                }
            });
            console.log(request);
            if (request.ok){
                const jsonData = await request.json();
                console.log(jsonData);
                setData({data: jsonData , loading:false});
            }
        };f();
    },[url]);
    return data;
}

export default useFetch