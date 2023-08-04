import React, { useLayoutEffect, useState } from 'react'
import BellIcon from '../BellIcon'
import { BellIconProps } from "../BellIcon"
import Card, { CardType } from '../Card'
import "./style.scss"

type dataType = {
    image: string
    title: string
    description: string
    time: string
}

type AppTypes = {
    cardPosition?: "left" | "right" | "top" | "bottom"
    transformOrigin?: {
        x?: "top" | "bottom" | "center" | "left" | "right"
        y?: "top" | "bottom" | "center" | "left" | "right"
    }
    hideCount?: boolean
    notificationCountVariant?: "Circle" | "Point"
    customIcon?: React.ReactNode,
    customCard?: React.ReactNode,
    dropBoxStyle?: React.CSSProperties
    dropBoxShadow?: "light-border" | "light-border-3d" | "no-drop" | "bottom-drop" | "very-light-border" | "outline"
    data: dataType[] | any[];
    bellIconProps?: BellIconProps
    cardProps?: Omit<CardType, "cardProps">,
    maxCardShown?: number
    showShowMoreBtn?: boolean
    dropAnimation?: "ScaleDown" | "RotateX" | "RotateY" | "ScaleIn" | "TranslateY" | "TranslateZ" | "Scale" | "SlideDown"
    customButton?: React.ReactNode
    buttonProps?: {
        label?: string
        backgroundColor?: string,
        fontColor?: string
        brightness?: number
        onClick?: () => void
    }
    theme?: "Dark" | "Light"
}

export const Notify = (props: AppTypes) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [rootVariables, setRootVariables] = useState<{ [key: string]: string }>({})
    const { cardPosition = "top", transformOrigin, theme = "Light", hideCount = false, notificationCountVariant, data, customIcon, customCard, customButton, buttonProps, dropBoxStyle, dropBoxShadow, bellIconProps, cardProps, maxCardShown = 3, showShowMoreBtn = true, dropAnimation = "Scale" } = props
    const limitCard = maxCardShown && maxCardShown > data.length ? data.length : maxCardShown
    const TranformOrigin = transformOrigin ? `${transformOrigin.x} ${transformOrigin.y}` : 'top top'
    const buttonStyle = {
        backgroundColor: buttonProps?.backgroundColor ? buttonProps?.backgroundColor : '',
        color: buttonProps?.fontColor ? buttonProps?.fontColor : ''
    }
    useLayoutEffect(() => {
        setRootVariables({
            '--cardFontSize': cardProps?.cardStyle?.fontSize ? `${cardProps?.cardStyle?.fontSize}px` : '14px',
            '--cardBorderColor': cardProps?.cardStyle?.borderBottomColor ? cardProps?.cardStyle?.borderBottomColor : theme === "Light" ? "#DDE6ED" : "#526D82",
            '--cardPrimaryColor': cardProps?.cardStyle?.primaryColor ? cardProps?.cardStyle?.primaryColor : theme === "Light" ? "#1B2430" : "#fcfcfc",
            '--cardSecondaryColor': cardProps?.cardStyle?.primaryColor ? cardProps?.cardStyle?.primaryColor : theme === "Light" ? "#9e9e9e" : "#DDE6ED",
            '--cardColor': cardProps?.cardStyle?.cardColor ? cardProps?.cardStyle?.cardColor : theme === "Light" ? "#fcfcfc" : "#27374D",
            '--filterBrightness': buttonProps?.brightness ? String(buttonProps?.brightness) : theme === "Light" ? '0.98' : '1.2'
        })
    }, [theme, buttonProps, cardProps])

    return (
        <div className="notify-box" style={rootVariables}>
            <div className="bell-container">
                <button className="icon_box" onClick={() => setShowDropdown(prev => !prev)}>
                    {!hideCount && <span className={`notification_counter ${notificationCountVariant ? `counter-${notificationCountVariant}` : ''}`}><b>{data.length}</b></span>}
                    {customIcon ? customIcon : <BellIcon {...bellIconProps} />}
                </button>
            </div>
            {showDropdown && <div className={`cardbox ${dropBoxShadow ? dropBoxShadow : ''} ${showDropdown ? `cardbox-${dropAnimation}` : ""} ${cardPosition ? `cardbox-${cardPosition.split(" ")[0]}` : ""}`} style={{ transformOrigin: TranformOrigin, ...dropBoxStyle }}>
                {
                    data?.slice(0, limitCard).map((item, i) => {
                        if (customCard) {
                            return <div className="custom_card" key={i}>
                                {React.cloneElement(customCard as React.ReactElement<any>, { ...item, onClick: cardProps?.onCardClicked.bind(null, item) })}
                            </div>
                        } else {
                            return <div className="predefined_card" key={i}>
                                <Card variant={cardProps?.variant} onCardClicked={() => cardProps?.onCardClicked(item)} cardProps={{ image: item.image, description: item.description, title: item.title, time: item.time }} />
                            </div>
                        }
                    })
                }
                {
                    showShowMoreBtn && customButton ? React.cloneElement(customButton as React.ReactElement<any>, { ...buttonProps }) : <button style={{ ...buttonStyle }} className='view_all_btn' onClick={buttonProps?.onClick}>{buttonProps?.label ? buttonProps?.label : "View All"}</button>
                }
            </div>}
        </div>
    )
}

