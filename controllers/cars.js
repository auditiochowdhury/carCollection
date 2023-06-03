const Car = require('../models/Car')

module.exports = {
    getCars: async (req,res)=>{
        console.log(req.user)
        try{
            const carItems = await Car.find({userId:req.user.id})
            const itemsLeft = await Car.countDocuments({userId:req.user.id,completed: false})
            res.render('cars.ejs', {cars: carItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createCar: async (req, res)=>{
        try{
            await Car.create({car: req.body.carItem, completed: false, userId: req.user.id})
            console.log('Car has been added!')
            res.redirect('/cars')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Car.findOneAndUpdate({_id:req.body.carIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Car.findOneAndUpdate({_id:req.body.carIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteCar: async (req, res)=>{
        console.log(req.body.carIdFromJSFile)
        try{
            await Car.findOneAndDelete({_id:req.body.carIdFromJSFile})
            console.log('Deleted Car')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    