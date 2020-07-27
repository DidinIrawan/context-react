import React, {useEffect, useState} from 'react';

const LatihanHook = () => {
    const [nama,setNama]=useState("");
    const [username,setUsername]=useState({
        value:"",
        error:true,
        // helperText:"Username harus berisikan email"
    })
    const handleChangeNama=(e)=>{
        setNama(e.target.value)
    }
    const handleChangeUsername=(e)=>{
        setUsername({...username,
            value: e.target.value,
            error: e.target.value ==="" ? true : false })
    }
    // biasanya buat fetching data
    // pengganti componentDidMount / componentDidUpdate
    useEffect(()=>{
        console.log(nama," update")
        console.log(username," update")
    },[]);
    const errorText=()=> <p>Username harus diisi</p>
    console.log("Username",username)
    return (
        <div>
            <input type="text" value={nama} onChange={handleChangeNama}/>
            <input type="text" value={username.value} onChange={handleChangeUsername}/>
            {username.error ? errorText() : null }
            <h2>{nama}</h2>
            <h2>{username.value}</h2>
        </div>
    );
};

export default LatihanHook;