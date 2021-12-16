import a from './a.js'
import png from './assets/1.png'
console.log(a + '1')

const div = document.getElementById('app')
div.innerHTML = `<img src="${png}">`

const button = document.createElement('button')
button.innerText = 'lanjiaz'
button.onclick = ()=>{
const promise = import('./lazy.js')
promise.then((module)=>{
    const fn = module.default   
    fn()
},()=>{})
}
div.appendChild(button)
