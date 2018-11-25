var request = require("request");

var options = { method: 'GET',
  url: 'https://junctionev.enstoflow.com/api/v1/chargingPoint',
  headers: 
   { 'Postman-Token': '11739c07-e051-4977-88b7-9945158ca726',
     'Cache-Control': 'no-cache',
     Authorization: 'Basic anVuY3Rpb246anVuY3Rpb24yMDE4',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData: {} 
};
let a;
var stationData = () => {
	request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
  callback(body);
});
}
// class stationData {
// 	static getStationData(callback) {
// 		request(options, function (error, response, body) {
// 	  if (error) throw new Error(error);
// 	//	console.log(JSON.parse(body));
// 		callback(JSON.parse(body))
// 		});
// 		// return a;
// 	}
// }
module.exports.stationData = stationData;