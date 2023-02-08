import React, {useState} from "react";

function NewPlantForm({setPlants, plantsToDisplay}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const plant = {
      name: name, 
      image: image, 
      price: parseFloat(price),
    };

    fetch('http://localhost:6001/plants', {
     method: 'POST',
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(plant)
    }).then(() => {
      console.log('new plant added');
    })

    setPlants(...plantsToDisplay, plant);
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input 
          value={name}
          type="text" 
          name="name" 
          placeholder="name" 
          onChange = {(e) => setName(e.target.value)}
        />
        <input 
          value= {image}
          type="text" 
          name="image" 
          placeholder="image url" 
          onChange = {(e) => setImage(e.target.value)}
        />
        <input 
          value={price}
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
