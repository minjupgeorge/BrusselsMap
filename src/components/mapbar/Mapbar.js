 import './Mapbar.css'
import { MapContainer, TileLayer, Marker,Popup,useMap } from 'react-leaflet'
import { Locations } from '../locations/Location';
import Locationdetail from '../locations/Locationdetail';
import displayData from '../data/brussels-sites.json';

const  Mapbar=({searchResults,SelectData}) =>{
  

return(

<MapContainer center={[50.8974182009,4.36784533543]} zoom={10} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {
    
  searchResults.map(dis =>(
    
  <Marker
    key= {dis.id}
    position={[dis.geo_point_2d.lat, dis.geo_point_2d.lon]}>
      <Popup>
      <h1>{dis.distrfr}</h1>  
      <h4>{dis.namefr}</h4>
      </Popup>
    </Marker>
    
    ))
  }
</MapContainer>
);
}
export default Mapbar;