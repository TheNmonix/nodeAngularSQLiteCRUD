 var sqlite3 = require('sqlite3').verbose(),
   path = require('path'),
   db = new sqlite3.Database(path.join(__dirname, '../..','db', 'testdb')),
   Company={};

    Company.getAllCompanies=function () {
 	// body...
 	return new Promise (function  (resolve, reject) {
 		// body...
 		  db.all("select * from Company ",function (err,rows) {
 			// body...
 				if(err) return reject (err);
       	 
       	 
       	return resolve(rows)  
 		});
 	})
 }

 module.exports=Company;
    