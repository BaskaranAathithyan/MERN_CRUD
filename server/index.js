const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');

const FoodModel= require('./models/Food');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://aathi27:admin11@crud.jylad.mongodb.net/food?retryWrites=true&w=majority", {
    useNewUrlParser:true,
})


app.post('/insert',async(req,res) =>{
    const foodName = req.body.foodName
    const days=req.body.days
    const food = new FoodModel({foodName:foodName, daysSinceIAte:days});

    try{
        await food.save();
    }catch(err){
        console.log(err);
    }
});


app.get('/read',async(req,res) =>{
    FoodModel.find({}, (err,result) => {
        if(err){
            res.send(err);
        }
        res.send(result);
    })
});


app.listen(3001, () =>{
    console.log("Server on 3001");
})
