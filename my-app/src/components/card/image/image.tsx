import React, { FC } from "react";
import { ComponentsProps } from "../type";


const Image: FC<ComponentsProps> = ({image}) => {
    return (
        <img src={image} alt="" />
    )
}


export default Image;