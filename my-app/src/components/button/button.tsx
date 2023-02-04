import React, { FC } from "react";
import type { Props } from './type';
import './description.css';

const Button: FC<Props>  = ({children,className}) => {
    return (
        <button className='seeMore'>
            SEE MORE
        </button>
    )
}

export default Button;