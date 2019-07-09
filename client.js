var request = require('request');
var url = 'http://localhost:8080';
var postData = {
    status: " 23 6 0 0 0 0 0 0 0",
    printerMAC: "00:11:62:1b:e2:26",
    statusCode: "200%200k",
    clientAction: null
};
request({
    url: url,
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    json: postData
//  body: JSON.stringify(requestData)
}, function (error, resp, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', resp && resp.statusCode); // Print the response status code if a response was received
    console.log('body:', body);
});



/*request('http://localhost:8080', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});*/
