import { FC } from "react";
import type { Props } from '../type';

const Title: FC<Props>  = ({ value }) => {

    return (
        <h4 className='cardTitle'>
            {value}
        </h4>
    )
}

export default Title;