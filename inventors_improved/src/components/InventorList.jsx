import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import "./css/app.css";


const InventorList = (props) => {

    const {inventors} = props;

    return(
        <ButtonGroup vertical className='button-group'>
            {inventors.map((inventor) => (
                <Button className='inventor-button' variant='light'>
                    {inventor.name}
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default InventorList;