const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.get('/', (req, res)=>{
    res.send('api working');
})
app.use(cors());
const categories = require('./Data/Category.json');
app.listen(port, ()=>{
    console.log('Dragon news', port);
})
app.get('/news-category', (req, res)=>{
    res.send(categories);
})
