import React from "react"
import "./style.scss"

type CardProps = {
    id?: number
    title?: string,
    description?: string,
    image?: string,
    time?: string,
    onClick?: (data?: any) => void,
    width?: number,
    height?: number,
}

type CardStyle = {
    primaryColor?: string
    secondaryColor?: string
    fontSize?: number
    cardColor?: string
    borderBottomColor?: string
}

export type CardType = {
    variant?: "Primary" | "Secondary" | "PrimaryVariant" | "SecondaryVariant",
    cardProps?: Omit<CardProps, "onClick">,
    onCardClicked?: (data?: any) => void,
    cardStyle?: CardStyle
}


const Card = ({ variant, onCardClicked, cardProps }: CardType) => {
    switch (variant) {
        case "Secondary":
            return <Secondary {...cardProps} onClick={onCardClicked} />
        case "SecondaryVariant":
            return <SecondaryTwo {...cardProps} onClick={onCardClicked} />
        case "PrimaryVariant":
            return <PrimaryTwo {...cardProps} onClick={onCardClicked} />
        default:
            return <Primary {...cardProps} onClick={onCardClicked} />
    }
}

const Secondary = (props: CardProps) => {
    return <div className="card card_one" onClick={props.onClick}>
        <div className="img">
            <img src={props.image} alt="" />
        </div>
        <div className="card_meta">
            <h6>{props.title}</h6>
            <p>{props.description}</p>
        </div>
        {
            props.time && <div className="time">
                <span>{props.time}</span>
            </div>
        }
    </div>
}
const SecondaryTwo = (props: CardProps) => {
    return <div className="card card_two" onClick={props.onClick}>
        <div className="img">
            <img src={props.image} alt="" />
        </div>
        <div className="card_meta">
            <h6>{props.title}</h6>
            {
                props.time && <div className="time">
                    <span>{props.time}</span>
                </div>
            }
            <p>{props.description}</p>
        </div>
    </div>
}
const PrimaryTwo = (props: CardProps) => {
    return <div className="card card_three" onClick={props.onClick}>
        <div className="img">
            <img src={props.image} alt="" />
        </div>
        <div className="card_meta">

            <h6>{props.title}</h6>
            {
                props.time && <div className="time">
                    <span>{props.time}</span>
                </div>
            }
            <p>{props.description}</p>
        </div>

    </div>
}
const Primary = (props: CardProps) => {
    return <div className="card card_four" onClick={props.onClick}>
        <div className="img">
            <img src={props.image} alt="" />
        </div>
        <div className="card_meta">
            <h6>{props.title}</h6>
            <p>{props.description}</p>
        </div>
        {
            props.time && <div className="time">
                <span>{props.time}</span>
            </div>
        }
    </div>
}


export default React.memo(Card);
