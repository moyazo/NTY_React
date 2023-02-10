import React, { FC } from "react";
import { ComponentsProps } from "../type";


const Description: FC<ComponentsProps> = ({ description, nuevo, old, update }) => {
    if (description) {
        return (
            <div className="description">
                <p>{description}</p>
            </div>
        )
    } else {
        return (

            <div className="description">
                <p>{nuevo}</p>
                <p>{old}</p>
                <p>{update}</p>
            </div>
        )
    }

}


export default Description;