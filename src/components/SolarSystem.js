import '../styles/SolarSystem.css';
import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="solar-system-container">
          {Planets.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          ))}
        </div>
      </>
    );
  }
}
