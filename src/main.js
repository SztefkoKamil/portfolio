import './sass/style.scss'

window.onload = () => {

  let handler = document.getElementById('text');
  handler.textContent = 'Text added by JavaScript!!';

  handler = document.getElementById('title');
  let title = handler.textContent;
  console.log(title);
  handler.textContent = title.toUpperCase();  

}