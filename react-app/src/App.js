


import Filterbar from "./Filterbar";
import FilterModal from "./FilterModal";
import PropertyCard from "./PropertyCard"
import React, { useState } from "react";
import Axios from "axios";
import NoProperty from "./NoProperty";
// import { baseURL } from "./Utils";
const baseURL = "http://127.0.0.1/project";





function App() {
  const [properties, setProperties] = useState([]);
  const [prop, setProp] = useState([]);
  const [filter, setFilter] = useState({
    filter: "none"
  });

  let property_cards;

  function handleClick(gender) {
    setFilter(gender);



  }

  function handleSubmit(filters) {
    if (filters === 'male') {
      const p = prop.filter(property =>
        property.gender === filters
      );
      console.log(p);
      setProperties(p);
    }


    else if (filters === 'female') {
      const p = prop.filter(property =>
        property.gender === filters
      );
      console.log(p);
      if (p.length > 0) { setProperties(p); }
      else
        alert("Sorry no pgs with specified fiketr");
    }


    else if (filters === 'unisex') {
      const p = prop.filter(property =>
        property.gender === filters
      );
      if (p.length > 0) { setProperties(p); }
      else
        alert("Sorry no pgs with specified filter");

    }

    else {
      setProperties(prop);
    }
  }



  React.useEffect(() => {

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const city_name = params.get('city');

    Axios.get(`${baseURL}/api/get_properties_by_city.php?city=${city_name}`)
      .then((response) => {
        setProperties(response.data);
        setProp(response.data);

      }).catch(error => {
        console.log(error);
      });
    // fetch(`${baseURL}/api/get_properties_by_city.php?city=${city_name}`)
    //   .then(response => response.json())
    //   .then(responseData => {
    //     setProperties(responseData);
    //     setProp(responseData);
    //   })
    //   .catch(error => {
    //     console.log('Error fetching and parsing data', error);
    //   });

  }, []);



  function toggleInterested(property_id) {

    console.log(property_id);
    Axios.post(`${baseURL}/api/toggle_interested.php?property_id=${property_id}`, property_id)
      .then((response) => {
        if (response.data.success) {
          updateInterested(property_id);
        }
        else if (!response.data.success && !response.data.is_logged_in) {
          console.log('Not logged in!');
          window.$("#login-modal").modal("show");
        }

      }).catch(error => {
        console.log(error);
      });


  }
  function updateInterested(property_id) {
    let updated_properties = [...properties];
    updated_properties.forEach((property) => {
      if (property.id === property_id) {
        property.is_interested = !property.is_interested;
        if (property.is_interested) {
          property.interested_users_count++;
        } else {
          property.interested_users_count--;
        }
      }
    })
    setProperties(updated_properties);
  }




  const p = [...properties];
  function highFirst() {

    p.sort((a, b) => b.rent - a.rent);

    setProperties(p);
  }
  function lowFirst() {

    p.sort((a, b) => a.rent - b.rent);

    setProperties(p);
  }


  if (properties.length > 0) {
    property_cards = properties.map(property =>
      <PropertyCard
        key={property.id}
        property={property}
        toggleInterested={() => toggleInterested(property.id)}

      />
    );
  }


  if (properties.length <= 0) {
    property_cards = <NoProperty />;
  }



  return (
    < div >
      <div className="page-container">
        <FilterModal handleClick={handleClick} handleSubmit={handleSubmit} filter={filter} />
        < Filterbar highFirst={highFirst} lowFirst={lowFirst} />
        {property_cards}
      </div>

    </div >
  );

}

export default App;
