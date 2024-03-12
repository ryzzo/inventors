import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';
import { createContext } from 'react';

import "./css/app.css"
import Inventor from './Inventor';
import InventorContext from './InventorContext';


const InventorProfiles = ({inventorsProps}) => {

    const data = inventorsProps;

    return (
        <InventorContext.Provider value={data}>
            <Stack>
                {inventorsProps.map((inventor, index) => (
                    <Inventor inventorProp={inventor}/>
            ))}
            </Stack>
        </InventorContext.Provider>
        
    );
};

export default InventorProfiles;