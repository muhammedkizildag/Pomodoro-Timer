const express = require('express');
const cookieParser = require('cookie-parser'); 

app = express();
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(cookieParser())


app.get('/', (req, res) => {
    console.log(req.get('Accept-Language'));
    res.render('index');
})


app.listen(3000, () => {
    console.log('Listening on port 3000');
})




