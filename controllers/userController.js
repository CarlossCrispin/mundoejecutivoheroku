
var mysql = require('mysql');
var bcrypt = require('bcryptjs');


module.exports = {

	getSignUp : function(req, res, next){
		return res.render('users/signup');
	},

	postSignUp: function(req, res, next){
		var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        db.query(`select * from users where email= ?`,req.body.email,function(err,rows,fields){
            if(err || rows.length == 0){ 
                //console.log("88888888888888888888"+JSON.stringify(rows)+"88888888888888888888888");                      
                if(req.body.password === req.body.repassword){
                    var salt = bcrypt.genSaltSync(10);
                    var password = bcrypt.hashSync(req.body.password, salt);
            
                    var user = {
                        email : req.body.email,
                        nombre : req.body.nombre,
                        password : req.body.password
                        //img:src=('../images/per.jpg')
                    };    
                    db.query('INSERT INTO users SET ?', user, function(err, rows, fields){
                        if(err) throw err;
            
                        db.end();
                    });
                    req.flash('info', 'successful');
                    return res.redirect('/');

                }else{
                    req.flash('info', 'DidNotMatch');
                    return res.redirect('/');
                }
            }
            if(rows){
                console.log("88888888888888888888"+JSON.stringify(rows)+"88888888888888888888888");
                req.flash('info', 'duplicity');
                return res.redirect('/');
            }
        });	
	},

	getSignIn: function(req, res, next){
		return res.render('/', {message: req.flash('info'), authmessage : req.flash('authmessage')});
	},

	logout : function(req, res, next){
		req.logout();
		res.redirect('/');
	},

    getUserPanel : function(req, res, next)
    {
		res.render('users/panel', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	},
    getShowUser: function (req, res, next) {
        //pasamos la configuracion de la base de datos
        var config = require('.././database/config');
        //creamos la coneccion a la base de datos 
        var db = mysql.createConnection(config);
        console.log(`> BD: ${db}`);
        db.connect();
        db.query('select * from users',function(err,rows,fields){
            if(err) throw err;

            db.end();
            res.render('users/showUser', {
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
                items: rows
            });
        })
    },
    getTable: function(req, res, next){
       //pasamos la configuracion de la base de datos
       var config = require('.././database/config');
       //creamos la coneccion a la base de datos 
       var db = mysql.createConnection(config);
       console.log(`> BD: ${db}`);
       
       db.connect();
       db.query('select * from ranking_2016_2',function(err,rows,fields){
            if(err) throw err;
            db.query('DESCRIBE `ranking_2016_2`',function(err,rows2,fields){
                if(err) throw err;
            db.end();

            // console.log("----------------------------------------------");
            // console.log(" rows2 --> encabezado");
            // console.log(JSON.stringify(rows2));
            // console.log("************************************************");
            // console.log("----------------------------------------------");
            // console.log(" rows --> valores");
            // console.log(JSON.stringify(rows));
            res.render('users/showTable', {
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
                items: rows,
                items2: rows2
            });
           }) 
           
       })
    },
    getJobGraph: function(req, res, next){
        
        //pasamos la configuracion de la base de datos
       var config = require('.././database/config');
       //creamos la coneccion a la base de datos 
       var db = mysql.createConnection(config);
       console.log(`> BD: ${db}`);
       
       db.connect();
       db.query('select * from empleo where Empleo_2013 != 0',function(err,rows,fields){
            if(err) throw err;
            db.query('DESCRIBE `empleo`',function(err,rows2,fields){
                if(err) throw err;
            db.end();
            // console.log("************************************************");
            // console.log("----------------------------------------------");
            // console.log(" rows --> valores");
            // console.log(JSON.stringify(rows));
            res.render('users/jobGraph', {
                
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
                items: rows,
                items2:rows2
            });
        })
           
       })
        
    },
    // getGrafic1: function(req, res, next){
        
    //     //pasamos la configuracion de la base de datos
    //    var config = require('.././database/config');
    //    //creamos la coneccion a la base de datos 
    //    var db = mysql.createConnection(config);
    //    console.log(`> BD: ${db}`);
       
    //    db.connect();
    //    db.query('select * from ranking_2016 where Sector="Comercio"',function(err,rows,fields){
    //         if(err) throw err;
    //         db.query('DESCRIBE `ranking_2016`',function(err,rows2,fields){
    //             if(err) throw err;
    //         db.end();
    //         console.log("************************************************");
    //         console.log("----------------------------------------------");
    //         console.log(" rows --> valores");
    //         console.log(JSON.stringify(rows));
    //         res.render('users/showGrafic1', {
                
    //             isAuthenticated: req.isAuthenticated(),
    //             user: req.user,
    //             items: rows,
    //             items2:rows2
    //         });
    //     })
           
    //    })
        
    // },
    getUser: function(req, res, next){
       
        res.render('users/user', {
                   
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });
    },
    getInfo: function(req, res, next){
        res.render('users/info', {
                
        isAuthenticated: req.isAuthenticated(),
        user: req.user
        });
        
    },
    getIncomeGraph: function(req, res, next){
        
        //pasamos la configuracion de la base de datos
       var config = require('.././database/config');
       //creamos la coneccion a la base de datos 
       var db = mysql.createConnection(config);
       console.log(`> BD: ${db}`);
       var fecha = new Date();
       var ano = fecha.getFullYear();
       console.log('El año actual es: '+ano);
       db.connect();
       db.query('select * from ranking_2016 where Var_Porcentaje_Ingresos_2014_2015 != 0',function(err,rows,fields){
            if(err) throw err;
            db.query('DESCRIBE `ranking_2016`',function(err,rows2,fields){
                if(err) throw err;
            db.end();
            // console.log("************************************************");
            // console.log("----------------------------------------------");
            // console.log(" rows --> valores");
            // console.log(JSON.stringify(rows2));
            res.render('users/incomeGraph', {
                
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
                items: rows,
                items2:rows2
            });
        })
           
       })
        
    },

    getSectorGraph: function(req, res, next){
        
        //pasamos la configuracion de la base de datos
       var config = require('.././database/config');
       //creamos la coneccion a la base de datos 
       var db = mysql.createConnection(config);
       console.log(`> BD: ${db}`);
       var fecha = new Date();
       var ano = fecha.getFullYear();
       console.log('El año actual es: '+ano);
       db.connect();
       db.query('select * from ranking_2016',function(err,rows,fields){
            if(err) throw err;
            db.query('DESCRIBE `ranking_2016`',function(err,rows2,fields){
                if(err) throw err;
            db.end();
            // console.log("************************************************");
            // console.log("----------------------------------------------");
            // console.log(" rows --> valores");
            // console.log(JSON.stringify(rows2));
            res.render('users/sectorGraph', {
                
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
                items: rows,
                items2:rows2
            });
        })
           
       })
        
    }
};