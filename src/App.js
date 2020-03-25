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
      imageUrl: '',
      demographics: {}
    }
  }

  demographicsData = (data) => {
    const ageAppearance = data.outputs[0].data.regions[0].data.face.age_appearance
    const genderAppearance = data.outputs[0].data.regions[0].data.face.gender_appearance
    const multiculturalAppearance = data.outputs[0].data.regions[0].data.face.multicultural_appearance

    return {
      age: ageAppearance.concepts[0].name,
      ageProbability: ageAppearance.concepts[0].value,
      genderOne: genderAppearance.concepts[0].name,
      genderOneProbability: genderAppearance.concepts[0].value,
      genderTwo: genderAppearance.concepts[1].name,
      genderTwoProbability: genderAppearance.concepts[1].value,
      multiculturalOne: multiculturalAppearance.concepts[0].name,
      multiculturalOneProbability: multiculturalAppearance.concepts[0].value,
      multiculturalTwo: multiculturalAppearance.concepts[1].name,
      multiculturalTwoProbability: multiculturalAppearance.concepts[1].value,
      multiculturalThree: multiculturalAppearance.concepts[2].name,
      multiculturalThreeProbability: multiculturalAppearance.concepts[2].value,
      multiculturalFour: multiculturalAppearance.concepts[3].name,
      multiculturalFourProbability: multiculturalAppearance.concepts[3].value,
      multiculturalFive: multiculturalAppearance.concepts[4].name,
      multiculturalFiveProbability: multiculturalAppearance.concepts[4].value,
      multiculturalSix: multiculturalAppearance.concepts[5].name,
      multiculturalSixProbability: multiculturalAppearance.concepts[5].value,
      multiculturalSeven: multiculturalAppearance.concepts[6].name,
      multiculturalSevenProbability: multiculturalAppearance.concepts[6].value,
    }
  }

  displayDemographics = (demographics) => {
    console.log(demographics)
    this.setState({demographics: demographics})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log('click')
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
      .then(response => this.displayDemographics(this.demographicsData(response)))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleParams} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition demographics={this.state.demographics} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
