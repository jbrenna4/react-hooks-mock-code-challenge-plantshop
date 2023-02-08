import React, {useState} from "react";

function NewPlantForm() {

  const [name, setName] = useState("Plant name")
  const [url, setUrl] = useState("Image url")
  const [price, setPrice] = useState("Price")

  const handleSubmit = (e) => {
    e.preventDefault();
    const plant = {name, url, price};

    fetch('http://localhost:6001/plants', {
     method: 'POST',
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(plant)
    }).then(() => {
      console.log('new plant added');
    })
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="name" 
          onChange = {(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="image url" 
          onChange = {(e) => setUrl(e.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="price" 
          onChange = {(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
