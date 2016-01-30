'use strict';
var main = document.getElementById('main');

// main.addEventListener('mouseover', function(){
// 	main.style.backgroundColor='red';
// 	// console.log('should be red now');
// 	// console.log(factorial(number));
// })


function myMin (array){
	var smallest=array[0];
	for (var i=1; i<array.length; i++){
		if(array[i]<smallest){
			smallest=array[i];
		}
	}
	return smallest;
}

// console.log(myMin([2,6,4,8,0,-6,3,77,0]));

//Write a function That Says 'sup Snoop' if theya are snoop dog

function myName(obj){
	for (var prop in obj){
		if (prop=='name'&&obj[prop]=='Snoop Dog'){
			return 'sup snoop?!?!'
		}
	}
	return 'no snoopy';
}


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


function reverse(num){
	num=num+'';
	return num.split('').reverse().join('');
}
// console.log(reverse(12345));


// output an array with each letter combo based on a word given

function allCombos(word){
	var combosArray=word.split('');
	var completeArray=[];
	// console.log(combosArray);
	for (var i =0; i<combosArray.length; i++){
		completeArray.push(combosArray[i]);
		var counter=1;
		if (combosArray[i+counter]){
			completeArray.push(combosArray[i]+combosArray[i+1]);
			counter++;
			if (combosArray[i+counter]){
				completeArray.push(combosArray[i]+combosArray[i+1]+combosArray[i+2]);
			}
		}
		
	}
	return completeArray;
}
// console.log(allCombos('dog'));


//order the letters in a string

var word = 'abernathy';
//aabehnrty

function order (string){
	var string1=string;
	var stringArray = [];

	for (var j = string1.length; j>0; j=j-1){
		var max = 0;
		var maxPush = string1.charAt(0);
		for (var i = 0; i<string1.length; i++){
			if (string1.charCodeAt(i)>max){
				max=string1.charCodeAt(i);
				maxPush = string1.charAt(i);
			}
		}
		string1 = string1.replace(maxPush, '');
		// console.log(string1.length);
		// console.log(maxPush);
		stringArray.push(maxPush);
	}
	return stringArray.reverse().join('');
	
}


//write a factorial function

var number = 5;
function factorial(number){
	var sum=number;
	for (var i = number-1; i>0; i=i-1){
		sum=sum*i;
	}
	return sum;
}

// console.log(factorial(number));

//how many of this character in a string

function exists(string, letter){
	var stringArray = string.split('');
	var totalLetter = 0;
	for (var i=0; i<stringArray.length; i++){
		if (stringArray[i]==letter){
			totalLetter=totalLetter+1;
		}
	}
	return 'There are '+totalLetter+' '+letter+'`s in '+string;
}
// console.log(exists('hippopotomus','o'));


//Greatest Common Denominator

function gcd (num1, num2){
	if (num1>num2){
		var greatest=num1;
	}
	else{
		var greatest=num2;
	}
	for (var i = greatest; i >0; i=i-1){
		if (num1%i==0 && num2%i==0){
			return i;
		}
	}
	
}
// console.log(gcd(364,5110));


//lists all numbers between 2 numbers.

function between(arg1, arg2){
	var newArray=[];
	for (var i=arg1+1; i<arg2; i++){
		newArray.push(i);
	}
	return newArray;
}
// console.log(between(1,9));


//exponential function

function exp(num, exponent){
	var total=1;
	for (var i=exponent; i>0; i=i-1){
		total=total*num;
	}
	return total;
}
// console.log(exp(3,3));


//sort an array from biggest to smallest i think

function sortof(array){
	var array1 = array;
	var newArray = [];
	do{
		var index=0;
		var min=array1[0];
		for (var i=1; i<array1.length;i++){
			if (array1[i]<min){
				min=array1[i];
				index=i;
			}
		}
	array1.splice(index,1);
	newArray.push(min);

	} while(array1.length>0);
	return newArray;
	
}
// console.log(sortof([23,45,16,7,24,3,213,54,23]));



function grades(obj){
	var sum=0;
	var objTotes = {};
	for (var prop in obj){
		sum=sum+obj[prop];
	}
	for (var prop in obj){
		var perc = Math.floor((obj[prop]/sum)*100);
		objTotes[prop]=perc+'%';
	}
	return objTotes;
}

// console.log(grades({dave:70,kim:80,doofus:40}));


//FizzBuzz

function fizzbuzz(){
	for (var i=1; i<101; i++){
		if (i%3==0 && i%5==0){
			console.log('fizzbuzz');
		}
		else if (i%5==0){
			console.log('buzz');
		}
		else if (i%3==0){
			console.log('fizz');
		}
		else{
			console.log(i);
		}
	}
}

// console.log(fizzbuzz());


//returns 370 if 3^3 + 7^3 + 0^3 == 370
//likewise, would return 1634 cause 1^4 + 6^4 + 3^4 + 4^4 == 1634
function armstrong(arg){
	var armNums=[];
	for (var i=10; i<arg; i++){
		// console.log('this is i '+i);
		var iString=i+'';
		var iArray=iString.split('');
		var mockTotal=0;
		var exp=iArray.length;
		for (var k=0; k<iArray.length;k++){
			var arraySum=1;
			for (var j=0;j<exp;j++){
				arraySum=arraySum*iArray[k];
				// console.log(arraySum);
			}
			mockTotal=mockTotal+arraySum;
			// console.log(typeof mockTotal);
		}
		if (i==mockTotal){
			armNums.push(i);
		}
		
		
	}
	return armNums;
}

