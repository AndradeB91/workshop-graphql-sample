import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import getAllVaccines from '../queries/getAllVaccines';

class Home extends React.PureComponent{

  renderLoading() {
    return (
      <div>Loading...</div>
    )
  }

  renderVaccinesList() {
    const { vaccines: { getAllVaccines } } = this.props;
    return (
      <Fragment>
        <div> Lista </div>
        <ul>{
          getAllVaccines.map(vaccine => {
            const { id, title, description } = vaccine;
            return <li key={id}>{title} - {description}</li>
          })
        }</ul>
      </Fragment>
    )
  }

  render() {
    const { vaccines } = this.props;
    return (
      (vaccines.loading) ? this.renderLoading() : this.renderVaccinesList()
    )
  }
};

export default graphql(getAllVaccines, { name: 'vaccines' })(Home);
