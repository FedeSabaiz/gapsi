import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import ImageGridList from '../shared/ImageGridList';

const Products = () => {

    const [ count, setCount] = useState(0);

    const handleClick = (e) => {
       window.location.reload();
    }

    return (
        <>
            <section style={{display: 'flex', flexDirection: 'column'}} className="container-products">
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <h1>Carrito: {count}</h1>
                    <Button onClick={handleClick}>Reset</Button>
                </div>
                
                <div>
                    <ImageGridList setCount={setCount} count={count}/>
                </div>
            </section>
        </>
    );
}
 
export default Products;