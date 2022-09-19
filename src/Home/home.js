import React, { useState } from 'react';

const Home = () => {
    const [name, setNme] = useState("Aram")
    function clickMe() {
        setNme("Anna")
    }
    return (
        <div>
            <h1>Hello {name}</h1>
            {/* <button onClick={()=>setNme("Vagho")}>Change Name</button> */}
            <button onClick={clickMe}>Change name</button>
        </div>
    )
}

export default Home;