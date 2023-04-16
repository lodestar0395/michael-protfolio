import React from "react";
import { Image } from "react-bootstrap";

import Carouselphoto from "../components/Carouselphoto";

import image1 from '../assets/img/photos/1 Miguel Small.jpg';
import image2 from '../assets/img/photos/2 Charles Small.jpg';
import image3 from '../assets/img/photos/3 Barbershop Small.jpg';
import image4 from '../assets/img/photos/4 TaHa Small.jpg';
import image5 from '../assets/img/photos/5 Chris Small.jpg';
import image6 from '../assets/img/photos/6 Meat Market Small.jpg';
import image7 from '../assets/img/photos/7 CDMX Kitchen Small.jpg';
import image8 from '../assets/img/photos/8 Chinatown Burning Small.jpg';
import image9 from '../assets/img/photos/9 Abraham Small.jpg';
import image10 from '../assets/img/photos/10 Abraham sons Small.jpg';
import image11 from '../assets/img/photos/11 Abraham Family Small.jpg';
import image12 from '../assets/img/photos/12 CDMX Dinner Small.jpg';
import image13 from '../assets/img/photos/13 Brighton Man Small.jpg';
import image14 from '../assets/img/photos/14 Breaktime Small.jpg';
import image15 from '../assets/img/photos/15 Prospect Watering Small.jpg';
import image16 from '../assets/img/photos/16 See Sign Below.jpg';


const images = {
  photos: [
    { path: image1 },
    { path: image2 },
    { path: image3 },
    { path: image4 },
    { path: image5 },
    { path: image6 },
    { path: image7 },
    { path: image8 },
    { path: image9 },
    { path: image10 },
    { path: image11 },
    { path: image12 },
    { path: image13 },
    { path: image14 },
    { path: image15 },
    { path: image16 },
  ]
}
function Photopage() {
  return (
    <div className="">
      <div className="">
        <marquee direction="left" className="d-none d-md-block "  scrollamount={20} >
          <div className="d-flex" >
            {
              images.photos.map((item) => (
                <Image  style={{height: 600}} className="p-2" key={item.path} src={item.path} alt="" />
              ))
            }
          </div>
        </marquee>
      </div>

      <div className="d-grid d-md-none ">
        {
          images.photos.map((item) => (
            <Image className="w-100 p-2" key={item.path} src={item.path} alt="" />
          ))
        }
      </div>
    </div>
  );
}

export default Photopage;