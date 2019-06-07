require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const createError = require("http-errors");
const { setCorsHeaders } = require("./middleware/security");
const { genericErrors } = require("./lib/controllers/messageController");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(setCorsHeaders);

const usersRouter = require("./routes/users");
const freebiesRouter = require("./routes/freebies");
const skillsRouter = require("./routes/skills");

const { Client } = require("pg");

if (!process.env.IMAGE_UPLOAD_DIR) {
  console.log(
    "Buhh you need to put a IMAGE_UPLOAD_DIR environment variable in your .env"
  );
  process.exit(1);
} else {
  console.log("Hello from postgres");
}

const client = new Client({
  user: process.env.DBUSER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DBPORT
});
client.connect();

// tables and seeding

async function seedAdmin() {
  return client
    .query("select * from public.users")
    .then(res => {
      if (
        res.rowCount >= 1 &&
        res.rows.filter(user => user.email === "admin@dci.de").length > 0
      ) {
        console.log("Admin seeded");
      } else {
        client.query(
          `INSERT INTO public.users("first_name", "last_name", "email", "password", "city", "zip_code", "registration_date", "rating", "image") 
        VALUES ('The', 'Admin', 'admin@dci.de', '12345678', 'Berlin', 10234, '2019-05-04', 5, 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`
        );
        //console.log("Admin seeded");
      }
    })
    .catch(e => console.error(e.stack));
}

// Creation of users table

client.query("SELECT to_regclass('public.users')").then(async res => {
  if (res.rows[0].to_regclass !== null) {
    const response = await seedAdmin();
  } else {
    client
      .query(
        `CREATE TABLE public.users
        (   "user_id" SERIAL PRIMARY KEY,
            "first_name" character varying(30) NOT NULL,
            "last_name" character varying(30) NOT NULL,
            "email" character varying(30) NOT NULL,
            "password" character varying(20) NOT NULL,
            "city" character varying(30),
            "zip_code" integer NOT NULL,
            "registration_date" date NOT NULL,
            "rating" integer,
            "image" character varying
        )
        WITH (
          OIDS = FALSE
      )
      TABLESPACE pg_default;

        ALTER TABLE public.users
            OWNER to postgres;
      `
      )
      .then(() => seedAdmin());
  }
});

async function seedFreebies() {
  return client
    .query("select * from public.freebies")
    .then(res => {
      if (
        res.rowCount >= 1 &&
        res.rows.filter(freebie => freebie.item === "Ball").length > 0
      ) {
        console.log("Freebies seeded");
      } else {
        client.query(
          `INSERT INTO public.freebies("item", "description", "image", "zip_code", "location", "category", "user_id") 
        VALUES ('Ball', 'My old football', 'https://images.pexels.com/photos/1342252/pexels-photo-1342252.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', '12345', 'My house', 'Sports', 1);
        INSERT INTO public.freebies("item", "description", "image", "zip_code", "location", "category", "user_id") 
        VALUES ('Cup', 'Colorful, not very used', 'https://images.pexels.com/photos/433199/pexels-photo-433199.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', '12345', 'My house', 'House&Garden', 1)`
        );
        console.log("Freebies seeded");
      }
    })
    .catch(e => console.error(e.stack));
}

// Creation of freebies table

client.query("SELECT to_regclass('public.freebies')").then(async res => {
  // check if table freebies already exists
  if (res.rows[0].to_regclass !== null) {
    client.query("SELECT to_regclass('public.users')").then(async resp => {
      //check if table users exists for the foreign key
      if (resp.rows[0].to_regclass !== null) {
        const response = await seedFreebies();
      }
    });
  } else {
    client.query(
      `CREATE TABLE public.freebies
        (   "item_id" SERIAL PRIMARY KEY,
            "item" character varying (30) NOT NULL,
            "description" character varying (300),
            "image" character varying,
            "zip_code" integer,
            "location" character varying,
            "category" character varying NOT NULL 
            CHECK (category IN ('House&Garden', 'Fashion', 'Motors', 'Entertainment', 'Electronics', 'Art/Collectibles', 'Sports', 'Toys', 'Media', 'Pets', 'Others')),
            "user_id" integer NOT NULL,
            CONSTRAINT "user_fkey" FOREIGN KEY ("user_id")
            REFERENCES public.users ("user_id") MATCH SIMPLE
        )
        WITH (
          OIDS = FALSE
      )
      TABLESPACE pg_default;

        ALTER TABLE public.freebies
            OWNER to postgres;
      `
    );
  }
});

app.use(logger("dev"));
app.use(express.json());

app.get("/", function(req, res) {
  console.log("Welcome to Collectivity");
  res.json({
    message: "Welcome to Collectivity! We're very happy to see you here :)"
  });
});

async function seedSkills() {
  return client
    .query("select * from public.skills")
    .then(res => {
      if (
        res.rowCount >= 1 &&
        res.rows.filter(skill => skill.skill === "Cooking").length > 0
      ) {
        console.log("Skills seeded");
      } else {
        client.query(
          `INSERT INTO public.skills("skill", "description", "location", "time_span", "category", "user_id") 
        VALUES ('Cooking', 'I can cook all kinds of german dishes', 'Your house', '1.5', 'House&Garden', 1);
        INSERT INTO public.skills("skill", "description", "location", "time_span", "category", "user_id") 
        VALUES ('Cleaning', 'I can clean super fast', 'My house', '0.5', 'House&Garden', 1)`
        );
        console.log("Skills seeded");
      }
    })
    .catch(e => console.error(e.stack));
}

// Creation of skills table

client.query("SELECT to_regclass('public.skills')").then(async res => {
  // check if table skills already exists
  if (res.rows[0].to_regclass !== null) {
    client.query("SELECT to_regclass('public.users')").then(async resp => {
      //check if table users exists for the foreign key
      if (resp.rows[0].to_regclass !== null) {
        const response = await seedSkills();
      }
    });
  } else {
    client.query(
      `CREATE TABLE public.skills
        (   "skill_id" SERIAL PRIMARY KEY,
            "skill" character varying (50) NOT NULL,
            "description" character varying (300),
            "location" character varying,
            "time_span" real NOT NULL,
            "category" character varying NOT NULL 
            CHECK (category IN ('House_Garden', 'Fashion', 'Motors', 'Entertainment', 'Electronics', 'Art_Collectibles', 'Sports', 'Toys', 'Media', 'Pets', 'Others')),
            "user_id" integer NOT NULL,
            CONSTRAINT "user_fkey" FOREIGN KEY ("user_id")
            REFERENCES public.users ("user_id") MATCH SIMPLE
        )
        WITH (
          OIDS = FALSE
      )
      TABLESPACE pg_default;

        ALTER TABLE public.skills
            OWNER to postgres;
      `
    );
  }
});

// Other stuff

app.use(logger("dev"));
app.use(express.json());

app.get("/", function(req, res) {
  console.log("Welcome to Collectivity");
  res.json({
    message: "Welcome to Collectivity! We're very happy to see you here :)"
  });
});

app.use("/users", usersRouter);
app.use("/freebies", freebiesRouter);
app.use("/skills", skillsRouter);

// Catch any route that is not recognized
app.use((req, res, next) => {
  const error = new createError.NotFound();
  //with http-errors
  next(error);
});

// Generic error handler
app.use(genericErrors);

module.exports = app;
