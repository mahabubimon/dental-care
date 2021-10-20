import React from 'react';
import { CardGroup } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import Smile from './Smiles';

const HappySmiles = () => {
    const { clientsAll } = useAuth();
  const { clients } = clientsAll;
  return (
    <section id="smiles" className="container text-center py-5">
      <h2>Welcome to Dental Care</h2>
      <CardGroup className="row row-cols-1 row-cols-md-3 g-4 p-4">
        {clients.map(smile => (
          <Smile key={smile.id} smile={smile}></Smile>
        ))}
      </CardGroup>
    </section>
    );
};

export default HappySmiles;