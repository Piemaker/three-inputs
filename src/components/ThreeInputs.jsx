import React, {useState, useEffect} from 'react'

export default function ThreeInputs({input}) {
    const [output, setOutput] = useState();
    useEffect(() => {
        if (!input) { 
        let myInterval =  setInterval(() =>{
            const t = new Date();
            const date = ("0" + t.getDate()).slice(-2);
            const month = ("0" + (t.getMonth() + 1)).slice(-2);
            const year = t.getFullYear();
            const hours = ("0" + t.getHours()).slice(-2);
            const minutes = ("0" + t.getMinutes()).slice(-2);
            const seconds = ("0" + t.getSeconds()).slice(-2);
            const time = `${date}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
            setOutput(time)
          },1000)
          return ()=>{
              clearInterval(myInterval)
          }
        }
        else if(Array.isArray(input)){
            setOutput(input.map(x => <div key = {x}>{x}</div>)) 
        }
        else{
            setOutput(input)
        }
      
    },[input])

    
    return (
        <div>
        {output}  
        </div>
    )
}
