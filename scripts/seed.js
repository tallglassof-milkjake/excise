const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://JakeyBoi:qwerty7462@excise.fejh8.mongodb.net/Excise-items?retryWrites=true&w=majority");

const dataSeed = [
    {
        date: new Date(Date.now()),
        product: '',
        description: '',
        vessel_id: '',
        volume: '',
        abv: '',
        lals: '',
        employee: '',
        notes: ''
    },
    {
        date: new Date(Date.now()),
        product: '',
        description: '',
        vessel_id: '',
        volume: '',
        abv: '',
        lals: '',
        employee: '',
        notes: ''
    },
    {
        date: new Date(Date.now()),
        product: '',
        description: '',
        vessel_id: '',
        volume: '',
        abv: '',
        lals: '',
        employee: '',
        notes: ''
    },
    {
        date: new Date(Date.now()),
        product: '',
        description: '',
        vessel_id: '',
        volume: '',
        abv: '',
        lals: '',
        employee: '',
        notes: ''
    },
    {
        date: new Date(Date.now()),
        product: '',
        description: '',
        vessel_id: '',
        volume: '',
        abv: '',
        lals: '',
        employee: '',
        notes: ''
    },
    {
        date: new Date(Date.now()),
        product: '',
        description: '',
        vessel_id: '',
        volume: '',
        abv: '',
        lals: '',
        employee: '',
        notes: ''
    },
    {
        date: new Date(Date.now()),
        product: '',
        description: '',
        vessel_id: '',
        volume: '',
        abv: '',
        lals: '',
        employee: '',
        notes: ''
    },
    {
        date: new Date(Date.now()),
        product: '',
        description: '',
        vessel_id: '',
        volume: '',
        abv: '',
        lals: '',
        employee: '',
        notes: ''
    },
    {
        date: new Date(Date.now()),
        product: '',
        description: '',
        vessel_id: '',
        volume: '',
        abv: '',
        lals: '',
        employee: '',
        notes: ''
    },
    {
        date: new Date(Date.now()),
        product: '',
        description: '',
        vessel_id: '',
        volume: '',
        abv: '',
        lals: '',
        employee: '',
        notes: ''
    },
]