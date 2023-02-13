import { FC } from "react";
import { CustomButton } from "../styles";
import { buttonProps } from "./type";


const Button: FC<buttonProps> = ({children, onclick ,value}) => {    
    return (
        <CustomButton onClick={onclick} className="seeMoreButton">
            {!value && 'SEE MORE'}
            {value && value}
        </CustomButton>
    )
}


export default Button;