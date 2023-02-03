const mongooose = require('mongoose');

mongooose.connect("mongodb://127.0.0.1:27017/ecommerceOrganicOrders",{
    useNewUrlParser:true
},
(err)=>{
    if (!err) {
        console.log("MongoDB connected");
    }else{
        console.log("error: "+err);
    }
});
require('./order.model');