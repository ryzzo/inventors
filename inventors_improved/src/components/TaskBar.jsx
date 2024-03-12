import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import "./css/app.css"

const TaskBar = () => {
    return(
        <Row className='taskbar'>
            <Col xs={8}>
            <span>
                You have gotten all correct
            </span>
            </Col>
            <Col xs={4} className='submit-button-area'>
                <Button variant='success'>SUBMIT</Button>
            </Col>
        </Row>
    )
}

export default TaskBar;