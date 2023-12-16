import { Schema, model } from 'mongoose';

const playerSchema = new Schema({
    Jugador: {
        type: String,
        required: true,
    },
    Equipo: {
        type: String,
        required: true,
    },
    ArquetipoOfensivo: {
        type: String,
        required: true,
    },
    ArquetipoDefensivo: {
        type: String,
        required: true,
    },
    POISEOfensivo: {
        type: Number,
        required: true,
    },
    POISEDefensivo: {
        type: Number,
        required: true,
    },
    POISETotal: {
        type: Number,
        required: true,
    },
    ValorScoring: {
        type: Number,
        required: true,
    },
    ValorSpacing: {
        type: Number,
        required: true,
    },
    ValorPassing: {
        type: Number,
        required: true,
    },
    ValorRimProtection: {
        type: Number,
        required: true,
    },
    ValorRebounding: {
        type: Number,
        required: true,
    },

});

const Player = model('Player', playerSchema);

export default Player;