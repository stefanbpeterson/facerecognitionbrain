import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, demographics }) => {
  if (imageUrl !== '') {
    return (
      <div className='flex justify-center flex-row flex-nowrap content-stretch items-center ma'>
        <div className='mt3 flexChildren'>
          <img alt='' src={imageUrl} width='300px' height='auto' />
        </div>
  
        <div className='white flexChildren pa5 self-start'>
          <div className='f3' id='ageAppearance'>{'Age Appearance'}</div>
          <div className='link dim white b pointer' id='age'>{demographics.age}</div>
          <br></br>
          <div className='f3' id='genderAppearance'>{'Gender Appearance'}</div>
          <div className='link dim white b pointer' id='genderOne'>{demographics.genderOne}</div>
          <div className='link dim white b pointer' id='genderTwo'>{demographics.genderTwo}</div>
          <br></br>
          <div className='f3' id='multiculturalAppearance'>{'Multicultural Appearance'}</div>
          <div className='link dim white b pointer' id='multicultural'>{demographics.multiculturalOne}</div>
          <div className='link dim white b pointer' id='multicultural'>{demographics.multiculturalTwo}</div>
          <div className='link dim white b pointer' id='multicultural'>{demographics.multiculturalThree}</div>
          <div className='link dim white b pointer' id='multicultural'>{demographics.multiculturalFour}</div>
          <div className='link dim white b pointer' id='multicultural'>{demographics.multiculturalFive}</div>
          <div className='link dim white b pointer' id='multicultural'>{demographics.multiculturalSix}</div>
          <div className='link dim white b pointer' id='multicultural'>{demographics.multiculturalSeven}</div>
        </div>

        <div className='white flexChildren pa5 self-start'>
          <div className='f3' id='probability'>{'Probability'}</div>
          <div className='link dim white b pointer' id='ageProbability'>{demographics.ageProbability}</div>
          <br></br>
          <div className='f3' id='probability'>{'Probability'}</div>
          <div className='link dim white b pointer' id='genderOneProbability'>{demographics.genderOneProbability}</div>
          <div className='link dim white b pointer' id='genderTwoProbability'>{demographics.genderTwoProbability}</div>
          <br></br>
          <div className='f3' id='Probability'>{'Probability'}</div>
          <div className='link dim white b pointer' id='multiculturalProbability'>{demographics.multiculturalOneProbability}</div>
          <div className='link dim white b pointer' id='multiculturalProbability'>{demographics.multiculturalTwoProbability}</div>
          <div className='link dim white b pointer' id='multiculturalProbability'>{demographics.multiculturalThreeProbability}</div>
          <div className='link dim white b pointer' id='multiculturalProbability'>{demographics.multiculturalFourProbability}</div>
          <div className='link dim white b pointer' id='multiculturalProbability'>{demographics.multiculturalFiveProbability}</div>
          <div className='link dim white b pointer' id='multiculturalProbability'>{demographics.multiculturalSixProbability}</div>
          <div className='link dim white b pointer' id='multiculturalProbability'>{demographics.multiculturalSevenProbability}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}

export default FaceRecognition;
