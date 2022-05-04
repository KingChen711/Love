let btNo = document.getElementById('btNo');
let btYes = document.getElementById('btYes');
let btYes2 = document.getElementById('btYes-2');
let btYes3 = document.getElementById('btYes-3');
let btYes4 = document.getElementById('btYes-4');
let btYes5 = document.getElementById('btYes-5');
let buttons = [btYes, btYes2, btYes3, btYes4, btYes5];


//handler No button
btNo.addEventListener('click', () => {
  document.querySelector(".page").innerHTML = '<h1>Đồ Dối Trá</h1>';
})


//handler Yes button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {

    //hidden clicked yes button
    buttons[i].style.cssText = 'opacity: 0 ;cursor:default';

    //display new yes button
    let indexDisplayButton = i < buttons.length - 1 ? i + 1 : 0;
    buttons[indexDisplayButton].style.cssText = 'opacity: 1 ;cursor:pointer';

  });
}