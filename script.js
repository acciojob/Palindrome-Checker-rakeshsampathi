// complete the given function
function palindrome(str){
const arr=str.split("");
	const revarr=arr.reverse();
	const joinarr=revarr.join("");
	
	if(str===joinarr){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
