import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import {RestaurantsContext} from "../context/RestaurantsContext";

const RestaurantdetailPage = () => {
  const {id} = useParams()
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      console.log(response)
      setSelectedRestaurant(response.data.data.restaurant)
    };
  }, []);  
  
return (
    <div>
        DetailPage

    </div>
  )
}

export default RestaurantdetailPage