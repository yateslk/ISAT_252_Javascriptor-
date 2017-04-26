
class TimeConvert
{	
	/*
	This function converts number of hours into an equivalent number of seconds. 
	
	@ param hours    The number of hours to convert into seconds.
	@ return result  A string output of the equivalent number of seconds 
	*/
	hoursToSeconds(hours)
	{
		//declartation of an array
		var textToPrint = ['This', 'function', 'will', 'convert', 'a', 'time', 'in', 'hours', 'to', 'a', 'time', 'in', 'seconds'];

		//loop trough array
		for(let i =0; i < textToPrint.length; i++)
		{
			process.stdout.write(textToPrint[i] + " ");
		}
		console.log();

		//declartaion of constants
		const NUMBER_OF_SECONDS_IN_MINUTE = 60; 
		const NUMBER_OF_MINUTE_IN_HOUR = 60; 

		//declaration of variables 
		var numberOfSeconds; 
		var result;

		//If the number of hours is less than 0, set the result to the string Invalid time entry. 
		//Else convert the number of hours into an equivalent number of seconds. 
		if(hours < 0)
		{
			result = "Invalid time entry"; 
		}
		else
		{
			console.log(hours + " hours will be converted into an equivalent time in seconds."); 
			numberOfSeconds = hours * NUMBER_OF_MINUTE_IN_HOUR * NUMBER_OF_SECONDS_IN_MINUTE; 
			result = hours + " hours is equivalent to " + numberOfSeconds + " seconds."; 
		}

		console.log(result);
		return result; 
	}

	/*
	This function converts a number of seconds into an equivalent number of hours minutes and seconds

	@ param numberOfSeconds      The number of seconds to convert to hours
	@ return result              A string output of the equivalent time in hours, minutes, and seconds 
	*/
	secondsToHours(numberOfSeconds)
	{
		//declartation of an array
		var textToPrint = ['This', 'function', 'will', 'convert', 'a', 'time', 'in', 'seconds', 'to', 'a', 'time', 'in', 'hours'];

		//loop trough array
		for(let i =0; i < textToPrint.length; i++)
		{
			process.stdout.write(textToPrint[i] + " ");
		}
		console.log();

		//declaration of constants
		const NUMBER_OF_SECONDS_IN_MINUTE = 60; 
		const NUMBER_OF_MINUTE_IN_HOUR = 60; 

		//declaration of variables
		var hours; 
		var remainingMin; 
		var minutes; 
		var seconds; 
		var result;

		//If the number of hours is less than 0, set the result to the string Invalid time entry. 
		//Else convert the number of hours into an equivalent number of seconds.
		if(numberOfSeconds < 0 || numberOfSeconds === 0)
		{
			result = "Invalid time entry"; 
		}
		else
		{
			console.log(numberOfSeconds + " seconds will be converted into an equivalent time in hours."); 

			//determines number of hours in certain number of seconds
			hours = Math.floor(numberOfSeconds / (NUMBER_OF_SECONDS_IN_MINUTE * NUMBER_OF_MINUTE_IN_HOUR));  
			//determines remaining value after converting seconds into hours
			remainingMin = numberOfSeconds % (NUMBER_OF_SECONDS_IN_MINUTE * NUMBER_OF_MINUTE_IN_HOUR); 
			//from remaining value, determines the number of minutes left
			minutes = Math.floor(remainingMin / NUMBER_OF_SECONDS_IN_MINUTE); 
			//from remaining value, determines the nukber of seconds left
			seconds = remainingMin % NUMBER_OF_SECONDS_IN_MINUTE; 

			result = numberOfSeconds + " seconds is equal to " + hours + " hour(s) " + minutes + " minutes and " + seconds + " seconds."
		}

		console.log(result);
		return result; 
	}
}	


module.exports = TimeConvert; 


