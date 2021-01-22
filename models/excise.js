const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exciseSchema = new Schema({
    date: { type: Date, default: Date.now },
    product: { type: String, required: true },
    description: { type: String, required: true },
    vessel_id: { type: String, required: true },
    volume: { type: Number, required: true },
    abv: { type: Number, required: true },
    lals: { type: Number, required: true },
    employee: { type: String, required: true },
    notes: { type: String, required: true },
});

const Excise = mongoose.model("Excise", exciseSchema);

module.exports = Excise;
