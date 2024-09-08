window.onload = () => {
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');   
  
    const container = document.querySelector('.container-stopwatch');   
  
    let timer = null;
    let intervalId = null;
  
    const formatTime = (time) => {
      return Object.values(time).map(value => value.toString().padStart(2, '0')).join(':');
    };
  
    const setTimer = (newTimer) => {
      timer = newTimer;
      timerDisplay.textContent = formatTime(timer);
    };
  
    const start = () => {
      if (intervalId) return;
  
      setTimer({ seconds: 0, minutes: 0, hours: 0 });
      container.classList.remove('red', 'silver');
      container.classList.add('green');
  
      intervalId = setInterval(() => {
        timer.seconds++;
        if (timer.seconds === 60) {
          timer.seconds = 0;
          timer.minutes++;
        }
        if (timer.minutes === 60) {
          timer.minutes = 0;
          timer.hours++;   
  
        }
        setTimer(timer);   
  
      }, 1000);
    };
  
    const stop = () => {
      clearInterval(intervalId);
      intervalId = null;
      container.classList.remove('green', 'silver');
      container.classList.add('red');
    };
  
    const reset = () => {
      stop();
      setTimer({ seconds: 0, minutes: 0, hours: 0 });
      container.classList.remove('red', 'green');
      container.classList.add('silver');
    };
  
    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);
    resetButton.addEventListener('click', reset);   
  
}
    