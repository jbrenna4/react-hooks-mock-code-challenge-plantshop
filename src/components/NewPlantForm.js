import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();
    const newPlantObject = {
      name: name,
      image: image,
      price: parseFloat(price),
    }

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPlantObject)
      })
      .then((r) => r.json())
      .then((r) => {
        addPlant(r)
        setName("")
        setImage("")
        setPrice("")
      });

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input value = {name} type="text" name="name" placeholder="Plant name" onChange={(e) => setName(e.target.value)}/>
        <input value = {image} type="text" name="image" placeholder="Image URL" onChange={(e) => setImage(e.target.value)}/>
        <input value = {price} type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;