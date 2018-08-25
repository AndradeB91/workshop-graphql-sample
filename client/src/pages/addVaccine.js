import React from 'react';
import uuid from 'uuid';
import { graphql, compose } from 'react-apollo';
import getAllDoseTypes from '../queries/getAllDoseTypes';
import addVaccine from '../queries/addVaccine';
import getAllVaccines from '../queries/getAllVaccines';

class AddVaccine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      doseType: 'unique'
    };
    this.onChange = this.onChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  renderLoading() {
    return (
      <div>Loading...</div>
    )
  }

  onChange (event) {
    const { name, value } = event.target;
    let state = {};
    switch (name) {
      case 'title':
        state = { title: value };
        break;
      case 'description':
        state = { description: value }
        break;
      case 'doseType':
        state = { doseType: value }
        break;
    }
    this.setState(state);
  }

  onHandleSubmit(event) {
    event.preventDefault();
    const { addVaccine } = this.props;
    const { title, description, doseType } = this.state;
    addVaccine({
      variables: {
        title,
        description,
        doseType,
      },
      refetchQueries: [{ query: getAllVaccines }]
    }).then(() => {
      this.props.history.push('/');
    })
  }

  renderForm() {

    const { doseTypes: { __type } } = this.props;
    const enums = __type ? __type.enumValues : null;
    const { doseType } = this.state;

    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>Title:
          <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
        </label>

        <label>Description:
          <input type="text" name="description" onChange={this.onChange} value={this.state.description} />
        </label>
          
        <label>
          <select 
            name="doseType"
            value={doseType}  
            onChange={this.onChange}
          >
            {enums.map( dose => 
              <option key={uuid()}>{dose.name}</option>
            )}
          </select>
        </label>

        <input type="submit" value="Save"/>
      </form>
      );
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  render() {
    const { doseTypes: { loading } } = this.props;
    return loading ? this.renderLoading() : this.renderForm()
  }
}

export default compose (
  graphql(getAllDoseTypes, { name: 'doseTypes' }),
  graphql(addVaccine, { name: 'addVaccine' }),
)(AddVaccine)