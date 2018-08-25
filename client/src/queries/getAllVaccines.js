import gql from "graphql-tag";

const getAllVaccines = gql`
  query {
    getAllVaccines{
      id,
      title,
      description,
    }
  }
`;

export default getAllVaccines;