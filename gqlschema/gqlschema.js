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
        date: {type: GraphQLString},
        temperature: {
            type: TemperatureType,
            async resolve(parent, args){
                // Since there is no unique ID connecting data entries and since one entry might fail on certain data, the connection is 
                // any entry made 5 minutes before or 5 minutes after.  

                let before = new Date(parseInt(parent.date));
                before.setMinutes(before.getMinutes() - 5);
                let later = new Date(parseInt(parent.date));
                later.setMinutes(before.getMinutes() + 5);
                const temp = await Temperature.find( { date: { $gte: before.getTime(), $lt: later.getTime() } } ).sort({ date: -1 }).limit(1);
                return temp[0];
            }
        },
        humidity: {
            type: HumidityType,
            async resolve(parent, args){
                let before = new Date(parseInt(parent.date));
                before.setMinutes(before.getMinutes() - 5);
                let later = new Date(parseInt(parent.date));
                later.setMinutes(before.getMinutes() + 5);
                const temp = await Humidity.find( { date: { $gte: before.getTime(), $lt: later.getTime() } } ).sort({ date: -1 }).limit(1);
                return temp[0];
            }
        }
    })
});

const TemperatureType = new GraphQLObjectType({
    name: 'Temperature',
    fields: () => ({
        id: {type: GraphQLID},
        temperature: {type: GraphQLInt},
        date: {type: GraphQLString},
        soilMoisture: {
            type: SoilMoistureType,
            async resolve(parent, args){
                let before = new Date(parseInt(parent.date));
                before.setMinutes(before.getMinutes() - 5);
                let later = new Date(parseInt(parent.date));
                later.setMinutes(before.getMinutes() + 5);
                const temp = await SoilMoisture.find( { date: { $gte: before.getTime(), $lt: later.getTime() } } ).sort({ date: -1 }).limit(1);
                return temp[0];
            }
        },
        humidity: {
            type: HumidityType,
            async resolve(parent, args){
                let before = new Date(parseInt(parent.date));
                before.setMinutes(before.getMinutes() - 5);
                let later = new Date(parseInt(parent.date));
                later.setMinutes(before.getMinutes() + 5);
                const temp = await Humidity.find( { date: { $gte: before.getTime(), $lt: later.getTime() } } ).sort({ date: -1 }).limit(1);
                return temp[0];
            }
        }
    })
});

const HumidityType = new GraphQLObjectType({
    name: 'Humidity',
    fields: () => ({
        id: {type: GraphQLID},
        humidity: {type: GraphQLInt},
        date: {type: GraphQLString},
        soilMoisture: {
            type: SoilMoistureType,
            async resolve(parent, args){
                let before = new Date(parseInt(parent.date));
                before.setMinutes(before.getMinutes() - 5);
                let later = new Date(parseInt(parent.date));
                later.setMinutes(before.getMinutes() + 5);
                const temp = await SoilMoisture.find( { date: { $gte: before.getTime(), $lt: later.getTime() } } ).sort({ date: -1 }).limit(1);
                return temp[0];
            }
        },
        temperature: {
            type: TemperatureType,
            async resolve(parent, args){
                let before = new Date(parseInt(parent.date));
                before.setMinutes(before.getMinutes() - 5);
                let later = new Date(parseInt(parent.date));
                later.setMinutes(before.getMinutes() + 5);
                const temp = await Temperature.find( { date: { $gte: before.getTime(), $lt: later.getTime() } } ).sort({ date: -1 }).limit(1);
                return temp[0];
            }
        }
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
                const result = await SoilMoisture.find({}).sort({ date: -1 }).limit(args.limit);
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
                const result = await Temperature.find({}).sort({ date: -1 }).limit(args.limit);
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
                const result = await Humidity.find().find({}).sort({ date: -1 }).limit(args.limit);
                return result;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})