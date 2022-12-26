import { useState, useCallback } from 'react';
import { Restaurant, Coordinates } from '../type';
import { API_KEY_HERE } from '../env';

function useLocation() {

    const [restaurantList, setRestaurantList] = useState<Restaurant[]>([])
    const [localisation, setLocalisation] = useState<Coordinates>({ lat: 59.334591, lng: 18.063240 })
    const [isLoading, setIsLoading] = useState<Boolean>(false)

    const handleRestaurantList = useCallback((coordinates: Coordinates) => {
        const url = `https://discover.search.hereapi.com/v1/discover?at=`+coordinates.lat+`,`+coordinates.lng+`&q=restaurants&limit=10&apiKey=`+API_KEY_HERE
        fetch(url)
        .then(res => res.json())
        .then(json => 
            setRestaurantList(json.items)
        ).catch()
    }, [])

    // For current location 
    const setLocalisationAuto = useCallback(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setIsLoading(true)
            console.log(isLoading)
            const newLocalisation = {lat: position.coords.latitude, lng: position.coords.longitude}
            setLocalisation(newLocalisation);
            handleRestaurantList(newLocalisation)
            setIsLoading(false)
          }, () => {
          })
    }, [localisation, restaurantList, handleRestaurantList, isLoading])

    // For a specified location
    const setLocalisationManual = useCallback((coordinates: Coordinates) => {
        setIsLoading(true)
        setLocalisation({...coordinates})
        handleRestaurantList(coordinates)
        setIsLoading(false)
    }, [handleRestaurantList, isLoading])


    return {localisation, restaurantList, setLocalisationAuto, setLocalisationManual, isLoading}
}

export default useLocation;