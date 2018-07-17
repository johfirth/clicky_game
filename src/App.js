import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
import adidas from "./images/adidas.jpg"
import apple from "./images/apple.png"
import coke from "./images/coke.jpg"
import dominos from "./images/dominos.png"
import fedex from "./images/fedex.png"
import mcdonalds from "./images/mcdonalds.png"
import mercedes from "./images/mercedes.jpg"
import nike from "./images/nike.png"
import seveneleven from "./images/seveneleven.png"
import starbucks from "./images/starbucks.png"
import vw from "./images/vw.jpg"
import walmart from "./images/walmart.png"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "adidas":
        return `${adidas}`
      case "apple":
        return `${apple}`
      case "coke":
        return `${coke}`
      case "dominos":
        return `${dominos}`
      case "fedex":
        return `${fedex}`
      case "mcdonalds":
        return `${mcdonalds}`
      case "mercedes":
        return `${mercedes}`
      case "nike":
        return `${nike}`
      case "seveneleven":
        return `${seveneleven}`
      case "starbucks":
        return `${starbucks}`
      case "vw":
        return `${vw}`
      case "walmart":
        return `${walmart}`
      default:
        return `${adidas}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
