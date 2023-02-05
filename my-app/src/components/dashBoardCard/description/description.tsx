import React, { FC } from "react";
// import type { Props } from '../type';
// import './description.css';

const Description: FC<any>  = ({ value }) => {
    return (
        <div className='dateDescription'>
            <p>{value.new}</p>
            <p>{value.old}</p>
            <p>{value.update}</p>
        </div>
    )
}

export default Description;