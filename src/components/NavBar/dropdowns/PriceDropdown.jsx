import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { sortingItems } from "../../../actions/index";
import { priceFilter } from "./utilities/utilities";
import "./PriceDropdown.css";

function PriceDrpdwn({sortingItems, relItems}) {
    const [limits, setLimits] = useState({min: "", max: ""});
    function handleChange(e) {
        if(!!parseFloat(e.target.value) || !e.target.value) {
            setLimits({...limits, [e.target.name]: e.target.value})
        };
    };
    return (
    <form 
        className="form"
        onSubmit={(e) => {
        e.preventDefault();
        priceFilter(sortingItems, relItems, limits);
        setLimits({min:"", max:""})
        }}>
        <label className="label">Precio: </label>
        <input 
        className="input"
        placeholder="Minimo"
        type="text" 
        name="min" 
        value={limits.min}
        onChange={handleChange}
        />
        <input 
        className="input"
        placeholder="Maximo"
        type="text" 
        name="max" 
        value={limits.max}
        onChange={handleChange}
        />
        <div style={{height:8, margin: 8}}>
            <Button type="submit" className="d-none d-sm-block" variant="success" size="sm">
                Filtrar
            </Button>
        </div>
                  
    </form>   
    );
};

function mapStateToProps(state) {
    return {
        relItems: state.relItems
    };
};
export default connect(mapStateToProps, { sortingItems })(PriceDrpdwn)