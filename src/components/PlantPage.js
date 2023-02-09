import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {

    fetch("http://localhost:6001/plants")

      .then((r) => r.json())

      .then(setPlants);

  }, []);

  function addPlant(newPlantObject) {
     setPlants([...plants, newPlantObject]); 
  }


  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant = {addPlant}/>
      <Search searchTerm = {searchTerm} onChange = {setSearchTerm}/>
      <PlantList plants = {filteredPlants} />
    </main>
  );
}

export default PlantPage;