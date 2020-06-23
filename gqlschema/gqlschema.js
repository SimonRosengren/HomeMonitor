const graphql = require('graphql');
const SoilMoisture = require('../models/SoilMoisture')

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema, GraphQLList } = graphql;

const SoilMoistureType = new GraphQLObjectType({
    name: 'SoilMoisture',
    fields: () => ({
        id: {type: GraphQLID},
        plantId: {type: GraphQLID},
        moisture: {type: GraphQLInt},
        date: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        SoilMoisture: {
            type: SoilMoistureType,
            args: {date: {type: GraphQLString}},
            async resolve(parent, args){
                const result = await SoilMoisture.findOne({ date: args.date })
                return result;
            }
        },
        SoilMoistures: {
            type: GraphQLList(SoilMoistureType),
            args: {limit: {type: GraphQLInt}},
            async resolve(parent, args) {
                const result = await SoilMoisture.find().limit(args.limit);
                return result;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})