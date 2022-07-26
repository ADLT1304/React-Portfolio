import React from "react";
import logo from './logo.svg';
import Gallery from './Gallery';
import Navbar from "./Navbar";


function Home () {
    const images = ["", 
    "https://images.pexels.com/photos/10690040/pexels-photo-10690040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    "https://images.pexels.com/photos/7177235/pexels-photo-7177235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11513528/pexels-photo-11513528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12217674/pexels-photo-12217674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11991865/pexels-photo-11991865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
    return (
    <div>
        <Navbar heading="Home"/>
        <header className="App-header">
            <Gallery images={images}/>
        </header>
    </div>
    )
}

export default Home