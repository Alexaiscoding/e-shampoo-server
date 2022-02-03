const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const productSchema = new Schema(

   { productName: String,

    ref: String,

    description: String,

    price: Number,

    image: String,
    stock: Number,

    category: {
    type: String,

<<<<<<< HEAD
            enum:['secs', 'normaux', 'gras', 'mixtes']       
=======
            enum:['secs', 'normaux', 'gras', ‘mixtes’]       
>>>>>>> 03862c460dbbcf3b623d697ec34757d42348ae86
    },

Type: {type: String,

<<<<<<< HEAD
enum:['amande-douce', 'Bamboo', 'Mangue-Coriandre', 'figue-coco']},

=======
enum:['amande douce', 'bambou', 'figue/coco', ‘mangue/coriandre’]     },
>>>>>>> 03862c460dbbcf3b623d697ec34757d42348ae86
id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],

    
   ingredients: String}

)

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;