const bar=document.getElementById('bar')
const clos=document.getElementById('clos')
const nav=document.getElementById('navber')

if(bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}
if(clos){
    clos.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}