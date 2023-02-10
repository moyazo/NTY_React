import { FC } from "react";
import { ComponentsProps } from "./type";
import Title from "./title/title";
import Description from "./description/description";
import Button from "../button/button";
import Image from "./image/image";

const Card: FC<ComponentsProps> = (
    {title, nuevo, old, update, image, description, weeks, onclick}
) => {
    return (
        <div className="cardGenre">
            <Title title={title} />
            {image && <Image image={image}/>}
            {description && <Description description={description} />}
            <Description nuevo={nuevo} old={old} update={update} />
            <Button onclick={onclick} />
        </div>
    )
}


export default Card;