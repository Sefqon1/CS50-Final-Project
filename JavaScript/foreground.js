document.addEventListener('DOMContentLoaded', () => {

    const timeLeftDisplay = document.querySelector('#timeLeft');
    const whatTimeDisplay = document.querySelector('#whatTime');
    const buttonText = document.querySelector("#button");
    const startBtn = document.querySelector('#startButton');


    var e = document.getElementById("wTime");
    var wTime = e.value;
    timeLeftDisplay.innerHTML = wTime;

    var f = document.getElementById("bTime");
    var bTime = f.value;

    function workCountDown () {

            whatTimeDisplay.innerHTML = "Time to work!"

            timeLeft = wTime;
            setInterval(function(){
                if(timeLeft <= 0) {
                    soundPlay();
                    clearInterval(timeLeft = 0)
                    whatTimeDisplay.innerHTML = "Time for a break!"
                    buttonText.innerHTML = "Start break"
                }

                timeLeftDisplay.innerHTML = timeLeft;
                timeLeft -= 1;
            }, 6000)
    }

    /*Start when break button is pressed*/
    function breakCountDown () {

        whatTimeDisplay.innerHTML = "Time for a break!"

        var audio = new Audio('/JavaScript/Bell.mp3');
        timeLeft = bTime;
        setInterval(function(){
            if(timeLeft <= 0) {
                soundPlay()
                clearInterval(timeLeft = 0);
                workCountDown();
            }

            timeLeftDisplay.innerHTML = timeLeft;
            timeLeft -= 1;
        }, 6000)
}

    function soundPlay() {
        var audioElement = document.getElementById('audio');
        audioElement.loop = false;        
        audioElement.load();
        audioElement.play();
    }
    startBtn.addEventListener('click', workCountDown);

})