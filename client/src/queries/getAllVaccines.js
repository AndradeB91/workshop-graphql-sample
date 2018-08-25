import gql from "graphql-tag";

const getAllVaccines = gql`
  query {
    getAllVaccines{
      id,
      title,
      description,
      doseType,
    }
  }
`;

export default getAllVaccines;