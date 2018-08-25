import gql from "graphql-tag";

const addVaccine = gql`
  mutation ($title: String!, $description: String!, $doseType: DoseType!) {
    addVaccine(title: $title, description: $description, doseType: $doseType)
  }
`;

export default addVaccine;

