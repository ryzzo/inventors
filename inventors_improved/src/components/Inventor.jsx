import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

import "./css/app.css";


const Inventor = ({inventorProp}) => {

    return (
        <>
            <div className='inventor-profile'>
                <Table>
                    <tbody>
                    <td>
                        <div className='inventor-image'>
                            <Image src={require(`../images/${inventorProp.src}`)}/>
                        </div>
                    </td>
                    <td>
                        <div className='inventor-description'>
                            {inventorProp.invention}
                            <div>
                                <button>Choose</button>
                            </div>
                            <div>
                                Choice
                            </div>
                             
                        </div>
                    </td>
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Inventor;