let man = {
    Name : 'Nabin',
    Lname : 'Bhandari',
    RollNo : 56,
}



//---------------------------------------------------------------------------------
function fun(id , {Name,Lname = 'sapkota' , RollNoo = 69}){     //If the value is in object it will write the default parameter 
console.log(`Id - ${id} has following matches \n Name = ${Name} \n Lname =${Lname} and \n rollno = ${RollNoo}`)
}

fun(12, man)
// >>  Here Lname is present in object so default Parameter 'sapkota'  is overwrite by Bhandari
//  >>  The RollNOO is not the property of man object so the default parameter 69 is assign
//-------------------------------------------------------------------------------------





//================================================================================================================
function anotherfun(id,{Name  , Lname} = {}){  //In here we have assign the empty object to make Name and lname undefine , This will not terminate the program but assign undefine
console.log(`Id - ${id} of Mr . ${Name} ${Lname}`);
}

anotherfun(24)
// >> Here no object is passed as second argument so this will give an error somthing like unable to destruct Fname and Lname from an undefine somthing like that  
// >> To solve these issue we will pass the undefined value by providing or assigning = {} .ie empty object after the destruct place
//================================================================================================================




//-------------------------------------------------------------------------------------
function fun2(id,{Name ='srijana' , Lname='kiju' , RollNo}={}){
console.log(`The id is ${id} of ${Name} ${Lname} ${RollNo}`)
}
fun2(13)

//This is the main example of this source code file
// > when no second parameter is passed but we need to pass an object , then program show error
// >> to remove this error and handle the Program we had assign empty object in function declearation after object destructor i.e {Name , Lname} ={} , from doing this we will get undefine of Name and lName but program will run
//  >> and in this example we have change the undefine of Name Mname and lname by providing default parameter to Name ='srijana', Mname='parsad' , Lname='bhandari'}={} so in this way the undefine will chaged by the defalut paramater

//-------------------------------------------------------------------------------------





//================================================================================================================
function anotherfun2(id,{Name ='srijana', Mname='parsad' , Lname='bhandari'}={}){
    console.log(`The id is ${id} of ${Name} ${Mname} ${Lname}`)
    }
anotherfun2(13 ,man)

/* 
In this example object is passed as second argument so other varialbes will replaced by undefined without assigning  an empty object like {name , roll}={}
other variable should be provided by defalut parameter to avoid undefine
*/

//================================================================================================================
