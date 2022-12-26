import LocalisationForm from "../localisationForm/LocalisationForm";
import useLocation from "../../hooks/useLocation";
import Map from "../map/Map";
import RestaurantTable from "../restaurantTable/RestaurantTable";
import "./style.css";


const Layout = () => {

    const {localisation, restaurantList, setLocalisationAuto, setLocalisationManual, isLoading} = useLocation();


    return (
        <div className="layout">

            <LocalisationForm setLocalisationAuto={setLocalisationAuto} setLocalisationManual={setLocalisationManual} isLoading={isLoading}/>

            <Map localisation={localisation} restaurantList={restaurantList}/>

            <RestaurantTable restaurantList={restaurantList} />

        </div>
    )
}

export default Layout;
      