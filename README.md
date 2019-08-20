# Zee-Shell-Source
Official Source Code For Zee Shell. Zee Shell is a Touch Friendly shell That makes using Linux With Touch Devices Much easier.

Hello Everyone Sadly Zee Shell is dead.. I will no longer Maintain it because it was just a failure... It was really hard for me To make something
like this with html,css,javascript and electron it just didn't work.. One of the Really tough limitations was the Virtual Keyboard And The web...

I could succesfully make a full working Web browser within zee Shell Easily with electron and its <webview> Html tag.

The problem was integrating the Web Browser With zee Shell's Navigation Bar and Virtual Keyboard.
I couldn't Get The Keyboard To interact at all with The Websites In Zee Shell's Web browser. because electron's WebView is completley Isolated so i coudn't
integrate The Keyboard with the Websites.

Another Big Problem That i had was the Dialler app..
How on Earth am i able to interact with such hardware like GSM Modules with html,css and javascript it's just impossible..

and we all know that the most Important Thing About Phones is to make Calls..

hope You understand Why i stopped working on Zee Shell. But Don't worry Zee Shell is Open-source It means That if You Have any improvement That You Can add To
Zee shell You Easily Can. And also other People can improve it as well..

Zee Shell And it's Core Apps all sum up to 827 Lines of code which is really small btw..
i'm so sad to see a project like this die so fast.. :-(

ok... enough talking Now let's see How to Run Zee Shell From Source

First You'll need NodeJS,npm and electron-forge installed on your machine
then Type in a terminal window
```
npm install electron-forge -g
```
this will intstall electron Forge on your machine
then Navigate To Where You've downloaded zee Shell Source within Your Terminal Window

in the Zee Shell source Folder You'll find a folder called 'shell'
navigate to That folder by Typing
```
cd shell
```
now Type
```
npm install
```
This Will Install all The required Dependencies For Zee Shell
Then Type.
```
npm start
```
And This Will start Zee Shell

Congrats, You just ran zee shell from source.
