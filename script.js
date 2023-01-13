// complete the given function

function palindrome(str){
const arr=str.split("");
	var len=arr.length;
	for(var i=0;i<len/2;i++){
		if(arr[i]!=arr[len-1-i]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
