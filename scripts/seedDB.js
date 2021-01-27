const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://JakeyBoi:qwerty7462@excise.fejh8.mongodb.net/Excise-items?retryWrites=true&w=majority");

const dataSeed = [
    {
        date: new Date(Date.now()),
        product: '4yr Rye Whiskey',
        description: '4 year old rye whiskey aged in new american oak barrels',
        vessel_id: 'Tank21',
        volume: '3054.59',
        abv: '48.6',
        lals: '1484.53',
        employee: 'Jake',
        notes: 'To be non-chill-filtered. Let sit for 5-6 months before bottling. Diluted with filtered local spring water'
    },
    {
        date: new Date('Jun 10 2020'),
        product: 'Barrel Aged Gin',
        description: 'Standard Gin matured in charred ex French oak barrels',
        vessel_id: 'IBC-55',
        volume: '1067.23',
        abv: '41.12',
        lals: '438.84',
        employee: 'John',
        notes: 'Matured for 8 months in charred ex French oak and then finished in ex PX sherry cask for 22 days'
    },
    {
        date: new Date(Date.now()),
        product: 'All Aussie Barley',
        description: 'Malted barley whisky (84%) combined with corn (10%) and rye (6%)',
        vessel_id: 'Bottling-Tank-05',
        volume: '2876.28',
        abv: '54.7',
        lals: '1573.32',
        employee: 'Jane',
        notes: 'Matured 4 years in Cherrywood casks, finished in ex bourbon casks for 4 months.'
    },
    {
        date: new Date(Date.now()),
        product: 'Wasabi Gin',
        description: 'Rose coloured Japanese inspired gin',
        vessel_id: 'Bottling-Tank-21',
        volume: '3510.75',
        abv: '41.0',
        lals: '1439.41',
        employee: 'John',
        notes: 'Macerated for 15 days with whole wasabi root, ginger, local bees wax and 7 other botanicals. Distilled using redistilled Soju and Eau De Vie and washed over pink pepper corns'
    },
    {
        date: new Date(Date.now()),
        product: '6 yr Brandy',
        description: '6 year old Brandy, aged in ex red wine casks',
        vessel_id: 'V6001',
        volume: '5892.02',
        abv: '46.2',
        lals: '2722.11',
        employee: 'Jake',
        notes: 'Red Wine casks used consist of shiraz, grenache and chardonay'
    },
    {
        date: new Date(Date.now()),
        product: 'Coffee Liquour',
        description: 'Natural coffee liquour',
        vessel_id: 'Coffee-3',
        volume: '3012.9',
        abv: '20.0',
        lals: '602.58',
        employee: 'Jane',
        notes: 'Natural and locally roasted coffee used. Ground and steeped in water for 3 days combined with sugar and distilled coffee bean concentrate'
    },
    {
        date: new Date(Date.now()),
        product: '100% Agave Grave',
        description: '100% blue agave distilled and aged 3 months',
        vessel_id: 'LTD-15',
        volume: '1205.39',
        abv: '44.3',
        lals: '533.99',
        employee: 'Jake',
        notes: 'Similar to reposado tequila. Limited edition. Imported and Australian farmed agave'
    },
    {
        date: new Date(Date.now()),
        product: 'Double Sticky Tiki Dream Ale',
        description: 'Creamy dark ale aged in 15yr Jamaican rum barrels',
        vessel_id: 'brewT-23',
        volume: '15063.54',
        abv: '7.2',
        lals: '1084.57',
        employee: 'Conroy',
        notes: 'Strong but smooth dark with dark chocolate and tropical fruit flavours and aromas from the rum barrels'
    },
    {
        date: new Date(Date.now()),
        product: 'Honeysuckle Hop Heifer IPA',
        description: 'Large canned sweet and spicy hopped IPA',
        vessel_id: 'brewT-16',
        volume: '22650.19',
        abv: '6.5',
        lals: '1472.26',
        employee: 'Conroy',
        notes: 'Flavourtown'
    },
    {
        date: new Date(Date.now()),
        product: 'Qld Cane Juice',
        description: 'Queensland rum from queensland sugar-cane',
        vessel_id: 'rum1',
        volume: '7406.72',
        abv: '42.1',
        lals: '3118.23',
        employee: 'Jake',
        notes: 'Rum aged in SA wine and fortified barrels for 5 years'
    },
]

db.Excise.remove({})
  .then(() => db.Excise.collection.insertMany(dataSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });