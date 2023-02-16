import React from "react";
import Star from "./Star"
import Fave from "./Fave"
// const baseURL = "http://127.0.0.1/project";
import { baseURL } from "./Utils";

function PropertyCard(props) {

    let total_rating = (parseFloat(props.property.rating_clean) + parseFloat(props.property.rating_food) + parseFloat(props.property.rating_safety)) / 3;
    total_rating = Math.round(total_rating * 10) / 10;
    total_rating = total_rating.toFixed(1);


    return (

        <div className="property-card row">

            <div className="image-container col-md-4">
                <img src={baseURL + "/" + props.property.image} alt="img" />
            </div>



            <div className="content-container col-md-8">
                <div className="row no-gutters justify-content-between">
                    <div className="star-container">
                        <Star rating={total_rating} />
                    </div>
                    <div class="interested-container">
                        <Fave toggleInterested={props.toggleInterested}
                            is_interested={props.property.is_interested}
                            user_count={props.property.interested_users_count} />
                    </div>
                </div>
                <div className="detail-container">
                    <div className="property-name">{props.property.name}</div>
                    <div className="property-address">{props.property.address}</div>
                    <div className="property-gender">
                        <img src={baseURL + "/img/" + props.property.gender + ".png"} alt="gender" ></img>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="rent-container col-6">
                        <div className="rent"></div>
                        <div className="rent-unit">{props.property.rent} per month</div>
                    </div>
                    <div className="button-container col-6">
                        <a href={"property_detail.php?property_id=" + props.property.id} className="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
        </div>

    );
}



export default PropertyCard;