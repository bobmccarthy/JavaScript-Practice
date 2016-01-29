'use strict';
var main = document.getElementById('main');

// main.addEventListener('mouseover', function(){
// 	main.style.backgroundColor='red';
// 	// console.log('should be red now');
// 	// console.log(factorial(number));
// })


// function myMin (array){
// 	var smallest=array[0];
// 	for (var i=1; i<array.length; i++){
// 		if(array[i]<smallest){
// 			smallest=array[i];
// 		}
// 	}
// 	return smallest;
// }

// console.log(myMin([2,6,4,8,0,-6,3,77,0]));

//Write a function That Says 'sup Snoop' if theya are snoop dog

// function myName(obj){
// 	for (var prop in obj){
// 		if (prop=='name'&&obj[prop]=='Snoop Dog'){
// 			return 'sup snoop?!?!'
// 		}
// 	}
// 	return 'no snoopy';
// }


// // console.log(myName({name:'Bob',age:27}));
// console.log(myName({name:'Snoop Dog',age:47}));


// function guessNum(){
// 	var counter=0;
// 	var guess=0;
// 	var secretNum = Math.floor(Math.random()*10)+1;
// 	do {
// 		console.log(secretNum);
// 		counter++;
// 		guess = window.prompt('Pick Number')
// 	}
// 	while (guess!=secretNum);
// 	if (counter==1){
// 		console.log('YEAH!, after '+counter+' try!');
// 		main.innerHTML=('<h1>YEAH!</h1>');
// 	}
// 	else{
// 		console.log('Finally, after '+counter+' tries!');
// 	}
	
// };

// var number = 12345;
// function reverse(num){
// 	num=num+'';
// 	console.log(num.split('').reverse().join(''));
// }

// var word = 'dog';
// function allCombos(word){
// 	var combosArray=word.split('');
// 	var completeArray=[];
// 	// console.log(combosArray);
// 	for (var i =0; i<combosArray.length; i++){
// 		completeArray.push(combosArray[i]);
// 		var counter=1;
// 		if (combosArray[i+counter]){
// 			completeArray.push(combosArray[i]+combosArray[i+1]);
// 			counter++;
// 			if (combosArray[i+counter]){
// 				completeArray.push(combosArray[i]+combosArray[i+1]+combosArray[i+2]);
// 			}
// 		}
		
// 	}
// 	return completeArray;
// }

// var word = 'abernathy';
// //aabehnrty

// function order (string){
// 	var string1=string;
// 	var stringArray = [];

// 	for (var j = string1.length; j>0; j=j-1){
// 		var max = 0;
// 		var maxPush = string1.charAt(0);
// 		for (var i = 0; i<string1.length; i++){
// 			if (string1.charCodeAt(i)>max){
// 				max=string1.charCodeAt(i);
// 				maxPush = string1.charAt(i);
// 			}
// 		}
// 		string1 = string1.replace(maxPush, '');
// 		// console.log(string1.length);
// 		// console.log(maxPush);
// 		stringArray.push(maxPush);
// 	}
// 	return stringArray.reverse().join('');
	
// }
// var number = 5;
// function factorial(number){
// 	var sum=number;
// 	for (var i = number-1; i>0; i=i-1){
// 		sum=sum*i;
// 	}
// 	return sum;
// }

// console.log(factorial(number));

// function exists(string, letter){
// 	var stringArray = string.split('');
// 	var totalLetter = 0;
// 	for (var i=0; i<stringArray.length; i++){
// 		if (stringArray[i]==letter){
// 			totalLetter=totalLetter+1;
// 		}
// 	}
// 	return 'There are '+totalLetter+' '+letter+'`s in '+string;
// }
// console.log(exists('hippopotomus','o'));

// function gcd (num1, num2){
// 	if (num1>num2){
// 		var greatest=num1;
// 	}
// 	else{
// 		var greatest=num2;
// 	}
// 	for (var i = greatest; i >0; i=i-1){
// 		if (num1%i==0 && num2%i==0){
// 			return i;
// 		}
// 	}
	
// }
// console.log(gcd(12,18));

// function between(arg1, arg2){
// 	var newArray=[];
// 	for (var i=arg1+1; i<arg2; i++){
// 		newArray.push(i);
// 	}
// 	return newArray;
// }
// console.log(between(1,9));


// function exp(num, exponent){
// 	var total=1;
// 	for (var i=exponent; i>0; i=i-1){
// 		total=total*num;
// 	}
// 	return total;
// }
// console.log(exp(3,3));


// function sortof(array){
// 	var array1 = array;
// 	var newArray = [];
// 	do{
// 		var index=0;
// 		var min=array1[0];
// 		for (var i=1; i<array1.length;i++){
// 			if (array1[i]<min){
// 				min=array1[i];
// 				index=i;
// 			}
// 		}
// 	array1.splice(index,1);
// 	newArray.push(min);

