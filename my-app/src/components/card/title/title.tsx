import React, { FC } from "react";
import { ComponentsProps } from "../type";


const Title: FC<ComponentsProps> = ({title}) => {
    return (
        <h4 className="seeMoreButton">
            {title}
        </h4>
    )
}


export default Title;