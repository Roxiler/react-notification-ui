import { useEffect, useState } from "react"
import { Notify } from "./Components"
import React from "react"

const data = [
    {
        image: "https://reqres.in/img/faces/7-image.jpg",
        title: "Aryan Ty",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque!",
        time: "2 days",
    },
    {
        image: "https://reqres.in/img/faces/8-image.jpg",
        title: "Aryan Tirkey",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque!",
        time: "1 days",
    }
]

const App = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2").then(res => res.json()).then(data => setData(data.data)).catch(err => console.log(err))
    }, [])
    return (<>
        <div className="sidebar">
            <Notify theme="Dark" data={data} />
        </div>
    </>
    )
}

const CustomCard = (e) => {
    console.log(e)
    return <div onClick={e.onClick}>Hello</div>
}

const CustomIcon = () => {
    return <span>Icon</span>
}

export default App
