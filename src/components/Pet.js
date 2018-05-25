import React from 'react';
import PropTypes from 'prop-types';

export default function Pet(props) {
  // If the pet is still loading,
  // we'll return early.
  if (props.loading) {
    return (
      <section className="pet">
        <h2>Loading...</h2>
      </section>
    );
  }

  if (!props.loading && !props.name) {
    return (
      <section className="pet">
        <h2>All gone! :)</h2>
      </section>
    );
  }

  // If the pet is done loading,
  // we can build a proper section
  // with a header and a main.
  return (
    <section className="pet">
      <header>
        <h2 className="pet-name">{props.name}</h2>
        <img src={props.imageURL} alt={props.imageDescription} />
      </header>
      <main>
        <h3>More about {props.name}</h3>
        <dl className="pet-attributes">
          <dt className="term-sex">Sex</dt>
          <dd className="def-sex">{props.sex}</dd>
          <dt className="term-age">Age</dt>
          <dd className="def-age">{props.age} years</dd>
          <dt className="term-breed">Breed</dt>
          <dd className="def-breed">{props.breed}</dd>
          <dt className="term-story">Story</dt>
          <dd className="def-story">{props.story}</dd>
        </dl>
        <button type="button" onClick={() => props.onAdoptPet()}>
          Adopt
        </button>
      </main>
    </section>
  );
}

Pet.propTypes = {
  name: PropTypes.string,
  imageURL: PropTypes.string,
  imageDescription: PropTypes.string,
  sex: PropTypes.string,
  age: PropTypes.number,
  breed: PropTypes.string,
  story: PropTypes.string
};


