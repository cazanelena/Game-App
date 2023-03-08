# Memory Flip Card Game

## How does it work?

The game starts with all the cards face down and the player take turns to turn over two cards. If the two cards have the same picture, then they keep the cards, otherwise they turn the cards face down again. At the beginning of the game you get a total of 6 lives. You start losing lives once your flip 2 cards that don't match. The goal of the game is to have all your card face up without losing all your lives.

## How can your run this game?

This is a desktop web page game. You can play it usuing Google Chrome.

## Planning

I had to break the problem in small chunks such as:

- how should my HTML be structured (will it be hard coded or generated by JS)
- I had to start with a simple version of the game then added more funtionalities such as (limited number of lives, seperate buttons to start/restart the game, a stats board at the end of a game)
- as I went a long I've change the CSS and tried to adapt it based on different added funtionalities

## Building

I started of with a 4 x 4 cards grid all faced up and from there starte to add more functionalities such as:

- using JS to automatically generate the divs for the card (adding specific classes)
- using CSS and DOM manipulation in order to flip the cards
- worked on the logic behind using JS to keep track to the flipped cards and if they match or not
- once I had a working game with the right logic I added the Lives count, start/reset button and the stats board

## Debugging

During the process of building this game I encountered lots of errors and bugs that I had to solve.

- for the CSS styling I used the chrome devtools
- for the JS code mostly used printing statments, chrome inspect -> console
- I also find it helpful installing a Live server extention so the web page get automatically refreshed once I make a change
- another extention I used was Prettier for format on save
