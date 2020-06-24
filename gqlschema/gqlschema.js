const graphql = require('graphql');
const SoilMoisture = require('../models/SoilMoisture')
const Temperature = require('../models/Temperature')
const Humidity = require('../models/Humidity')

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

const TemperatureType = new GraphQLObjectType({
    name: 'Temperature',
    fields: () => ({
        id: {type: GraphQLID},
        temperature: {type: GraphQLInt},
        date: {type: GraphQLString}
    })
});

const HumidityType = new GraphQLObjectType({
    name: 'Humidity',
    fields: () => ({
        id: {type: GraphQLID},
        humidity: {type: GraphQLInt},
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
        },
        Temperature: {
            type: TemperatureType,
            args: {date: {type: GraphQLString}},
            async resolve(parent, args){
                const result = await Temperature.findOne({ date: args.date })
                return result;
            }
        },
        Temperatures: {
            type: GraphQLList(TemperatureType),
            args: {limit: {type: GraphQLInt}},
            async resolve(parent, args) {
                const result = await Temperature.find().limit(args.limit);
                return result;
            }
        },
        Humidity: {
            type: HumidityType,
            args: {date: {type: GraphQLString}},
            async resolve(parent, args){
                const result = await Humidity.findOne({ date: args.date })
                return result;
            }
        },
        Humidities: {
            type: GraphQLList(HumidityType),
            args: {limit: {type: GraphQLInt}},
            async resolve(parent, args) {
                const result = await Humidity.find().limit(args.limit);
                return result;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})