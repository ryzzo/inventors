import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';

import "./css/app.css"
import Inventor from './Inventor';

const InventorProfiles = ({inventorsProps}) => {

    return (
        <Stack>
            {inventorsProps.map((inventor) => (
                <Inventor inventorProp={inventor}/>
            ))}
        </Stack>
    );
};

export default InventorProfiles;