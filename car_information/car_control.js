import HMKit from 'hmkit';
const socketIo = require("socket.io");

const hmkit = new HMKit(
    "dGVzdLAsOnwFSnMlMDmNJ7Uc1FCk0LSuqYmh/9mCuKyZoC/lAEAfVEk0y9Cw9rp1yshrdr+NIM4khlMXHm91v+wUCcK9R9jiV+63tzRyQ8IcRw2YAF5L8RV9VQZGmtC+TI7tiDI50fxAuvTqwqz17mT6ltas4THHr4hKkGvDQQwFsb7WlXcjFx/N2JJHN5ooIetFsNoQeWha",
    "VarJFEOre8bX/3mpVHdGJ1FEpAaj3v4iXi7kzDwlsk4="
);

var appfunc = async function appfunc() {
	const accessCertificate = await hmkit.downloadAccessCertificate(
	  "1fc75581-2a1c-4151-990a-7233624778b2"
	);
	//console.log(accessCertificate);
	try {
		const response = await hmkit.telematics.sendCommand(
		  accessCertificate.getVehicleSerial(),
		  // hmkit.commands.EngineCommand.turnOn()
		  // hmkit.commands.ChargingCommand.getChargeState(),
		  hmkit.commands.VehicleLocationCommand.getLocation()
		);
	console.log('on');
		console.log('Bytes')
		console.log(response.bytes());
		console.log('Parse')
		console.log(response.parse());
	  } catch (e) {
		console.log(e);
	  }
	}
	

module.exports.appfunc = appfunc;