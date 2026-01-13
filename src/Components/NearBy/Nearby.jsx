import { useState } from "react";
import "./Nearby.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Nearby = () => {
  const [viewAll , setViewAll] = useState()
    const nearbyGrounds = [
  {
    id: 1,
    title: "Stadium in lights and flashes, fests",
    location: "Shot smiley girl jumping rope",
    distance: "8 KM",
    image:   "/gr (1).png",
  },
  {
    id: 2,
    title: "Stadium with a lot of seats sky",
    location: "Agasean Institute",
    distance: "9 KM",
    image:  "/gr (1).png",
  },
  {
    id: 3,
    title: "Cricket world cup trophy generative",
    location: "Viet nam",
    distance: "10 KM",
    image:  "/gr (1).png",
  },
  {
    id: 4,
    title: "Stadium in lights and flashes, fests",
    location: "Shot smiley girl jumping rope",
    distance: "8 KM",
    image:   "/gr (1).png",
  },
  {
    id: 5,
    title: "Stadium with a lot of seats sky",
    location: "Agasean Institute",
    distance: "9 KM",
    image:  "/gr (1).png",
  },
  {
    id: 6,
    title: "Cricket world cup trophy generative",
    location: "Viet nam",
    distance: "10 KM",
    image:  "/gr (1).png",
  },
  {
    id: 7,
    title: "Stadium in lights and flashes, fests",
    location: "Shot smiley girl jumping rope",
    distance: "8 KM",
    image:   "/gr (1).png",
  },
  {
    id: 8,
    title: "Stadium with a lot of seats sky",
    location: "Agasean Institute",
    distance: "9 KM",
    image:  "/gr (1).png",
  },
  {
    id: 9,
    title: "Cricket world cup trophy generative",
    location: "Viet nam",
    distance: "10 KM",
    image:  "/gr (1).png",
  }
];
  return (
    <div className="nb-section1">
      <div className="nb-header1">
        <h3>Nearby you</h3>
        <span className="view-all1" onClick={()=>setViewAll(!viewAll)}>{viewAll ? "Show less"  : 'View all'}</span>
      </div>

      <div className={`nb-container1 ${viewAll ? 'grid-view1' : ''}`}>



        {nearbyGrounds.map(function (gr) {
            return <div className="nb-card1" key={gr.id}>
          <div className="img-wrapper1">
            <img src={gr.image} className="nb-img1" />
            <span className="distance1">{gr.distance}</span>
          </div>

          <h4>{gr.title}</h4>

          <div className="loc1">
            <FaMapMarkerAlt size={12} /> {gr.location}
          </div>
        </div>
        })

        }
     
      

      </div>
    </div>
  )
}

export default Nearby