import React from 'react'


import useFetch from './customHooks/useFetch'
const LoadBlogs =()=>{
    
    let data = useFetch('http://localhost:5000/blogs');
    return (
        <React.Fragment>
           {data.loading && (<h1>loading data...</h1>)}
           {!data.loading &&(<div> {JSON.stringify(data.data)}</div>)}
        </React.Fragment>
        );
}

export default LoadBlogs