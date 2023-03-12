import React from "react";
import { Header } from "./Header";
import grocery from '../images/Grocery.png';
import vegetables from '../images/vegetables.png';
import fruits from '../images/fruits.png';
import spices from '../images/spices.png';
import beef from '../images/beef.png';
import chicken from '../images/chicken.png';
import piecesmeat from '../images/piecesmeat.png';
import piecesmeat from '../images/options.png';
import './style.css';

export default function Home() {
    return (
        <div className="home">
            <Header />
            <img className="grocery" src={grocery} alt="grocery" />
            <h3>Shop by Category</h3>
            <input type={"search"} style={{ width: "100%" }} />
            <div>
                <div className="name">
                    <img className="packaging" src={packaging} alt="packaging" />
                    <p className="name"></p>
                </div>
                <div className="name">
                    <img className="vegetables" src={vegetables} alt="vegetables" />
                    <p className="name"></p>
                </div>
                <div className="name">
                    <img className="fruits" src={fruits} alt="fruits" />
                    <p className="name"></p>
                </div>
                <div className="name">
                    <img className="spices" src={spices} alt="spices" />
                    <p className="name"></p>
                </div>
            </div>
            <h3>Popular Items</h3>
            <div>
                <div>
                    <img className="beef" src={beef} alt="beef" />
                    <img className="chicken" src={chicken} alt="chicken" />
                    <img className="piecesmeat" src={piecesmeat} alt="packaging" />
                    
                </div>
                <div>
                    <img className="packaging" src={packaging} alt="packaging" />
                    <img className="packaging" src={packaging} alt="packaging" />
                    <img className="vegetables" src={vegetables} alt="vegetables" />
                </div>
                <div>
                    <img className="packaging" src={packaging} alt="packaging" />
                    <img className="packaging" src={packaging} alt="packaging" />
                    <img className="fruits" src={fruits} alt="fruits" />
                </div>
                <img className="options" src={options} alt="options" />
            </div>
        </div>
    )
}