const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exciseSchema = new Schema({
    date: { type: Date,  },
    product: { type: String },
    description: { type: String },
    vessel_id: { type: String },
    volume: { type: Number },
    abv: { type: Number },
    lals: { type: Number },
    employee: { type: String },
    notes: { type: String },
});

const Excise = mongoose.model("Excise", exciseSchema);

module.exports = Excise;
