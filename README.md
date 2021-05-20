# Pomodoro Chrome extension
#### Video Demo:  #TODO
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
Click it and you will have a dropdown menu with the amount of work time you want and the amount of break time in a dropdown right below it.
The time increments in steps of 5 minutes and maxes out at 90 minutes. *

Underneath, you will see a **start button** which will start the timer. The intervalls will continuously reset itself until you click the **stop button** below it.


**as to not entice people to entirely forget about the timer if they set it to 5+ hours. I also don't think that anyone that wants to utilize this extension would work in more than 90 minute periods.*


## Technologies used

I used a simple stack of vanilla JavaScript, HTML and CSS.
JavaScript gives me the functionality, HTML the structure of the modal and CSS to make it all look a bit more appealing. 


# Credits:

#### Material and ressources used to make this project:

- How To Build A Chrome Extension (Manifest V2) (2021 Web Development) 
 (by An Object is A | https://www.youtube.com/watch?v=-dhMbVEreII&t=1293s)

- Build your own COUNTDOWN TIMER in 15 lines of JavaScript code
 (by Code with Ania Kubow | https://www.youtube.com/watch?v=vSV_Ml2_A88)