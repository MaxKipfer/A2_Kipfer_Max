
Max Kipfer
101368014


Changes from assignment 2:
I fixed the nav links so that they have proper styling, instead of the blue/purple browser appearance. I also got rid of the stray divs I had, and fixed my images so that they use the image tag, and include some alt text. I used the section tag more meaningfully, and changed it's styling so that it didn't turn everything into a nav bar. I also added a footer element with some basic company info, as well as removing some invalid css properties. 


AI Documentation:
I used ChatGPT to generate portions of the code, I also used it to explain every piece so that I could understand it, and modify it where necessary. An example of this is me going back and adding an if statement check for any event listeners that are specific to one page only, so that those lines do not throw errors when you navigate to another page.


-------------------------------------------------6 Elements:---------------------------------------------------------------


1. I implemented a responsive nav bar that shows a hamburger menu and collapses/expands vertically when the screen size is below 768px.


2. I added appropriate checks (eg: email must contain '@') and error messages to all of the fields in my form, as well as an alert that lets you know when the form has been accepted.
**This took MANY hours of debugging, ChatGPT was helpful, although I felt like I was being led in circles for a while.


3. I added a back to top button that fades in the further down you scroll, and smoothly returns you to the top when clicked.


4. My gallery section is now dynamically rendered with js instead of each element being manually placed with html. This means that to add more content, I only have to update the array with a few parameters, and the for loop will render it to the page.


5. I added a search function that allows you to search through the dynamically rendered gallery section, by matching the search field input to the titles of each element.
**I ran into an issue where I would get a console error every time I navigated away from the gallery page, but that was fixed with an if statement check on my event listener for the search bar.


6. I added a call to the Pokemon API on my home page. It feels a little out of place, but it was the most relevant thematically out of any of the APIs we were given to use, since my company is a game company. Instead of clicking a button to generate a new Pokemon, I made it so it automatically generates one every time the page loads.
**I had a similar console error for my Pokemon image, so I fixed it with the same if statement check to make sure that the content i'm referencing is actually on the page currently being accessed.




