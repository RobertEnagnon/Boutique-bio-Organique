// Require
const express = require('express');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

var router = express.Router();
// mongoose.set('useFindAndModify', false);

// Routes
router.get('/', (req, res)=>{
    res.render('menu');
});

router.get('/cart', (req, res)=>{
    res.render('cart');
});

router.get('/orders', (req, res)=>{
    res.render('orders');
});

router.get('/admin', (req, res)=>{
    Order.find((err, docs)=>{
        if (!err) {
            res.render('admin',{
                order: docs
            });
        } else {
            console.log("Error in Order: "+ err);
        }
    })
});

router.get('/order/:id', (req,res)=>{
    Order.findById(req.params.id,(err,doc)=>{
        if (!err) {
            res.render('orders', {order:doc});
        } else {
            console.log("Error in findById: "+ err);
        }
    })
});

router.get('/order/delete/:id', (req, res)=>{
    Order.findByIdAndRemove(req.params.id, (err, doc)=>{
        if (!err) {
            res.redirect('/admin');
        } else {
            console.log("Error in findByIdAndRemove: "+ err);
        }
    })
})

// POST
router.post('/cart',(req, res)=>{
    insertOrder(req,res);
});

router.post('/order', (req, res)=>{
    updateOrder(req, res);
});


// Functions
function insertOrder(req, res) {
    var d = new Date();
    var t = d.getTime();
    var counter = t;
    counter += 1;
    var order = new Order();
    order.total = req.body.total;
    order.order = counter;
    order.save((err,doc)=>{
        if (!err) {
            console.log('Order: '+order);
            res.redirect('/admin');
        } else {
            console.log("Error insertOrder: "+err);
        }
    })

}

function updateOrder(req, res) {
    Order.findOneAndUpdate({id: req.body._id}, req.body,{new:true},(err, doc)=>{
        if (!err) {
            res.redirect('/admin');
        } else {
            console.log("Update eroor: "+err);
        }
    });
}

module.exports = router;