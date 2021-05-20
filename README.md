# Pomodoro rubber duck
#### Video Demo:  https://youtu.be/0FtsDSn3auc
#### Description:

## What is Pomodoro and how do I use it??

#### What is Pomodoro?

Pomodoro is a time management technique thought up by **Francesco Cirillo** in the 1980s during his time as a university student. In short, you use a timing device to work in intervalls which are seperated by short breaks. 

It is called Pomodoro *(Italian for tomato)* as Cirillo utilized a kitchen timer that looked like a tomato while developing this technique.

#### How do I use it?

**There are six steps in the original technique:**

1. Decide on the task to be done.
2. Set the pomodoro timer (traditionally to 25 minutes).
3. Work on the task.
4. End work when the timer rings and put a checkmark on a piece of paper.[5]
5. If you have fewer than four checkmarks, take a short break (3–5 minutes) and then return to step 2; otherwise continue to step 6.
6. After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.

You can obviously divert from the original technique and tweak the variables of the working time and the break time as you wish. 
Some might feel, that longer working times with longer breaks would suit them better, others prefer shorter intervalls. 
It is something you will find out the easiest by just doing it!

## Why did I choose this as my CS50 final project?

I chose to build this extention as I utilized this method myself for the duration of this course to stay on track. Especially harder problems such as **Tideman** or **Speller** will get exhausting and frustrating if you just work on them continuously. I found myself to be able to stay focused and work on a problem for a longer period of time than I would just working away with no breaks. So I hope this will aid some other CS50 stundents with their time management.

#### *Aren't there already loads of pomodoro apps on smartphones?*

That is true. However, as the CS50 IDE is browser based I wanted to build something that is also in the browser as to not divert too much attention from work to your phone. (Like checking how far along the timer is on your phone an such)

*Aren't there already extensions for chrome that do the same?*

Yes, there are. But I wanted to build something entirely different from what we learned during the course. And there are only so many problems in this world that can be solve at my current level. 

## Functionality of the extension

After installing the extension you should see a little icon in the top right of your browser with the CS50 duck on it. 
Click it and a window pops up with a picture of the CS50 rubber duck as well as three buttons. A start, a pause and a stop button. Underneath you'll find two input fields. One for the time you want to work and the amount of break time you give yourself. Input the values (min 0, max 180*) and click start to start the countdown. A number will appear on the rubber duck and count down to zero while also displaying what kind of cycle you are currently on. Once the counter is down to zero you will hear a bell ringing, telling you to either start or stop working. This is just so you will also be alerted if you decide to minimize the counter.

This will repeat itself coninuously until you click the stop button.


**as to not entice people to entirely forget about the timer if they set it to 5+ hours. I also don't think that anyone that wants to utilize this extension would work in more than 180 minute periods.*


## Technologies used

I used a simple stack of vanilla JavaScript, HTML, CSS and made use of the functionality provided by Google. 
There is a JavaScript running in the background that, on click of the extensions icon, will first create a popup window with the popup.html file using the *chrome.windows.create function*.
Once the DOM is loaded the pomodoro timer functions are active and ready to be used. 



# Sources:

#### Material and ressources used to make this project:

- How To Build A Chrome Extension (Manifest V2) (2021 Web Development) 
 (by An Object is A | https://www.youtube.com/watch?v=-dhMbVEreII&t=1293s)

- Build your own COUNTDOWN TIMER in 15 lines of JavaScript code
 (by Code with Ania Kubow | https://www.youtube.com/watch?v=vSV_Ml2_A88)

- Create a Pomodoro Clock with JavaScript
 (by AlbertoM | https://dev.to/albertomontalesi/tutorial-create-a-pomodoro-clock-with-javascript-13om)

- Google documentation on chrome.windows
 (by some helpful Google engineer (thx) | https://chrome-apps-doc2.appspot.com/extensions/windows.html)

