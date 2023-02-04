import { FC } from "react";
import type { titleProps } from '../type';

const Title: FC<titleProps>  = ({ value }) => {

    return (
        <h4 className='cardTitle'>
            {value}
        </h4>
    )
}

export default Title;