const todoitems=[{
  name:'harika',
  date:'01-06-2006',
}];
rendertodolist();
function rendertodolist(){
  let todoHTML='';
  for(i=0;i<todoitems.length;i++)
  {
    html=`<p>${todoitems[i].name}</p><p>${todoitems[i].date}</p><button class="delete-button js-delete" onclick="todoitems.splice(${i},1);
    rendertodolist();">Delete</button>`;
    todoHTML+=html;
  }

  document.querySelector('.js-contain').innerHTML=todoHTML;
  
}
  
function additem(){
  const searchtext=document.querySelector('.js-text');
   name=searchtext.value;
   const searchdate=document.querySelector('.js-date');
   date=searchdate.value;
   todoitems.push({
    name,
    date
   });
   searchtext.value='';
   searchdate.value='';
   rendertodolist();
}
document.body.addEventListener('keydown',(event)=>{
if(event.key==='Enter')
  {
    additem();
  }
});