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
            <div>
                <h1>My Form</h1>
                <MyForm />
            </div>
        </div>
    )
}

function MyForm() {
  const [formData, setFormData] = useState({
    text: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = '/add-image';
    const formDataToSend = new FormData();
    formDataToSend.append('text', formData.text);

    try {
      const response = await Axios.post(endpoint, formDataToSend, { headers: {'Content-Type': 'application/json'} });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="text" value={formData.text} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}


function ElementCard(props) {
    return <p> name is {props.username} and age is {props.age} </p>
}


// Exporting individual features
var name1 = "namevalue"
export default name1

const root = createRoot(document.querySelector("#app"))
root.render(<App />)