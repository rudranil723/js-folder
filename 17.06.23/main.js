// i am learning it from harry , ya code with harry

    //   1. ways to print in js
        // console.log("hi");
        // console.log("hello world");
        // alert("me");
        // console.log("yo",5+7,"rudy")

    //   2. console api
        // document.write("doc write");
        // console.warn("warning");
        // console.error("this is error");
        // console.assert(4==(6-2));

    // 3. variables in javaS
    // interger variable 
        // var number1= 55;
        // var number2 = 66;
        // console.log(number1+number2);

/* there are two types of data types in javas 
1. primitive data type: undefined, null, number, string, boolean, symbol
2. reference data type: object, arrays
*/
    // 4. data types:
        // boolean variable
        // var isTrue = true;
        // console.log(isTrue);
        // string variable
        // var name = "rudy";
        // console.log(name);
        // number variable
        // var number = 5;
        // console.log(number);
        // object variable
        // var person = {
        //     name: "rudy",
        //     age: 21
        // }
        // console.log(person);
        // console.log(person.name);
        // console.log(person.age);
        // console.log(person["name"]);
        // console.log(person["age"]);

        //undefinded variable 
        // var und= undefined;
        // var und2
        // console.log(und);
        // console.log(und2);

        //5. arrays in javaS
        // var arr = [1,2,3];
        // console.log(arr);

// operators in javaS

// basic operators
// var a = 44;
// var b = 55;
// console.log(a+b, a-b, a*b, a/b);

// assignment operators

// var c= b;
// console.log(c);

// writing funtion

// function avg(a,b){
//     return (a+b)/2;
// }

// c1=avg(2,3);
// console.log(c1);

// c=avg(20,30);
// console.log(c);


// conditional operator

// var age=20;
// if (age>=18){
//     console.log("you are eligible to vote");
// }else{
//     console.log("you are not eligible to vote");
// }

// logical operator
// var a=5;
// var b=6;
// console.log(a>b);
// console.log(a<b);
// console.log(a==b);
// console.log(a!=b);

// ternary operator
// var a=5;
// var b=6;
// console.log(a>b?a:"b");

// loops

// var arr=[1,2,3,4,5,6,7];
// for (var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// sexy way to write for loop
// arr.forEach(function(item){
//     console.log(item);
// })

// we use let to create temp variables it has power only inside the block

// let j=0;
// for (let i=0; i<arr.length; i++){
//     j+=arr[i];
//     console.log(j)
// }

// while loop
// let j=1;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do while loop

// do {
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

// break and continue 
// break
// for (let i=0; i<arr.length; i++){
//     if(arr[i]==5){
//         break;
//     }
//     console.log(arr[i]);
// }

// continue
// for (let i=0; i<arr.length; i++){
//     if(arr[i]==2){
//         continue;
//     }
//     console.log(arr[i]);
// }


// all about arrays

// let myarr=[1,2,3,4,5,6];

//array methords

// console.log(myarr.length);

// myarr.push(8);
// console.log(myarr);

// search array methords in google and use them

// myarr.push(1);
// myarr.sort();
// console.log(myarr);


// string methords in javaS

// let name = "rudy is a good boy";

// console.log(name.length);

// console.log(name.indexof("good"));

// look for more methords in google


// there are lots of string methords available to make life easy


// date funtion
// let mydate= new Date(); new keywords is imp
// console.log(mydate.getDate());
// console.log(mydate.getHours());


// dom manipulation

// when a page is loaded the browser creates a docement object model of the page

// With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

// let elem = document.getElementById("click");
// console.log(elem);

// let elemclass = document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].style.background = "blue";
// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("bg-secondary");
// elemclass[0].classList.remove("text-success");

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);


// finding html elements to modify and work on them
// there are main 3 methords for that:


// The getElementById Method

// document.getElementById("firstcontainer").innerHTML="hello";
// firstcontainer is a id name in the html page which is being targeted

// getting element by tag name
// can also create new tags

// tn=document.getElementsByTagName('button');
// console.log(tn);
// createdElement=document.createElement('p');
// createdElement.innerText="hello";
// tn[0].appendChild(createdElement);

// next is getElementsByClassName

// DocumentFragment.getElementsByClassName("container").createElement("p");
// container is the name of the class that is being targeted here and 
// create element is the funtion that is being worked upon
// p tag is created 


// check in w3school for more dom manipuklation commands


// javascript events

// events in javascript

// evenets are all the things that are happening inside the page


// this is for the funtion clicked in html
// function clicked()
// {
//     console.log('the button was clicked'); 
// }

// window.onload = function(){
//     console.log('page loaded');
// }

// firstcontainer.addEventListener('click', function(){
//     console.log("clicked")
// });

// firstcontainer.addEventListener('mouseover', function(){
//     console.log("mouse over");
// });

// settimer and set inerval in js

// arrow functions

// function sum(a,b)
// {
//     return a+b;
// }
// sum =(a,b)=> a+b;


// settimeout()
// THIS BASICALLY SCHEDULES THE FUNCTION

// logjs =()=>{
//     console.log("hello bussy");
// }
// setTimeout(logjs,5000);

// setinterval

// setInterval(logjs,2000);


// local storage in js

