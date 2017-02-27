var personMod=require('./models/person'),
    companyMod=require('./models/company');


module.exports = function(app) {

app.get('/api/getAllCompanies',function (req,res) {
		// body...
		companyMod.getAllCompanies()
		.then(function (r) {
			// body...
         
			 res.json(r);
			 res.end();
		});
	});

	app.get('/api/getAllPerson',function (req,res) {
		// body...
		personMod.getAllPerson()
		.then(function (r) {
			// body...
         
			 res.json(r);
			 res.end();
		});
	});

	app.get('/api/getPersonById/:personID',function (req,res) {
		// body...
		personMod.getPersonById(req.params.personID)
		.then(function (r) {
			// body...
         
			 res.json(r);
			 res.end();
		});
	});


app.get('/api/getPersonByName/:personName',function (req,res) {
		// body...
		personMod.getPersonByName(req.params.personName)
		.then(function (r) {
			// body...
         
			 res.json(r);
			 res.end();
		});
	});

app.post('/api/saveNew',function (req,res) {
		// body...
		personMod.getPersonById(req.body.id)
		.then(function  (isExist) {
			// body...
			if(!isExist){
				personMod.saveNew(req.body)
		.then(function (r) {
			// body...
         
			 res.json(r);
			 res.end();
		});
	}
		else {

			personMod.updatePerson(req.body)
		.then(function (r) {
			// body...
         
			 res.json(true);
			 res.end();
		});
	}
		})

		
	});
   
   app.delete('/api/deletePerson/:personID',function (req,res) {
		// body...
		personMod.deletePerson(req.params.personID)
		.then(function (r) {
			// body...
         
			 res.json(r);
			 res.end();
		});
	});
}