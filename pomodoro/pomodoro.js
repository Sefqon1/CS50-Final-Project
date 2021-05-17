document.addEventListener('DOMContentLoaded', () => {

    const pomodoroTimer = document.querySelector("#pomodoro-timer");

    const startButton = document.querySelector("#pomodoro-start");
    const pauseButton = document.querySelector("#pomodoro-pause");
    const stopButton = document.querySelector("#pomodoro-stop");

    startButton.addEventListener('click', () => {
        toggleClock();
    })

    pauseButton.addEventListener('click', () => {
        toggleClock();
    })

    stopButton.addEventListener('click', () => {
        toggleClock(true);
    })

    let isClockRunning = false;

    let workSessionDuration = 1500;
    let currentTimeLeftInSession = 1500;

    let breakSessionDuration = 300;

    let type = 'Work';


    const toggleClock = (reset) => {
        if (reset) {
            stopClock();
        }

        else {
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

})

const stopclock = () => {
    clearInterval(clockTimer);
    isClockRunning = false;
    currentTimeLeftInSession = workSessionDuration;
    displayCurrentTimeLeftInSession();
}

const stepDown = () => {
    if (currentTimeLeftInSession > 0) {
        currentTimeLeftInSession--;
    }
    else if (currentTimeLeftInSession === 0) {
        if (type === 'Work') {
            currentTimeLeftInSession = breakSessionDuration;
            displaySessionLog('Work');
            type = 'Break';
        }
        else {
            currentTimeLeftInSession = workSessionDuration;
            type = 'Work';
            displaySessionLog('Break');
        }
    }
}