import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
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
      demographics: {},
      box: {},
      route: 'signin',
      isSignedIn: false
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

  calculateFaceLocation = (data) => {
    console.log(data)
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
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

  onSubmitTwo = () => {
    this.setState({imageUrl: this.state.input})
    console.log('click')
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleParams} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        { this.state.route === 'home'
        ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} onSubmitTwo={this.onSubmitTwo} />
            <FaceRecognition demographics={this.state.demographics} imageUrl={this.state.imageUrl} box={this.state.box} />
          </div>
        : (
          this.state.route === 'signin' 
          ? <Signin onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
