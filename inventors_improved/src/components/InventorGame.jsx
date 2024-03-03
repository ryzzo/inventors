import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./css/app.css"
import InventorList from './InventorList';


const InventorGame = () =>{

        // DATA USED TO TEST
        const inventors = [
            {
                id: 1,
                name: 'Thomas Edison',
                invention: 'light bulbs, electricity, film and audio devices'
            },
            {
                id: 2,
                name: 'Alexander Graham Bell',
                invention: 'Telephone',
            },
            {
                id: 3,
                name: 'George Washington Carver',
                invention: 'use of peanuts',
            },
            {
                id: 4,
                name: 'Eli Whitney',
                invention: 'Cotton gin',
            },
            {
                id: 5,
                name: 'Johannes Gutenberg',
                invention: 'Gutenberg press'
            },
            {
                id: 6,
                name: 'John Logie Baird',
                invention: 'mechanical television',
            },
            {
                id: 7,
                name: 'Benjamin Franklin',
                invention: 'Lightning rod',
            },
            {
                id: 8,
                name: 'Henry Ford',
                invention: 'Improved assembly line',
            },
            {
                id: 9,
                name: 'James Naismith',
                invention: 'basketball',
            },
            {
                id: 10,
                name: 'Herman Hollerith',
                invention: 'Punch card tabulation machine',
            }
        ]


    return(
        <Container>
            <Row>
            <Col xs={8} className='inventor-profiles'>
               INVENTOR PROFILES
            </Col>

            <Col className='inventor-list'>
                <InventorList inventors={inventors}/>
            </Col>
            </Row>
            
        </Container>
    );
};

export default InventorGame;