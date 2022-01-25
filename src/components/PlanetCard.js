import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={
            planetName
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          }
        />
        <p data-testid="planet-name">
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
