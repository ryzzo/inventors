import React, {useContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Dropdown from 'react-bootstrap/Dropdown';
import InventorContext from './InventorContext';

import "./css/app.css";


const Inventor = ({inventorProp}) => {

    const [imageUrl, setImageUrl] = useState('')
    const [descriptionUrl, setDescriptionUrl] = useState('')
    const [clicked, setClicked] = useState(0)
    const [clickedName, setClickedName] = useState('')
    const [selectedInventor, setSelectedInventor] = useState('');

    const inventor_list = useContext(InventorContext);

    let i = 0;
    var inv_list = [];
    while (i < 10){
        var inv = []
        inv.push(inventor_list[i]['id']);
        inv.push(inventor_list[i]['name'])
        inv_list.push(inv)
        i++;
    }

    console.log(inv_list);
    console.log(inv_list[1][1]);

    useEffect(() => {
        let i_url = require(`../data/${inventorProp.image_url}`);
        let d_url = require(`../data/data/${inventorProp.description}`);
        setImageUrl(i_url);
        setDescriptionUrl(d_url);
        
    },[]);

    const getKey = (id, event) => {
        let id_ = id;
        console.log(id_);
        setClicked(id_);
        getName(id_);
    };

    const getName = (clicked) => {
        let i = 0;
        while (i < 10) {
            if (inv_list[i][0] == clicked) {
                setClickedName(inv_list[i][1])
            }
            i++;
        }
    };

    const clearKey = () => {
        setClickedName('');
    }

    console.log(selectedInventor)

    return (
        <>
        <div className='inventor-profile'>   
        <Row>
            <Col>
            <div className='inventor-image'>
                <img src={imageUrl} loading='lazy'/>
            </div>
            </Col>
            <Col className='inventor-column'>
                <Row>
                <div className='inventor-description'>
                    <iframe src={descriptionUrl} loading='lazy'></iframe>
                </div>
                </Row>
                <Row className='bottom-bar'>
                    <Col className='results-bar'>
                        {(clickedName != '') && <span>{clickedName}</span>}
                    </Col>
                    <Col className='choose-button'>
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id='dropdown'>
                                Choose
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {clearKey()}}>
                                    CLEAR
                                </Dropdown.Item>
                                {inv_list.map((inventor) => (
                                <Dropdown.Item onClick={() => {getKey(inventor[0])}}>
                                    {inventor[1]}
                                </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>    
                </Col>    
            </Row>      
            </div>
        </>
    );
};

export default Inventor;
