const server = require('express')();
const bodyParser = require('body-parser');

var doneJob = false;

var printedData = 'Hello world!\n\n\n \x1b\x62\x04\x03\x03\x04\x01\x02\x03\x04\x1e';


/**
 * Express setup
 */
// Middleware
server.use(bodyParser.json());

// 200 AOK base route
server.get('/', function (req, res)
{
	res.sendStatus(200);
});
server.post('/', function (req, res)
{
	console.log(req);
	res.sendStatus(200);
});

// Start server
server.listen(8080, function (err)
{
	if (err) throw err

	console.log('Server listing at http://localhost:8080');
});


/**
 * CloudPRNT Endpoints
 */
// poll
server.post('/cloudprint', function (req, res)
{
	var errorMsg;

	if (!req.body) errorMsg = 'body is required';
	else if (!req.body.printerMAC) errorMsg = 'printerMAC is required';

	if (errorMsg) res.status(400).send(errorMsg);
	else
	{
		var printerMAC = req.body.printerMAC.toUpperCase();
		console.log(printerMAC + ' POST');

		res.status(200).send(JSON.stringify(
		{
			"jobReady": !doneJob,
			"mediaTypes": ['text/plain'],
			"deleteMethod": "DELETE"
		}));
	}
});

// nextJob
server.get('/cloudprint', function (req, res)
{
	var errorMsg;

	if (!req.query) errorMsg = 'query is required';
	else if (!req.query.mac) errorMsg = 'printer MAC is required';

	if (errorMsg) res.status(400).send(errorMsg);
	else
	{
		var printerMAC = req.query.mac.toUpperCase();
		console.log(printerMAC + ' GET');

		res.status(200).type('text/plain').send(printedData);
	}
});

// completeJob
server.delete('/cloudprint', function (req, res)
{
	var errorMsg;

	if (!req.query) errorMsg = 'query is required';
	else if (!req.query.mac) errorMsg = 'printer MAC is required';

	if (errorMsg) res.status(400).send(errorMsg);
	else
	{
		var printerMAC = req.query.mac.toUpperCase();
		console.log(printerMAC + ' DELETE');

		doneJob = true;

		res.sendStatus(200);
	}
});