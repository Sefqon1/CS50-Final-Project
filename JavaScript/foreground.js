document.addEventListener('DOMContentLoaded', () => {

    const timer = document.querySelector('#timer');


    const startBtn = document.querySelector('#start-button');
    const pauseBtn = document.querySelector('#pause-button');
    const stopBtn = document.querySelector('#stop-button');

    const audio = document.querySelector('#audio');
    audio.loop = false;


    let isRunning = false;

    let workTime = 1500;
    let timeLeft = 1500;
    let breakTime = 300;
    
    let updatedWorkTime;
    let updatedBreakTime;

    let workTimeInput = document.querySelector('#work-time');
    let breakTimeInput = document.querySelector('#break-time');

    workTimeInput.value = '25';
    breakTimeInput.value = '5';

    let sessionTime = 0;

    let type = 'Work';

    let isStopped = true;

    startBtn.addEventListener('click', () => {
        toggleClock();
    })

    pauseBtn.addEventListener('click', () => {
        toggleClock();
    })

    stopBtn.addEventListener('click', () => {
        toggleClock(true)
    })

    workTimeInput.addEventListener('input', () => {
        updatedWorkTime = convert(workTimeInput.value);
    })

    breakTimeInput.addEventListener('input', () => {
        updatedBreakTime = convert(breakTimeInput.value);
    })

    const convert = (mins) => {
        return mins * 60;
    }

    const toggleClock = (reset) => {
        if (reset) {
            stopClock();
        }
        else {
            if (isStopped) {
                updateTime();
                isStopped = false;
            }
            if (isRunning === true) {
                clearInterval(clockTimer)
                isRunning = false;
            }
            else {
                isRunning = true;
                clockTimer = setInterval(() => {
                    stepDown();
                }, 1000)
                isRunning = true;
            }
        }
    }

    const displayTimeLeft = () => {
        const secondsLeft = timeLeft;
        let result = '';
        const seconds = secondsLeft % 60;
        const minutes = parseInt(secondsLeft / 60) % 60;
        let hours = parseInt(secondsLeft / 3600);

        function addZeroes(time) {
            return time < 10 ? `0${time}` : time;
        }

        if (hours > 10) result = `${hours}:`;
        result += `${addZeroes(minutes)}:${addZeroes(seconds)}`;
        timer.innerHTML = result.toString();
    }

    const stopClock = () => {
        updateTime();
        displaySessionType(type);
        clearInterval(clockTimer);
        isStopped = true;
        isRunning = false;
        timeLeft = workTime;
        displayTimeLeft();
        type= 'Work';
        sessionTime = 0;
        }

    const stepDown = () => {
        if (timeLeft > 0) {
            timeLeft--;
            sessionTime++;
        }
        else if (timeLeft === 0) {
            audio.play();
            sessionTime = 0;
            if (type === 'Work') {
                timeLeft = breakTime;
                displaySessionType('Work');
                type = 'Break';
                updateTime();
            }
            else {
                timeLeft = workTime;
                type = 'Work';
                updateTime();
                displaySessionType('Break');
            }
        }
    }
    
    const displaySessionType = (type) => {
        const sessionList = document.querySelector('#pomodoro-sessions');
        const li = document.createElement('li');
        let sessionLabel = type;
        let timePassed = parseInt(sessionTime / 60);
        timePassed = timePassed > 0 ? timePassed : '<1';

        const text = document.createTextNode(`${sessionLabel} : ${timePassed}`);
        li.appendChild(text);
        sessionList.appendChild(li);

    }

    const updateTime = () => {
        if (type === 'Work') {
            timeLeft = updatedWorkTime 
            ? updatedWorkTime
            : workTime;

        timePassed = timeLeft 
        }
        else {
            timeLeft = updatedBreakTime
            ? updatedBreakTime
            : breakTime;

        timePassed = timeLeft;
        }
    }

})