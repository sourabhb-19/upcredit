import React from "react";
import Select from 'react-select';

export function SelectPicker({options = "",...props}) {   
    const customStyles = {
        menuPortal: (base) => ({
            ...base,
            zIndex: 1000, 
        }),
    };
    return (
    <>
        <Select styles={customStyles} classNames={{menuPortal: () => "formSelect" }} className="formSelect" classNamePrefix="customSelect" menuPortalTarget={document.body} options={options} {...props}/>
    </>
    );
}