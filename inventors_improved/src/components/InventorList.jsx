import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import "./css/app.css";
import InventorName from './InventorName';


const InventorList = (props) => {
    

    const {inventorsProps} = props;

    return(
        <ButtonGroup vertical className='button-group'>
            {inventorsProps.map((inventor) => (
                <InventorName key={inventor.id} inventorProp={inventor}/>
            ))}
        </ButtonGroup>
    );
};

export default InventorList;