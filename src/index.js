import React, { useState, useEffect } from "react"
import {createRoot} from "react-dom/client"
import Axios from "axios"

function App() {
    const [elements, setElements] = useState([])

    useEffect(() => {
        async function go() {
            const response = await Axios.get("/api/elements")
            setElements(response.data)
        }   
        go()
    }, [])

    return (
        <div>
            <p>hey this is from react</p>
            {elements.map(function (element) {
                return <ElementCard username={element.username} age={element.age} />
            })}
        </div>
    )
}

function ElementCard(props) {
    return <p> name is {props.username} and age is {props.age} </p>
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)