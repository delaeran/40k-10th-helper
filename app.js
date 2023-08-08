const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/hacking', (req, res) => {
    res.sendFile(path.join(__dirname,'views','hacking.html'));
  })

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen('3000');
