/*======================================================================

IN this code We will learn :-
> object shorthand property
> Object DESTRUCTing
> destructin in object

======================================================================*/

//object shorthand property
let user = 'Nabin Bhandari';
let collage = 'bmc';
let contact = 9812870775


//old way
let myInfo={
    user : user,
    collage : collage,
    contact :contact
}
console.log(myInfo)


//new way
let MYinfo ={
    user ,              //if the property is same as value key then we no need to supply property 
    collage,             //we can directly give value and the property will be taken automatically with value
    contact
}
console.log(MYinfo)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Object DESTRUCTing
let product = {
   Name : 'Samphoo',
   Price : 2,
   brand : 'sunslick',
   Rating : 5
}


//using same name as property name
var {Name , Rating} = product;
console.log(Name , Rating)


//using different name as property name
const {brand:CompanyName , Price : productPrice} = product
console.log(CompanyName,productPrice)


//using default value
var {Name , Rating = 10 , Servicetag = '33EF'} = product;  
//servicetag is not in product object so it will assign 33ef but  but rating will be overwrite by property
console.log(Name , Rating , Servicetag)



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//destructin in object
let Mango = {
    Name : 'Mango',
    Price : 5,
    brand : 'Shovaram sir ',
    Rating : 10
 }


 function Market(tag , {Name , Price: MangoPrice}) {  //in this function decleration we will extract the propoerty by object destruction method
     console.log(`The tag is ${tag} i.e ${Name} Which price is ${MangoPrice}`)
 }

 Market(12,Mango) //Here we passed object we can diretly extract the property from function decleartion
 