// 	} while(array1.length>0);
// 	return newArray;
	
// }
// console.log(sortof([23,45,16,7,24,3,213,54,23]));



// function grades(obj){
// 	var sum=0;
// 	var objTotes = {};
// 	for (var prop in obj){
// 		sum=sum+obj[prop];
// 	}
// 	for (var prop in obj){
// 		var perc = Math.floor((obj[prop]/sum)*100);
// 		objTotes[prop]=perc+'%';
// 	}
// 	return objTotes;
// }

// console.log(grades({dave:70,kim:80,doofus:40}));

// function fizzbuzz(){
// 	for (var i=1; i<101; i++){
// 		if (i%3==0 && i%5==0){
// 			console.log('fizzbuzz');
// 		}
// 		else if (i%5==0){
// 			console.log('buzz');
// 		}
// 		else if (i%3==0){
// 			console.log('fizz');
// 		}
// 		else{
// 			console.log(i);
// 		}
// 	}
// }

// console.log(fizzbuzz());


//returns 370 if 3^3 + 7^3 + 0^3 == 370
//likewise, would return 1634 cause 1^4 + 6^4 + 3^4 + 4^4 == 1634
// function armstrong(arg){
// 	var armNums=[];
// 	for (var i=10; i<arg; i++){
// 		// console.log('this is i '+i);
// 		var iString=i+'';
// 		var iArray=iString.split('');
// 		var mockTotal=0;
// 		var exp=iArray.length;
// 		for (var k=0; k<iArray.length;k++){
// 			var arraySum=1;
// 			for (var j=0;j<exp;j++){
// 				arraySum=arraySum*iArray[k];
// 				// console.log(arraySum);
// 			}
// 			mockTotal=mockTotal+arraySum;
// 			// console.log(typeof mockTotal);
// 		}
// 		if (i==mockTotal){
// 			armNums.push(i);
// 		}
		
		
// 	}
// 	return armNums;
// }

// console.log(armstrong(10000));

// ==============================================================


// function sortDict(dict){
//   var newArrayA=[];
//   var newArrayB=[];
//   var newArrayC=[];
//   var counter=0;
  
//   for (var a in dict){
//     if (isNaN(a)){
//       newArrayA[counter]=a;
//     }
//     else {
//        newArrayA[counter]=parseInt(a);
//     }
    
//     newArrayB[counter]=dict[a];
    
//     counter=counter+1;
//   }
//   for (var j=0; j<newArrayB.length+(counter-1); j++){
//     var largest=newArrayB[0];
//     var index=0;
//     if (newArrayB.length==1){
//       newArrayC.push([newArrayA[index],largest]);
//     }
//     else{
//         for (var i=1; i<newArrayB.length; i++){
            
//             if (newArrayB[i]>largest){
//               largest=newArrayB[i];
//               index=i;
//             }
            
//         }
//         newArrayC.push([newArrayA[index],largest]);
//         var removed= newArrayB.splice(index,1);
//         var removedA= newArrayA.splice(index,1);
//     }
        
    
    
//   }
//   return newArrayC;
// }


// console.log(sortDict({1:5,2:2,3:10,6:3,8:8}));


// function GetSum( a,b ){
//   var sum = 0;
//   if (a>b){
//     for (var i=b; i<=a; i++){
//       sum=sum+i;
//     }
//   }else{
//   	for (var i=a; i<=b; i++){
//       sum=sum+i;
//     }
//   }
//   return sum;
// }

// console.log(GetSum(8,-1));




// function eqSumPowdig(hMax, exp) {
//   var finalArray = [];
//   for (var i=2; i<hMax+1; i++){
//     var stringNum = i.toString();
//     var newArray = stringNum.split('');
//     var sum=0;
//     for (var j=0; j<newArray.length; j++){
//       sum=sum+Math.pow(newArray[j],exp);
//     }
//     if (sum==i){
//       finalArray.push(i);
//     }
//   }
//   return finalArray;
// }
// console.log(eqSumPowdig(400, 3));


var isSquare = function(arr){
  var counter=0;
  if (arr[0]==undefined){
    return undefined;
  }
  else{
    arr.map((eachNum)=>{
      for (var i=0; i<1000; i++){
        if (i*i==eachNum){

          counter=counter+1;
          
        }
      }
    });
    if (arr.length == counter){
      return true;
    }
    else{
      return false;
    }
  }
}

console.log(isSquare([1,4,9,16,25,36]));
console.log(isSquare([4,8,27]));
console.log('empty: '+isSquare([]));
















  
 