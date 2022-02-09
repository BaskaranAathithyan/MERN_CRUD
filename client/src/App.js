import React, {useState, useEffect} from "react";
import Axios from 'axios';
import './App.css';

function App() {
  const [foodName,setFoodName] = useState("");
  const [days,setDays] =useState(0);
  const [newFoodName,setNewfoodName] =useState("");
  const [foodList,setFoodList] = useState([])

  useEffect(() =>{
    Axios.get("http://localhost:3001/read").then((response) =>{
      setFoodList(response.data)
    });
  }, []);

  const addToList =() => {
      Axios.post("http://localhost:3001/insert", {
      foodName:foodName,
      days:days,
    });
  };

  const updateFood = () => {
    Axios.post("http://localhost:3001/update", {})

    }
  

  return (
    <div className="App">
      <h1>CRUD App With MERN</h1>
      <label>Food Name : </label>
      <input 
        type="text" 
        onChange={(event) => {
          setFoodName(event.target.value);
        }} 
      />
      
      <label>Days Since You Ate It :</label>
      <input type="number"
        onChange={(event) => { 
          setDays(event.target.value);
        }} 
      />
      <button onClick={addToList}>Add To List</button>

        <h1>Food List</h1>

        {foodList.map((val,key) =>{
          return <div className="card1"> <h1>{val.foodName}</h1> <h1>{val.daysSinceIAte}</h1>
          <input type="text" placeholder="New Food Name..."
            onChange={(event) => {
              setNewfoodName(event.target.value);
            }} 
          />
          <button onClick={() => updateFood(value._id)}>Update</button>
          <button>Delete</button>
          </div>
        })}
    </div>
  );
}
 
export default App;
