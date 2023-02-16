
import React from "react";
// const baseURL = "http://127.0.0.1/project";
import { baseURL } from "./Utils";

function Filterbar(props) {

    return (
        <div className="page-container">
            <div className="filter-bar row justify-content-around">
                <div className="col-auto" data-toggle="modal" data-target="#filter-modal">
                    <img src={baseURL + "/img/filter.png"} alt="filter" />
                    <span>Filter</span>
                </div>
                <div className="col-auto">
                    <img src={baseURL + "/img/desc.png"} alt="sort-desc" onClick={props.highFirst} />
                    <span onClick={props.highFirst}>Highest rent first</span>
                </div>
                <div className="col-auto">
                    <img src={baseURL + "/img/asc.png"} alt="sort-asc" onClick={props.lowFirst} />
                    <span onClick={props.lowFirst}>Lowest rent first </span>
                </div>
            </div>
        </div >

    );

}
export default Filterbar;
