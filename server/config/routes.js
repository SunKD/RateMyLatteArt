const c = require('../controllers/rate')();

module.exports = (app) => {
    app.get('/lattes', function(req, res){
        console.log("working!");
        
        c.readAll(req, res);
    })
    app.post('/lattes', function(req, res){
        console.log("Creating!")
        c.create(req, res);
    })
    app.get('/lattes/:id', function(req, res){
        c.readOne(req, res);
    })


    app.post('/lattes/:id', function(req, res){
        c.createComment(req, res);
    })
    // app.put('/lattes/:id', function(req, res){
    //     c.createComment(req, res);
    // })
    // app.delete('/lattes/:id', function(req, res){
    //     c.delete(req, res);
    // })
}