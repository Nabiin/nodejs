const add =(a , b , callback) =>{
  setTimeout((x,y)=>{
       callback(x+y)
  },2000 ,a,b)
}


add (1,4,(val)=>{
    console.log(val)
})