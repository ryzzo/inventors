import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

import "./css/app.css"

const InventorName = ({inventorProp}) => {
    
    return (
        <Button
        
        draggable
         variant='light' className='inventor-button'>
            {inventorProp.name}
        </Button>
    );
};

export default InventorName;