/*
small talk Iris
with @import url(https://hashsan.github.io/fujiyama/fujiyama.css?v=3);


v1 window add
v1.1 disabled to cool
v2 position:fixed the lost
*/

class Iris{
  ans;  
  talk=(ask,sample,key)=>{return new Promise(sol=>{
    const fn={}
    fn.q=d=>document.querySelector(d)
    const $=this

    $.query = '#Iris'
    $.q_ask = $.query+' .ask'
    $.q_ans = $.query+' .ans'
    $.q_ok  = $.query+' .ok'
    $.el = $.make(ask,sample,key)
    //console.log($.background)

    fn.q($.q_ok).onclick = (e) =>{
      e.preventDefault();//form submit block
      $.ans = fn.q($.q_ans).value
      $.remove()
      $.set(key,$.ans)
      sol($.ans)
    }

  })}

  get=(key)=>{
    if(!key){
      return
    }
    return localStorage.getItem(key)
  }
  //////////////
  set(key,ans){
    if(!key){
      return
    }
    localStorage.setItem(key,ans)
  }
  make(ask,sample,key){
    var temp=`
<form id="Iris" class="pbox" style="position:fixed;top:2rem;right:2rem;">
  <p class="ask">${ask}</p>
  <p><input class="ans" type="text"
  placeholder="${sample||''}"
  value="${this.get(key)||''}"
  ${sample?'':'disabled'}
  ></p>
  <p class="c"><button class="ok">submit</button></p>
</form>
    `.trim()
    var el = document.createElement('div')
    el.innerHTML=temp
    el = el.children[0];
    document.body.append(el)
    return el;
  }
  remove(){
    this.el.remove()
  }
}

window.Iris = Iris //

