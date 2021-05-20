chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.create({
        url: chrome.runtime.getURL("/html/popup.html"),
        type: "popup",
        height: 380,
        width: 205
    });
});

    document.addEventListener('DOMContentLoaded', () => {

        //Get all necessary values from the DOM
        const timer = document.querySelector('#timer');
        const typeField = document.querySelector('#type');

        const startBtn = document.querySelector('#start-button');
        const pauseBtn = document.querySelector('#pause-button');
        const stopBtn = document.querySelector('#stop-button');

        const audio = document.querySelector('#audio');
        audio.loop = false;

        //Init all variables needed within the following functions
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

        //add listeners to the buttons to start clock
        startBtn.addEventListener('click', () => {
            toggleClock();
        })

        pauseBtn.addEventListener('click', () => {
            toggleClock();
        })

        stopBtn.addEventListener('click', () => {
            toggleClock(true)
        })

        //Add listeners to input fields so changes are noticed
        workTimeInput.addEventListener('input', () => {
            updatedWorkTime = convert(workTimeInput.value);
        })

        breakTimeInput.addEventListener('input', () => {
            updatedBreakTime = convert(breakTimeInput.value);
        })

        //Converts the minutes into seconds 
        const convert = (mins) => {
            return mins * 60;
        }

        //Toggles whether the clock is running or not

        const toggleClock = (reset) => {
            //If input => stop the clock.
            if (reset) {
                stopClock();
            }
            else {

                //Checks whether isStopped is true if yes, update the time and set to false
                if (isStopped) {
                    updateTime();
                    isStopped = false;
                }
                //Checks whether isRunning is true if yes, clear the intervall and isRunning = false
                if (isRunning === true) {
                    clearInterval(clockTimer)
                    isRunning = false;
                }
                else {
                    //If false, set to true, start interval
                    isRunning = true;
                    clockTimer = setInterval(() => {
                        stepDown();
                        displayTimeLeft();
                        displayType();
                    }, 1000)
                    isRunning = true;
                }
            }
        }

        //Converts the time left into a displayable format and then displays it.
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

        //Gets current type and displays it.
        const displayType = () => {
            let currentType = '';
            currentType = type;
            typeField.innerHTML = currentType.toString();
        }

        //Called when toggleClock has input. 
        //Updates the time, displays the session type in a list, clears interval as well as all variables.
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

        //Called by the intervall every 1000 milliseconds. 
        //Checks how much time is left. If there is, it deducts from it and adds to the sessionTime
        //If not, it plays audio and sets sessiontime to 0
        //It the checks which type it was and sets it to the opposite one and updates the type and time
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
        
        //Displays session type in list
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
            //If type = work then it checks whether the timeLeft is hte same as the updated time
            //If not then it updates it, if yes, it uses the original value
            if (type === 'Work') {
                timeLeft = updatedWorkTime 
                ? updatedWorkTime
                : workTime;

            timePassed = timeLeft 
            }
            //Same as work but with break time lol
            else {
                timeLeft = updatedBreakTime
                ? updatedBreakTime
                : breakTime;

            timePassed = timeLeft;
            }
        }

    })