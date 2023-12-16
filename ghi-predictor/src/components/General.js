import React, { useEffect, useState } from "react";
import axios from "axios";


export default function General(){
    const [params, setParams] = useState("")
    const [name, setName] = useState("")
    const [git, setGit] = useState("")
    const [contributors, setContributors] = useState([])

    const callParams = async() =>{
        try{
            const response = await axios.get(process.env.REACT_APP_API);
            setParams(response.data)
            setName(response.data.name)
            setGit(response.data.github)
            setContributors(response.data.contributors)
              
        } catch (e) {
            setParams("");
        }
    }

    useEffect(() => {
        callParams();
      }, []);

    return (
        <>
            <div>
                - The name of the project is: <b>{name}</b>
            </div>
            <div>
               - Github Repository: <b>{git}</b>
            </div>
            <div>
               - Contributors: <b>{contributors[0]}, {contributors[1]}, {contributors[2]}</b>
            </div>
        </>
    );

}