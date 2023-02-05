import { FC } from "react";
import { cardProps } from "./type";
import Title from "./title/title";
import Description from "./description/description";
import Button from "../button/button";
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
        data.map((element) => (
            <div className='textDetail' key={'textDetail'}>
                <Title value={element.name} key={element.name} />
                <Description value={element} key={element.new} />
                <Button className="seeMore" key={'seeMore'} />
                </div>
            ))
    )
}

export default Card;