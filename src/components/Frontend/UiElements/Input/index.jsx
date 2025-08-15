import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

export function Input({ type = "", extraClass = "", position = "", iconName = "", ...props }) {
    const [isPassword, setPassword] = useState(false);    
    const togglePassword = () => {
        setPassword((prev) => !prev);
    };
    return (
    <>
        {type === "password" ? (
            <> 
                <div role="button" className={`form-icon ${position && `fieldicon-${position}`} ${isPassword ? "is-shown" : "is-hidden"}`} onClick={togglePassword}>
                    {isPassword ? (<em className="bi bi-eye-fill"/>) : (<em className="bi bi-eye-slash-fill"/>)}
                </div>
                <FormControl type={isPassword ? "text" : "password"} className={`${extraClass}`} {...props}/>
            </>
        ) : (
            <>
                {iconName && (<div className={`form-icon fieldicon-${position}`}><em className={`icon-${iconName}`}/></div>)}
                <FormControl type={type} className={`${extraClass}`} {...props}/>
            </>
        )}    
    </>
    );
}