import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


import "./css/app.css"
import InventorList from './InventorList';
import InventorProfiles from './InventorProfiles';
import TaskBar from './TaskBar';

import data from '../data/data/inventors.json';

const InventorGame = () =>{

    const [indexes, setIndexes] = useState([])

    useEffect(() => {
        const investors_indexes = indexGenerator();
        setIndexes(investors_indexes);

    }, [])

    // generate random indexes from 1 to 38
    function indexGenerator() {
        var indexes = [];
        let i = 0;
        
        while (i < 10) {
            var randIndex = Math.floor((Math.random() * 38) + 1);
            if (!indexes.includes(randIndex)) {
                indexes.push(randIndex);
                i++;
            }
        }

        return indexes;
    }

    // retrieve investors with the random indexes
    const chosen_inventors = (idxs) => {
        var inventors = idxs.map(index => {
            return investors_data[index];
        })

        return inventors;
    };

    const investors_data = data.inventors;

    const inventors = chosen_inventors(indexes)
    
    return(
        <Container>
            <Row>
            <Col xs={8} >
                <Row className='inventor-profiles'>
                    <InventorProfiles inventorsProps={inventors} />
                </Row>
                <Row>
                    <TaskBar/>
                </Row>
            </Col>

            <Col className='inventor-list'>
                <InventorList inventorsProps={inventors}/>
            </Col>
            </Row>
        </Container>
    );
};

export default InventorGame;