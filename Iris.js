/*
for fujiyama.js css
*/

var Iris={}
Iris.chank=()=>fn.rkana(16);
Iris.pointernone=(flg)=>{
  const cls ='pointer-none'
  if(flg){
    return document.body.classList.add(cls)
  }
  return document.body.classList.remove(cls)
}
Iris.input=async(ask,value)=>{
  
  Iris.pointernone(true)
  
  if(_.isString(value)){
    return await Iris.input_text(ask,value)
  }
  if(_.isArray(value)){
    return await Iris.input_select(ask,value)
  }  
  return await Iris.input_message(ask)  
}




/////////
Iris.input_text=(ask,value)=>{return new Promise((sol,_)=>{
  var id =Iris.chank()
  var temp=`
<div class="iris">
 <p>${ask}</p>
 <input id="${id}" type="text" value="${value}">
</div>
`
  var el = document.createElement('div')
  el.innerHTML=temp
  document.body.append(el)
  var input=fn.g(id)

  input.focus() ///

  input.onkeydown = e =>{
    if(!(e.which === 13))return
    var value = input.value
    
    el.remove()
    Iris.pointernone(false) ///    
    sol(value)
  }
})}

///////
Iris.input_message=(ask)=>{return new Promise((sol,_)=>{
  var id_y =Iris.chank()
  var id_n =Iris.chank()
  var temp=`
<div class="iris">
 <p>${ask}</p>
 <p class="c"><a id="${id_y}">yes</a> <a id="${id_n}">no</a></p>
</div>
`
  var el = document.createElement('div')
  el.innerHTML=temp
  document.body.append(el)
  var yes=fn.g(id_y)
  //
  yes.focus() ///
  //
  yes.onclick=()=>{
    
    el.remove()
    Iris.pointernone(false) ///    
    sol(true)
    
  }
  var no=fn.g(id_n)
  no.onclick=()=>{
    
    el.remove()
    Iris.pointernone(false) ///    
    sol(false)
  }

})}
///////
/////////
Iris.input_select=(ask,value)=>{return new Promise((sol,_)=>{
  var id =Iris.chank()
  const print=(ary)=>{
    return ary.map(d=>{
      return `<option value="${d}">${d}</option>`      
    }).join('\n')
  }
  var temp=`
<div class="iris">
 <p>${ask}</p>
  <select id="${id}" name="${id}" size="4">
   ${print(value)}
  </select> 
</div>
`
  var el = document.createElement('div')
  el.innerHTML=temp
  document.body.append(el)
  var input=fn.g(id)

  input.focus() ///

  input.onkeyup =function onkeyup(e) {
    e.preventDefault();
    e.stopPropagation();    
    if(!(e.which === 13))return
    const num = input.selectedIndex
    const value = input.options[num].value;
    
    el.remove()
    Iris.pointernone(false) ///        
    
    sol(value)      
  }  
})}

/*
//test();
async function test(){

  await Iris.input('hello world','number')
    .then(d=>{
    console.log(d)
  })

  await Iris.input('hello world, is right word?')
    .then(d=>{
    console.log(d)
  })

  await Iris.input('selection test?',["apple","grape","lemon"])
    .then(d=>{
    console.log(d)
  })

}
*/
