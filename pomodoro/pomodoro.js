document.addEventListener('DOMContentLoaded', () => {

    const pomodoroTimer = document.querySelector("#pomodoro-timer");

    const startButton = document.querySelector("#pomodoro-start");
    const pauseButton = document.querySelector("#pomodoro-pause");
    const stopButton = document.querySelector("#pomodoro-stop");

    let isClockRunning = false;

    let workSessionDuration = 1500;
    let currentTimeLeftInSession = 1500;
    let breakSessionDuration = 300;

    let updatedWorkSessionDuration;
    let updatedBreakSessionDuration;

    let workDurationInput = document.querySelector('#input-work-duration');
    let breakDurationInput = document.querySelector('#input-break-duration')

    workDurationInput.value = '25';
    breakDurationInput.value = '5';

    let timeSpentInCurrentSession = 0;

    let type = 'Work';

    let isClockStopped = true;

    startButton.addEventListener('click', () => {
        toggleClock();
    })

    stopButton.addEventListener('click', () => {
        toggleClock(true);
    })

    workDurationInput.addEventListener('input', () => {
        updatedWorkSessionDuration = minuteToSeconds(workDurationInput.value)
    })

    breakDurationInput.addEventListener('input', () => {
        updatedBreakSessionDuration = minuteToSeconds(breakDurationInput.value)
    })

    const minuteToSeconds = (mins) => {
        return mins * 60;
    }

    const toggleClock = (reset) => {
        if (reset) {
        stopClock();
        }
        else {
            if (isClockRunning) {
                setUpdatedTimers();
                isClockStopped = false;
            }
            if (isClockRunning == true) {
                clearInterval(clockTimer)
                isClockRunning = false;
            }
            else {
                isClockRunning = true;
                clockTimer = setInterval(() => {
                    stepDown();
                    displayCurrentTimeLeftInSession()
                }, 1000)
                isClockRunning = true;
            }
        }
    }
    
    const displayCurrentTimeLeftInSession = () => {
        const secondsLeft = currentTimeLeftInSession;
        let result = '';
        const seconds = secondsLeft % 60;
        const minutes = parseInt(secondsLeft / 60) % 60;
        let hours = parseInt(secondsLeft / 3600);

        function addLeadingZeroes(time) {
            return time < 10 ? `0${time}` : time;
        }

        if (hours > 10) result += '${hours}:';
        result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
        pomodoroTimer.innerHTML = result.toString();
    }



    const stopClock = () => {

        setUpdatedTimers();
        displaySessionLog(type);
        clearInterval(clockTimer);
        isClockStopped = true;
        isClockRunning = false;
        currentTimeLeftInSession = workSessionDuration;
        displayCurrentTimeLeftInSession();
        type = 'Work';
        timeSpentInCurrentSession = 0;
        
    }

    const stepDown = () => {
        if (currentTimeLeftInSession > 0) {
            currentTimeLeftInSession--;
            timeSpentInCurrentSession++;
        }
        else if (currentTimeLeftInSession === 0) {
            timeSpentInCurrentSession = 0;
            if (type === 'Work') {
                currentTimeLeftInSession = breakSessionDuration;
                displaySessionLog('Work');
                type = 'Break';
                setUpdatedTimers();
            }
            else {
                currentTimeLeftInSession = workSessionDuration;
                type = 'Work';
                setUpdatedTimers();
                displaySessionLog('Break');
            }
        }
    }

    const displaySessionLog = (type) => {
        const sessionsList = document.querySelector('#pomodoro-sessions');
        const li = document.createElement('li');
        let sessionLabel = type;
        let elapsedTime = parseInt(timeSpentInCurrentSession / 60);
        elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';

        const text = document.createTextNode(`${sessionLabel} : ${elapsedTime} min`);
        li.appendChild(text);
        sessionsList.appendChild(li);
    }

    const setUpdatedTimers = () => {
        if (type === 'Work') {
            currentTimeLeftInSession = updatedBreakSessionDuration
                ? updatedBreakSessionDuration
                : workSessionDuration
            workSessionDuration = currentTimeLeftInSession;      
        }
        else {
            currentTimeLeftInSession = updatedBreakSessionDuration
                ? updatedBreakSessionDuration
                : breakSessionDuration
            breakSessionDuration = currentTimeLeftInSession;
        }
    }
})