const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/my-app');
const userSchema = new mongoose.Schema({ name: String, email: String, gender: String })
const Table = mongoose.model('users', userSchema)

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const data = await Table.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching data', error: err });
    }
})
app.post('/get', async (req, res) => {
    const result = await Table.find(req.body)
    res.json(result)

})
app.post('/create', async (req, res) => {

    const newUser = new Table(req.body);
    const result = await newUser.save();
    res.status(201).json('insert : success');

})
app.delete('/delete', async (req, res) => {
    const result = await Table.deleteOne(req.body)
    res.status(201).json('Delete : success');

})
app.put('/update',async (req,res) => {
    const result = await Table.updateOne(
        {_id:req.body._id},
        {$set:req.body}
    ) 
    res.json(result)
})




app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
