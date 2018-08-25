const resolvers = {
  DoseType: {
    unique: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  },
  Query: {
    getVaccineById: (parent, { id }) => {
      return {
        id: 1,
        title: 'teste',
        description: 'teste',
        doseType: 1,
      }
    }     
  }
}

export default resolvers;