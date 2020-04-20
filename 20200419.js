// Black Jack game
function count(deck) {
	return deck.reduce((acc, curr) => acc + (curr<=6 ? 1: curr<=9? 0 : -1), 0)
}

function AlphabetSoup(str) {
	return str.split("").sort().join("")
}

class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

// Write the classes for StandardPlan and PremiumPlan here!
class StandardPlan extends BasicPlan {
		static hasHD = true;
		static numOfDevices = 2;
    static price = "$12.99"
}

class PremiumPlan extends StandardPlan {
	  static hasUHD = true;
		static numOfDevices = 4;
		static price = "$15.99"
}
