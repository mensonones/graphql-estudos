
const defaultData = [
    {
        id: 1,
        name: "Luke SkyWaler",
        gender: "male",
        planet: "Tattoine"
    },
    {
        id: 2,
        name: "C-3PO",
        gender: "bot",
        planet: "Tattoine"
    }
]

const resolvers = {
    Query: {
        allPeople: () => {
            return defaultData
        },
        person: (root, { id }) => {
            return defaultData.filter(character => {
                return (character.id = id)
            })[0]
        }
    }
}

export default resolvers;