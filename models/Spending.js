const mongoose = require('mongoose');


const Spendschema = new mongoose.Schema(
    {
        spentby:{
            type:"string",
            required: true
        },
        spenton:{
            type:"string",
        },
        ammount:{
            type:"Number",
            required: true
        },
        todaysdate:{
            type:"date",
            default: Date.now()
        }
    }
)

const Spentmodel = mongoose.model('spend',Spendschema)
module.exports = Spentmodel