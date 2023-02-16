
import React from "react";
// const baseURL = "http://127.0.0.1/project";
function FilterModal(props) {

    return (
        <div>


            <div className="modal fade" id="filter-modal" tableIndex="-1" role="dialog" aria-labelledby="filter-heading" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="filter-heading">Filters</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <h5>Gender</h5>
                            <hr />
                            <div>
                                <button className={props.filter === "none" ? "btn btn-outline-dark btn-active" : "btn btn-outline-dark"} onClick={() => props.handleClick("none")}>
                                    No Filter
                                </button>
                                <button className={props.filter === "unisex" ? "btn btn-outline-dark btn-active" : "btn btn-outline-dark"} onClick={() => props.handleClick("unisex")}>
                                    <i className="fas fa-venus-mars"></i>Unisex
                                </button>
                                <button className={props.filter === "male" ? "btn btn-outline-dark btn-active" : "btn btn-outline-dark "} onClick={() => props.handleClick("male")}>
                                    <i className="fas fa-mars"></i>Male
                                </button>
                                <button className={props.filter === "female" ? "btn btn-outline-dark btn-active" : "btn btn-outline-dark "} onClick={() => props.handleClick("female")} >
                                    <i className="fas fa-venus"></i>Female
                                </button>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button data-dismiss="modal" className="btn btn-success" onClick={() => props.handleSubmit(props.filter)} > Okay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default FilterModal;