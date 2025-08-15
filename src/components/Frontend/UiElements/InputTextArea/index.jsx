import React from "react";
import { FormControl } from "react-bootstrap";

export function InputTextArea({...props}) {
    return (
    <>
        <FormControl as="textarea" {...props} />
    </>
    );
}