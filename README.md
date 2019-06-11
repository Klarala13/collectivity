To initialize:

1. install dependencies and create a .env
2. run frontend

- open frontend folder on terminal and run npm start

3. run docker postgres container (see provide database container)
4. run backend

- open backend folder on terminal and run npm run watch (in the beginning again and again so everything is created)

## provide database container:

Start backend: Open terminal:
`sudo docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 4000:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres`

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

We believe that Sharing is Caring
Platform for giving and sharing skills and items, stop consuming, start sharing!

Two basic features: timebanks (sharing of skills for a set amount of time) and freebies (sharing items)

Technologies
-HTML/CSS
-JS(ES6)
-React
-PostgreSQL
-NodeJS
-Bootstrap

I post whatever I am offering (and it doesn't have to be material things, it can be my knowledge,Sbhan ticket, minutes on my phone, whatever...) and people can search items.
And because another big problem with ebaykleinanzeigen and free your stuff is that people ask for items and then never actually pick them up, we could also implement a rating system... so the users that ask for things and don't pick them up, will have a lower rating...
Also, another feature I want to implement, are time banks: that is, I offer what I know how to do for a det. amount of time and people can ask for my "services". The initiative was born in Spain during the crisis and it was when people didn't have a job, but they knew how to do things, they started to offer each other help with this method. For example, I can clean a house for 2 hrs/week or I know how to fix clothes or I can fix stuff in ur place... etc. that way people got "payed" in food or in things they couldn't do.

MOCK-UP
https://ninjamock.com/Designer/Workplace/81156828/Homepage
