import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import PetsList from "../components/PetsList";
import NewPetModal from "../components/NewPetModal";
import Loader from "../components/Loader";
//

// add a query
const ALL_PETS = gql`
  query AllPets {
    # retrieve object by calling data.pets
    pets {
      id
      name
      type
      img
    }
  }
`;

// add mutation
const NEW_PET = gql`
  mutation CreateAPet($newPet: NewPetInput!) {
    addPet(input: $newPet) {
      id
      name
      type
      img
    }
  }
`;

export default function Pets() {
  const [modal, setModal] = useState(false);
  // add a React hook to return data, boolean if it is loading, and error message
  const { data, loading, error } = useQuery(ALL_PETS);
  // add a hook to perform the mutation
  const [createPet, newPet] = useMutation(NEW_PET);

  const onSubmit = (input) => {
    setModal(false);
    createPet({
      variables: { newPet: input },
    });
  };

  // return the loader component if the query is loading
  if (loading || newPet.load) {
    return <Loader />;
  }
  // return an error if there is an error with the query
  if (error || newPet.error) {
    return <p>Error</p>;
  }

  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />;
  }

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        {/* when the query data comes in, pass it to PetsList */}
        <PetsList pets={data.pets} />
      </section>
    </div>
  );
}
