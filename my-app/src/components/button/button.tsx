import { FC } from "react";
import { CustomButton } from "../styles";
import { buttonProps } from "./type";


const Button: FC<buttonProps> = ({children, onclick}) => {    
    return (
        <CustomButton onClick={onclick} className="seeMoreButton">
            {'SEE MORE'}
        </CustomButton>
    )
}


export default Button;