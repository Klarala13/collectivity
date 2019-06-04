To initialize:

1. install dependencies and create a .env
2. run frontend
- open frontend folder on terminal and run npm start
3. run docker postgres container (see provide database container)
4. run backend
- open backend folder on terminal and run npm run watch (in the beginning again and again so everything is created)

## provide database container:

Start backend: Open terminal: 
`sudo docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 4000:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres`

Check if pg-docker is already running:   
`sudo docker ps -a`

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
d1a04c805227        postgres            "docker-entrypoint.s…"   6 minutes ago       Up 6 minutes        0.0.0.0:4000->5432/tcp   pg-docker

```

Stop container:

`sudo docker stop <NAME/ID>`

e.g. `sudo docker stop pg-docker`

Remove container:

`sudo docker rm <NAME/ID>`




TO MAKE A SMALL DONATION TO OUR PLATFORM, FOLLOW THE LINK https://klarala13.github.io/collectivity/

# collectivity

Platform for giving and sharing. Inspired on ebaykleinanzeigen, free your stuff and time banks.

-Two basic features: timebanks and freebies
-You don't need to have an account to share/recieve things.
-Rating system so people don't stand you up.
-messaging system for users

Technologies
-HTML/CSS
-JS
-React
-MongoDB
-NodeJS
-Bootstrap
-Geolocation services
	API https://developer.here.com/lp/mapAPIs?cid=Other-Google-MM-T2-Dev-Generic-BMM&utm_source=Google&utm_medium=ppc&utm_campaign=Dev_PaidSearch_DevPortal_AlwaysOn
	NPM package for React https://www.npmjs.com/package/react-geolocated
	VANILLA JS methods https://stackoverflow.com/questions/42259456/passing-geolocation-from-parent-to-child-in-react
-Messaging service
	LIBRARY + API http://www.squaremobius.net/rabbit.js/
	FRAMEWORK https://socket.io/#examples
	API chat https://talkjs.com/

maybe you are familiar with a group called "Free your Stuff"? It's a place where people post things they dont want/need anymore and whoever reads it and wants it can ask for it. The problem with this page is that a lot of people with free time were just waiting by the computer for someone to post and directly ask fro the things... so they were all going to the same people.
I would like to create a page with the same concept, but geolocated. That is: I post whatever I am offering (and it doesnt have to be metrial things, it can be my knowledge, sbhan ticket, minutes on my phone, whatever...) and people can search items by name or vecinity. That way, the items will go to those that find them first or are closer to them or ask for them first..
Once the item is no longer available, the post is erased...
And because another big problem with ebaykleinanzeigen and free your stuff is that people ask for items and then never actually pick them up, we could also implement a rating system... so the users that ask for things and dont pick them up, will have a lower rating...
Also, another feature I want to implement, are time banks: that is, I offer what I know how to do for a det. amount of time and people can ask for my "services". The iniciative was born in spain during the crisis and it was when people didn't have a job, but they knew how to do things, they started to offer eachother help with this method. For example, I can clean a house for 2 hrs/week or I know how to fix clothes or I can fix stuff in ur place... etc. that way people got "payed" in food or in things they couldn't do.

MOCK-UP
https://ninjamock.com/Designer/Workplace/81156828/Homepage

BOARD
https://trello.com/b/hJ6uMiPy/frontend

INSPIRATIONS
https://timebanks.org/
http://sfbace.org/
https://www.i-share-economy.org/atlas
