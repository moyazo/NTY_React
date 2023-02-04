import { FC } from "react";
import { cardProps } from "./type";
import Title from "./title/title";
import startApp from "../../services/dashboard";
import './card.css';

const dataFromApi = startApp();
let data: { name: string; old: string; new: string; update: string; }[] = [];
dataFromApi.then((value) => {
    value.forEach(element => {
        data.push(element);
    })
});

const Card: FC<cardProps>  = () => {
    
    return (
        <div className='textDetail'>
                { data.map((element) => (
                        <Title value={element.name} key={element.name} />
                    ))
                }
        </div>
    )
}

export default Card;