// console.log(armstrong(10000));

// ==============================================================


//sort this object by values: return and array dupel the property name and value
// input {'A':1,'B':2,'C':3}   -----> output [['C',3],['B',2],['A',1]]

function sortDict(dict){
  var newArrayA=[];
  var newArrayB=[];
  var newArrayC=[];
  var counter=0;
  
  for (var a in dict){
    if (isNaN(a)){
      newArrayA[counter]=a;
    }
    else {
       newArrayA[counter]=parseInt(a);
    }
    
    newArrayB[counter]=dict[a];
    
    counter=counter+1;
  }
  for (var j=0; j<newArrayB.length+(counter-1); j++){
    var largest=newArrayB[0];
    var index=0;
    if (newArrayB.length==1){
      newArrayC.push([newArrayA[index],largest]);
    }
    else{
        for (var i=1; i<newArrayB.length; i++){
            
            if (newArrayB[i]>largest){
              largest=newArrayB[i];
              index=i;
            }
            
        }
        newArrayC.push([newArrayA[index],largest]);
        var removed= newArrayB.splice(index,1);
        var removedA= newArrayA.splice(index,1);
    }
        
    
    
  }
  return newArrayC;
}


// console.log(sortDict({1:5,2:2,3:10,6:3,8:8}));


//adds all numbers between two numbers including both

function GetSum( a,b ){
  var sum = 0;
  if (a>b){
    for (var i=b; i<=a; i++){
      sum=sum+i;
    }
  }else{
  	for (var i=a; i<=b; i++){
      sum=sum+i;
    }
  }
  return sum;
}

// console.log(GetSum(8,-1));


// finds all numbers below hMax where the sum of each digit to the argument2 power equals the number

function eqSumPowdig(hMax, exp) {
  var finalArray = [];
  for (var i=2; i<hMax+1; i++){
    var stringNum = i.toString();
    var newArray = stringNum.split('');
    var sum=0;
    for (var j=0; j<newArray.length; j++){
      sum=sum+Math.pow(newArray[j],exp);
    }
    if (sum==i){
      finalArray.push(i);
    }
  }
  return finalArray;
}
// console.log(eqSumPowdig(400, 3));


// Write a function that takes an array and sees if each number has a whole number square root.

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

// console.log(isSquare([1,4,9,16,25,36]));
// console.log(isSquare([4,8,27]));
// console.log('empty: '+isSquare([]));

// validate an image path is an image

function imageFilter(arr) {
	var finalArray=[];
	arr.map((eachElement)=>{
		var possibleArray = eachElement.split('.');
		var last=possibleArray[possibleArray.length-1].toLowerCase();
		if (possibleArray.length==1||possibleArray[0]==''){
			// console.log(possibleArray[1].toLowerCase());
			finalArray.push(null);
		}
		else if (last!=='jpg' && last!=='gif' && last!=='jpeg' && last!=='png' && last!=='exif' && last!=='tiff' && last!=='bmp' && last!=='svg'){
			finalArray.push(null);
		}
		else{
			possibleArray.unshift(eachElement);
			finalArray.push(possibleArray);
		}
	})
	return finalArray;
}

// console.log(imageFilter(['_imgName.png', 'tiff.tiff.pdf']));


// ||possibleArray[1].toLowerCase()!=='png'||possibleArray[1].toLowerCase()!=='jpeg'||possibleArray[1].toLowerCase()!=='gif'||possibleArray[1].toLowerCase()!=='exif'||possibleArray[1].toLowerCase()!=='tiff'||possibleArray[1].toLowerCase()!=='bmp'||possibleArray[1].toLowerCase()!=='svg'

//|| last!=='png' || last!=='jpeg' || last!=='gif' || last!=='exif' || last!=='tiff' || last!=='bmp' || last!=='svg'


//if it is a number doubled, 33 - 66 - 8989, return it. otherwise times by 2

function trickyDoubles(n){
	var h = n.toString();
	var l = h.length/2;
	var j = h.substring(0,l);
	var k = h.substring(l);
	if (h.length==1){
		return n*2;
	}
	else if (j==k){
		return n;
	}
	else{
		return n*2;
	}
}

// console.log(trickyDoubles(2));
// console.log(trickyDoubles(33));
// console.log(trickyDoubles(7878));
// console.log(trickyDoubles(34));
// console.log(trickyDoubles(123123));



//takes 2 diameters of a cup (top and bottom), returns volume;

function cupVolume(d1, d2, height){
	var r1=d1/2;
	var r2=d2/2;
  if (d1==d2){
    return ((Math.PI*((d1/2)*(d1/2))*height).toFixed(2))/1;
  }
  else{
    return ((((1/3)*Math.PI*height)*((r1*r1)+(r1*r2)+(r2*r2))).toFixed(2))/1;
  }
}
// console.log(cupVolume(1,1,1));
// console.log(cupVolume(4,5,6));


//you can see what it does from the console log, but it is failing a test on code wars.

function range(start, count) {
  var newArray=[];
  for (var i=0; i<count; i++){
    newArray.push(start+i);
  }
  
  return newArray;
}

console.log(range(-1,4));

function summ(arr){
	var sum=0;
	for (var j=0; j<arr.length; j++){
		sum = sum + arr[j];
	}
	return sum;
}

console.log(summ([0,1,2]));

