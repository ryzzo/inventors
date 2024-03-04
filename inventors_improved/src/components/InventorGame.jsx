import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

import "./css/app.css"
import InventorList from './InventorList';
import InventorProfiles from './InventorProfiles';
import TaskBar from './TaskBar';


const InventorGame = () =>{

        // DATA USED TO TEST
        const inventors = [
            {
                id: 1,
                name: 'Thomas Edison',
                invention: 'light bulbs, electricity, film and audio devices',
                src: 'Elon.jpeg',
            },
            {
                id: 2,
                name: 'Alexander Graham Bell',
                invention: 'Telephone',
                src: 'Jeff.jpeg',
            },
            {
                id: 3,
                name: 'George Washington Carver',
                invention: 'use of peanuts',
                src: 'Elon.jpeg',
            },
            {
                id: 4,
                name: 'Eli Whitney',
                invention: 'Cotton gin',
                src: 'Elon.jpeg',
            },
            {
                id: 5,
                name: 'Johannes Gutenberg',
                invention: 'Gutenberg press',
                src: 'Elon.jpeg',
            },
            {
                id: 6,
                name: 'John Logie Baird',
                invention: 'mechanical television',
                src: 'Elon.jpeg',
            },
            {
                id: 7,
                name: 'Benjamin Franklin',
                invention: 'Lightning rod',
                src: 'Elon.jpeg',
            },
            {
                id: 8,
                name: 'Henry Ford',
                invention: 'Improved assembly line',
                src: 'Elon.jpeg',
            },
            {
                id: 9,
                name: 'James Naismith',
                invention: 'basketball',
                src: 'Elon.jpeg',
            },
            {
                id: 10,
                name: 'Herman Hollerith',
                invention: 'Punch card tabulation machine',
                src: 'Elon.jpeg',
            }
        ]


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