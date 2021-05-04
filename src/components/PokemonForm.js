import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleAddPokemon}) {
  
const [formData, setFormData] = useState({
  name: "",
  hp: "",
  frontCard: "",
  backCard: ""
})

function handleChange(event) {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
}
console.log(formData.name,formData.hp,formData.frontCard,formData.backCard)

function handleSubmit() {
  // Semantic UI React's Form component handles the preventDefault automatically!

  const newPokemon = {
    name: formData.name,
    hp: formData.hp,
    sprites: {
      front: formData.frontCard,
      back: formData.backCard,
    }
  };

  fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemon),
  })
    .then((r) => r.json())
    .then(handleAddPokemon);
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...")
          handleSubmit();
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontCard"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backCard"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
