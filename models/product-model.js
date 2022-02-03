const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const productSchema = new Schema(

   { productTitle: String,

    ref: String,

    description: String,

    price: Number,

    image: String,
    stock: Number,

    category: {
    type: String,

            enum:['secs', 'normaux', 'gras',‘mixtes’]       
    },

Type: {type: String,

enum:['lavande', 'Romarin', 'Framboise', ‘Vanille’]     },
id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],

    },

)

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;