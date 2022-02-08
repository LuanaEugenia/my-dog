import { Component } from "react";
import Form from 'react-bootstrap/Form'
import { getAllBreeds } from "../services/dog.service";

class SelectComponent extends Component {
  constructor() {
    super();

    this.state = {
      breeds: [],
      selectedBreed: '',
    };

    this.onSelectBreed = this.onSelectBreed.bind(this);
  }

  componentDidMount() {
    getAllBreeds().then(breeds => {
      this.setState({
        breeds,
        selectedBreed: breeds[0],
      });
    });
  }

  onSelectBreed(event) {
    const { target } = event;

    this.setState({
      selectedBreed: target.value,
    });
  }

  render() {
    const { breeds } = this.state;

    return (
      <Form.Select size="sm" onChange={this.onSelectBreed}>
        {
          breeds.map((breed, i) => <option key={i}>{breed}</option>)
        }
      </Form.Select>
    );
  }
}

export default SelectComponent;
