import './App.css';
import DogGallery from './components/dogGallery';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './components/button';

function App() {

  const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getDogs = async (count) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/${count}`);
      setDogs(response.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addDog = async () => {
    try {
      setIsAdding(true);
      const response = await axios.get(BASE_URL);
      const newDog = response.data.message;

      setDogs((prev) => [...prev, newDog]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsAdding(false)
    }
  };
  
  const refreshAll = async () => {
    try {
      setIsRefreshing(true);

      const response = await axios.get(`${BASE_URL}/${dogs.length}`);

      setDogs(response.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    getDogs(3);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }


  return (
    <div>
      <h1>Dogs loaded: {dogs.length}</h1>
      <DogGallery dogs={dogs} />
      <Button onClick={addDog} title={isAdding ? 'Adding...' : 'Add a dog'} disabled={isAdding} />
      <Button onClick={refreshAll} title={isRefreshing ? 'Refrshing...' : 'Refresh all'} disabled={isRefreshing} />
      <Button onClick={() => setDogs([])} title={'Delete all'} />
    </div>
  );
  
}

export default App;
