const app = require('./app/app');


const port = process.env.PORT || 3001;




app.listen(port, () => {
    console.log('server is run on port ' + port);
})

