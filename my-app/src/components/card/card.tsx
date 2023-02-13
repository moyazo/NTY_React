import { FC } from "react";
import { ComponentsProps } from "./type";
import Title from "./title/title";
import Description from "./description/description";
import Button from "../button/button";
import Image from "./image/image";
import { CustomCardGenre } from "../styles";

const Card: FC<ComponentsProps> = (
    { title, nuevo, old, update, image, description, weeks, onclick }
) => {
    return (
        <>
            <CustomCardGenre $isGenre={description? true : false} className={description && 'cardDetail' || 'cardGenre'}>
                <Title title={title} />
                {image && <Image image={image} />}
                {description && <Description description={description} />}
                {nuevo && <Description nuevo={nuevo} old={old} update={update} />}
                {!description && <Button onclick={onclick} />}
            </CustomCardGenre>
        </>
    )
}


export default Card;