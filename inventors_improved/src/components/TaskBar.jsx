import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

import "./css/app.css"

const TaskBar = () => {
    return(
        <>
        <Col xs={4} className='submit-button-area'>
            <Button variant='success'>SUBMIT</Button>
        </Col>
        <Col xs={8}>
            <span>
                You have gotten all correct
            </span>
        </Col>
        </>
    )
}

export default TaskBar;