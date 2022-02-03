const mongoose = require("../../config/mongo");

const productModel = require("./../../models/product-model");

const product = [

    {productName: "Shampoing Purifiant",
            ref: "3A",
            description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
            price: 9.99,
            image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
            stock: 10,
            category: {
            type: String,
                    enum:['cheveux-gras']},
        Type: {type: String,
        enum:['amande-douce']},
        id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
    ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
    },


    {productName: "Shampoing Purifiant",
            ref: "3F",
            description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
            price: 9.99,
            image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
            stock: 10,
            category: {
            type: String,
                    enum:['cheveux-gras']},
        Type: {type: String,
        enum:['figue-coco']},
        id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
    ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
    },

    {productName: "Shampoing Purifiant",
    ref: "3B",
    description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
    price: 9.99,
    image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
    stock: 10,
    category: {
    type: String,
            enum:['cheveux-gras']},
Type: {type: String,
enum:['bamboo']},
id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},


{productName: "Shampoing Purifiant",
ref: "3M",
description: "Ce Shampooing Purifiant lave et purifie le cuir chevelu",
price: 9.99,
image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
stock: 10,
category: {
type: String,
        enum:['cheveux-gras']},
Type: {type: String,
enum:['mangue-coriandre']},
id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},

{productName: "Shampoing Equilibrant",
ref: "4A",
description: "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
price: 9.99,
image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
stock: 10,
category: {
type: String,
        enum:['cheveux-mixtes']},
Type: {type: String,
enum:['amande-douce']},
id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},


{productName: "Shampoing Equilibrant",
ref: "4M",
description: "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
price: 9.99,
image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
stock: 10,
category: {
type: String,
        enum:['cheveux-mixtes']},
Type: {type: String,
enum:['mangue-coriandre']},
id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},

{productName: "Shampoing Equilibrant",
ref: "4F",
description: "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
price: 9.99,
image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
stock: 10,
category: {
type: String,
        enum:['cheveux-mixtes']},
Type: {type: String,
enum:['Figue-coco']},
id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},

{productName: "Shampoing Equilibrant",
ref: "4B",
description: "Ce Shampooing doux équilibrant lave et purifie le cuir chevelu",
price: 9.99,
image: "../../public/images/H3448d74697c745e0bd35e1c0017666f9c.webp",
stock: 10,
category: {
type: String,
        enum:['cheveux-mixtes']},
Type: {type: String,
enum:['Bamboo']},
id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
ingredients:"AQUA/WATER EAUAMMONIUM LAURYL SULFATECOCAMIDOPROPYL BETAINESODIUM BENZOATEPARFUM FRAGRANCEZINC GLUCONATESODIUM"
},

]
productModel
  .insertMany(product)
  .then((product) => {
    console.log(`${product.length} inserted`);
  })
  .catch((err) => console.log("no product inserted"));