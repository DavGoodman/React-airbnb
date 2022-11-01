import React from "react";
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data";



export default function App() {
    let Map = data.map(x=> 
        (
            <Card 
            key={x.id}

            {...x} //spreads out x as components as if typed in manually on the bottom bellow

            //item={x}  // whole datasheet becomes a property

            // img={x.coverImg}
            // rating={x.stats.rating}
            // reviewCount={x.stats.reviewCount}
            // location={x.location}
            // title={x.title}
            // price={x.price}
            // openSpots={x.openSpots}

            />
        )
        
        
        )
    return (
        <div className="app">
            <Nav />
            <Hero />
            <section className="cards">
                {Map}
            </section>
        </div>
    )
}