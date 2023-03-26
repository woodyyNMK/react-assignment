import React, {useState} from "react";
export default function TypeMe(){
    const [isBlur,setIsBlur]= useState(false);
    function Focus(){
        setIsBlur(true);
    }
    return(
        <div>
            <input type="text" onBlur={Focus} />
            {isBlur && <p style={{color:"red"}}>Please type in here!</p>}
        </div>
    );
}