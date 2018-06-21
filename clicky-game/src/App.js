import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    id:null,
    score:0

  };

  shuffleImage = id => {
    let image = this.state.images
    let i = 0
    , j = 0
    , temp = null
    for (i = image.length -1; i>0; i -=1){
      j=Math.floor(Math.random() * (i + 1))
      temp = image[i]
      image[i] = image[j]
      image[j] = temp
    }
    return image;
  }
  setImageState = (key) =>{
    // Filter this.state.images for images with an id not equal to the id being removed
    const images = this.shuffleImage();
    // Set this.state.images equal to the new images array
    this.setState({ images });
    this.idCompare(key);
  };


  idCompare = (id) => {
    if(this.state.id === id) {
      let score = this.state.score -1;
      this.setState({score})
    } else {
      let score = this.state.score +1;
      this.setState({score})
    }
    this.setState({id})
  }

  // Map over this.state.images and render a FriendCard component for each image object
  render() {
    return (
      <Wrapper>
        {this.state.score}
        <Title>Pick a Flower</Title>
        {this.state.images.map(image => (
          <FriendCard
            shuffleImage={this.setImageState}
            id={image.id}
            key={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
