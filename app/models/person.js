 var sqlite3 = require('sqlite3').verbose(),
   path = require('path'),
   db = new sqlite3.Database(path.join(__dirname, '../..','db', 'testdb')),
   Person={};

 Person.saveNew=function (newPerson) {
 	return new Promise (function  (resolve,reject) {
		// body...
		var stmt = db.prepare("INSERT INTO Person (id,companyId,name) VALUES (?,?,?)");

		stmt.run(newPerson.id,(newPerson.company)?newPerson.company.id:1,newPerson.name,function (err,r) {
       	// body...
       	if(err) return reject (err);
       	stmt.finalize();
       	 
       	return resolve(this)  	
       });

	})	 
 }

 Person.updatePerson=function (newPerson) {
 	return new Promise (function  (resolve,reject) {
		// body...
		if(!newPerson.id) reject("not a valid object");
		else if(!isNaN(newPerson.id)){
			var stmt = db.prepare("UPDATE Person set name=? ,companyId=? where id=?");

			stmt.run(newPerson.name ,newPerson.companyId,newPerson.id,function (err,r) {
       	// body...
       	if(err) return reject (err);
       	stmt.finalize();
       	 
       	return resolve(true)  	
       });
		}
	})	 
 }
 
 Person.deletePerson=function (personID) {
 	return new Promise (function  (resolve,reject) {
		// body...
		if(!personID) reject("not a valid object");
		else if(!isNaN(personID)){
			var stmt = db.prepare("delete from Person  where id=?");

			stmt.run(personID,function (err,r) {
       	// body...
       	if(err) return reject (err);
       	stmt.finalize();
       	 
       	return resolve(this)  	
       });
		}
	})	 
 } 

 Person.getPersonById=function (personID) {
 	// body...
 	return new Promise(function (resolve,reject) {
 		// body...
 		if(!personID) reject("not a valid object");
 		db.get("select * from Person  where id like ?",personID,function (err,r) {
       	// body...
       	if(err) return resolve (null);
       	 
       	 
       	return resolve(r)  	 
 	})
 })
 }

 
 Person.getPersonByName=function (personName) {
 	// body...
 	return new Promise(function (resolve,reject) {
 		// body...
 		if(!personName) reject("not a valid object");
 		 
 	  db.get("select * from Person  where name like ?",personName,function (err,r) {
       	// body...
       	if(err) return reject (err);
       	 
       	 
       	return resolve(r)  	
        
 		 
 	})
 })
 }

 Person.getAllPerson=function () {
 	// body...
 	return new Promise (function  (resolve, reject) {
 		// body...
 		  db.all("select * from Person ",function (err,rows) {
 			// body...
 				if(err) return reject (err);
       	 
       	 
       	return resolve(rows)  
 		});
 	})
 }

 module.exports=Person;