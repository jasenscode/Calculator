# Calculator

This is a simple calculator made using vanilla JavaScript that I built in the third week of the _nology bootcamp.

[Check the live demo here!](https://jasenscode.github.io/Calculator/)

![Calculator screenshot](https://github.com/jasenscode/Calculator/blob/main/assets/images/screenshot.JPG?raw=true)


____________
### Technologies

- HTML5
- Sass
- JavaScript

_____
### About

The requirement of this project was to make a working calculator to test my understanding of the concepts learnt on the course so far. The main aim was to demonstrate JavaScript knowledge by applying it to a real project with a limited brief, which encouraged us to complete the task in our own ways and encourage us to find solutions to queries and issues ourselves.

As this was the first solo project I'd attempted, I broke it down into two initial steps; firstly the design, and secondly the JavaScript logic.

The majority of the time was spent writing the calculator logic and on the last couple of days of the project, I began to look for bugs in my calculator and ways that I could refactor my code to make it more DRY.  

Being the first solo project I've worked on initially it was quite overwhelming, however, my approach was to first write down each step a user would make on the calculator and then what my logic would need to do at each step. This helped me to break down a seemingly large project into smaller chunks that I could focus on getting to work before I moved onto the next step. This can be seen through the comments throughout my code, which will allow anyone looking at it to see what is happening at each stage.
 
_____
### Testing

At a later stage I implemented end to end testing using Cypress. This was the first time covering this concept and using this testing tool but I found it really useful. Off the back of it, I implemented two fixes:

* Firstly, when an operator button had been pressed, if the user wanted to select a new one they would need to clear the calculator and reinput the whole equation again. I rectified this by adding a condition to check if the operator variable already had a value each time an operator button was clicked and replace it if so. 

* Secondly, if the equals button was pressed without the user having input a second number, it would display 'NaN' on the calculator display output meaning the user would need to clear everything. This now throws a console error advising that a number needs to be selected meaning that the equals function will not calculate anything until the user does so.
