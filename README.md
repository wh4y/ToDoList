# My first to do list ;)


### foreword
So, first of all I would say the following thoughts:

Somehow I was sitting in a room somewhere in Minsk and thought about how often I see and hear about to Do lists. Literally everyone does them. I thought that I was not a sucker after all and should also do such a thing as one of the first projects. And I am ready to present you my creation.

It's my first sigle project, uploaded to github and second traing project powered with Reactjs. Some moments of the work done suit me, some make me tear out my eyes (and my hands too), but it doesn't matter. One cannot but appreciate the experience that I received during development: familiarity with the hooks that I heard about, but did not use, using Ant Design and etc.

## Description

I don't know what to say about ToDoLiSiT, because everyone knows what is it ;)
So, it's an application powered with Reactjs as I said before, that is meant to store our dreams and plans. By the way, way ur able to use some extra possibilities provided by this application. About this possibilities you will know later.

Sorry for the quality of the screenshots.

## Technologies

* React
* Typescript
* Create-React-App
* Redux
* React-Redux
* Redux-Toolkit
* Ant Design
* Sass(SCSS)
* Uuid

## Gettig started

You must have nodejs!
First of all, you should clone this repo.
```
git clone https://github.com/wh4y/ToDoList.git
```
After that, you should open terminal in project folder contains yarn.lock and package.json. And enter:
```
yarn install
```
or 
```
npm install
```
To start application:
```
yarn start
```
or
```
npm start
```

## Interface

Interface of this application does not represent something beyond complex and ingenious. it was made up with Ant Design componets: Input, Typography, Modal, Progress, Icons. 

![alt Interface of application](https://sun9-27.userapi.com/impf/sAJgkJ0pAUmw8MB9rBIDmnB6zFF8HHYth2Gitg/RMhOw4QzfSw.jpg?size=800x500&quality=96&sign=d0c94362a5abe15d6e828dfbd87cc1d8&type=album "Interface")

1. **Text Input**  
>Allows you to enter the text of your note.
2. **Add button**  
>Adding new note(you can make the same using key "Enter").
3. **"toDo" element(note)**
>Element of toDo list contains necessary information about your "toDo": text, date, uuid(unique key), progress indicator.
4. **Delete button**
>Delete corresponding note.
5. **Done indicator**
>Indicates whether the task is completed.

![alt Interface of modal](https://sun9-19.userapi.com/impf/NSnSMpihfrEwm-7CNnGzJCjaZDGvZKJFi0COig/E9D2076zovY.jpg?size=800x500&quality=96&sign=981e99b1d977d88c98aea43f4fbb6d20&type=album"Interface(Modal)")

7. **Progress indicator**
>Shows the percentage of completion of the task.
8. **Text input**
>Allows you to read/edit text of this note. Сan expand and show all text if it exceeds the allowed length.
>![alt Interface of modal](https://sun9-82.userapi.com/impf/sJtMA5MW6NDn1mTaqSjUFewW4iAV97ueRYQivg/Dpu0CDTXMUI.jpg?size=800x500&quality=96&sign=3ec4c32338fbd6d5faf9d16e70fe9147&type=album"Interface(Modal)")
9. **Progress up/down buttons**
>Allows you to increase or decrease the progress rate by 5% per click.
10. **Note information**
>Secondary information of this note: date, uuid, status.
11. **Confirm button**
>Confirm changes.
12. **Modal close button**
>Close modal.


6th point was devoured :)

### My observations and remarks

I want to note that the architecture of the application and the code itself is poor. These nuances are due to lack of experience and haste. In the beginning, due to my own laziness, I did not divide the code into files, but when I decided, it became wildly inconvenient to do and everything turned out to be very crooked. Many things now I would not do the way I did.

I want to point out the following points:

- A more adequate code splitting is needed: correct division into components and thoughtful types of props. the connection between components should not resemble a messy spider web, but a perfectly understandable graph. This will make the project easier to read and will affect the complexity of maintenance.

- I would move the modal into a separate hook that would return an array containing the window component itself and the interface for interacting with it. However, if you do this, the window loses its "roll-up" coordinates when closed.

- It is necessary to fix the bug that is visible in the image.
>![alt text area bug](https://sun1.beltelecom-by-minsk.userapi.com/impf/DGtf_E3oZ5oETFQgvZHfMCDn5tJT1VK1VWYhKg/WWFN8NkiKLw.jpg?size=800x500&quality=96&sign=9c3418daa7a7ff4fa92c0afd2362d8b0&type=album "bug")

- Styles are not written in the most correct way, which will affect the complexity of project support.
