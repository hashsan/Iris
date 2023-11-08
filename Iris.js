/*
small talk Iris
with @import url(https://hashsan.github.io/fujiyama/fujiyama.css?v=3);
  
*/



function make(ask,ary,ans){  
  const render = (ary) =>{
    return ary.map((d,i)=>{
      if(!ans){
        return `<p><input placeholder="${d}"></p>`
      }
      return `<p><input value="${ans[i]}" placeholder="${d}"></p>`
    }).join('\n')    
  }


  var temp=`
<form id="Iris" class="pbox"
      style="position:fixed;right:2rem;top:2rem;">
  <div class="wrap">
    <p class="ask" style="padding-bottom:0.5rem">${ask}</p>
    ${render(ary)}
    <p class="c"><button>submit</button></p>    
  </div>
</form>`


  var el = document.createElement('div')
  el.innerHTML=temp  
  document.body.append(el.children[0])
  el = void 0;
  return document.getElementById('Iris')
}

function isString(str){
  return typeof str === "string";
}

class Iris{
  //el;
  //ask;
  //ary;
  //key;
  //submit
  ///
  constructor(){
    
  }
  ///////
  talk=(ask,ary,key)=>{return new Promise((sol)=>{
    ary = ary||[]
    this.ask = ask
    this.ary = isString(ary)?[ary]:ary
    this.key = key
    
    this.el=this.make()
    //console.log('el?',this.el)    
    this.submit = document.querySelector('#Iris button')
    this.submit.onclick =(e)=>{
      e.preventDefault()
      this.ans = this.inputs().map(d=>d.value)
      //console.log(this.key,this.ans)
      this.setCache(this.key,this.ans)
      this.remove()
      sol(this.ans)
    }
  })}
  getCache=(key)=>{
    if(!key){
      return
    }
    var json = localStorage.getItem(key)
    //console.log(json)
    if(!json){
      return
    }
    return JSON.parse(json)
  }

  
  inputs(){
    var els = document.querySelectorAll('#Iris input')
    return Array.from(els)
  }
  setCache(key,ary){
    if(!key){
      return
    }
    var json = JSON.stringify(ary)
    localStorage.setItem(key,json)
  }
  make(){
    var {ask,ary,key}=this
    return make(ask,ary,this.getCache(key))
  }
  remove(){
    this.el.remove()
  }

}

window.Iris = Iris

/*usage

var iris =new Iris()

iris.talk('tokenとジットハブのレポ',['ghp_token','repo_url'],'xyz')
 .then(d=>{
  
  console.log('ans',d)
  iris.talk(`ghp -> ${d.at(0)}`)
})
*/
