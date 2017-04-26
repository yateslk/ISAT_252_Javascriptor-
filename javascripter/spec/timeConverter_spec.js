var TimeConvert = require("../index");
var tc = new TimeConvert();
console.log("tc ", typeof tc.hoursToSeconds);

describe("A program that converts time", () => {

	it("Can convert a number of hours into equivalentt time in seconds", () => { 

		expect(tc.hoursToSeconds(24))
			.toBe("24 hours is equivalent to 86400 seconds."); 
		expect(tc.hoursToSeconds(-1))
			.toBe("Invalid time entry");
		expect(tc.hoursToSeconds(0))
			.toBe("0 hours is equivalent to 0 seconds.");
		expect(tc.hoursToSeconds(8))
			.toBe("8 hours is equivalent to 28800 seconds."); 
		expect(tc.hoursToSeconds(35.5))	
			.toBe("35.5 hours is equivalent to 127800 seconds.");
	});

	it("Can convert a number of seconds into equivalentt time in hours", () => { 

		expect(tc.secondsToHours(0))
			.toBe("Invalid time entry"); 
		expect(tc.secondsToHours(-88))
			.toBe("Invalid time entry"); 
		expect(tc.secondsToHours(8000))
			.toBe("8000 seconds is equal to 2 hour(s) 13 minutes and 20 seconds.");
		expect(tc.secondsToHours(6969))
			.toBe("6969 seconds is equal to 1 hour(s) 56 minutes and 9 seconds.");
		expect(tc.secondsToHours(86400))
			.toBe("86400 seconds is equal to 24 hour(s) 0 minutes and 0 seconds.");	 

	});

}); 