
  counter = 10;
  document.onload = setTimeout(timerFunction, 1000);

  function timerFunction() {
    if(counter == 0) { counter = 10; }
    document.getElementById('timer-btn').disabled = true;
    document.getElementById('timer').innerHTML = counter;
    counter--;
    setTimeout(timerFunction, 1000)
  }