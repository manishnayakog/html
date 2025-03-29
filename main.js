// function sum(a b) {
//    let totalsum = a + b;
//        return totalsum; 
// }

// let ans = sum(3,4);
// let ans2 = sum(4,5);
// let ans3 = sum(6,4);


// console.log(ans);
// console.log(ans2);
// console.log(ans3)

// function canvote (age){
//     if (age > 18) {
//         return true;
//      } else{
//         return false;
//      }
// }
//  let ans = canvote(19);

// console.log(ans); 

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
