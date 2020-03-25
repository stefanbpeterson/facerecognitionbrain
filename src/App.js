import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '0786225b392a43238dd94f3e6b586b8d'
})

const particleParams = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log('click')
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
      .then(
        function(response) {
          console.log(response)

          console.log(response.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name)
          console.log(response.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].value)

          console.log(response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name)
          console.log(response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].value)
          console.log(response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[1].name)
          console.log(response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[1].value)

          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].name)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].value)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[1].name)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[1].value)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[2].name)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[2].value)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[3].name)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[3].value)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[4].name)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[4].value)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[5].name)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[5].value)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[6].name)
          console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[6].value)
        },
        function(err) {
          console.log(err)
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleParams} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
