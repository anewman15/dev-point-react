/* eslint-disable no-confusing-arrow */
import React from 'react';
import propTypes from 'prop-types';
import ReactWordCloud from 'react-wordcloud';

const SkillsCloud = ({ currentDev }) => {
  const devSkills = currentDev.skills.map(skill => (
    {
      text: skill.skill_name,
      value: skill.experience,
    }
  ));

  const callbacks = {
    getWordTooltip: word => `${word.value} years`,
  };

  const options = {
    enableTooltip: true,
    deterministic: false,
    fontFamily: ['montserrat', 'sans-serif'],
    fontSizes: [32, 48, 60],
    fontStyle: 'normal',
    fontWeight: ['bold'],
    padding: 4,
    rotations: 3,
    rotationAngles: [8, 62, 100],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
  };

  return (
    <div className="w-full">
      <ReactWordCloud words={devSkills} callbacks={callbacks} options={options} />
    </div>
  );
};

SkillsCloud.propTypes = {
  currentDev: propTypes.object,
}.isRequired;

export default SkillsCloud;
