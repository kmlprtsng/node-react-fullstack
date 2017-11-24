Node React Fullstack

#11.
You can have multiple express applications running within node application

# 12.
mkdir server
npm init
npm install -g express
create index.js
create .gitignore (add node_modules)
node index.js

4 steps for hekoku
1. Dynamic port binding
2. specify node enviornment i.e. declare engines property it in package.json 
"engines": {
    "node": "8.1.1",
    "npm": "5.0.3"
  }

3. Specify start script i.e. scripts section, add start section
"scripts": {
    "start": "node index.js"
  },

# 14.
Install heroku cli

heroku login
heroku create
git remote add heroku https://REMOTE_URL
git push heroku master
heroku open --opens in the browser
heroku logs

# 17. 
(client - api call) localhost:500/auth/google -> (Server) google.com/auth?appid=123 -> (google redirects browser) localhost:5000/auth/google/callback?code=456 -> (server) get profile from code -> (google responds) -> (server) record user details -> (client) store user Id in cookie -> (client) redirect to home page

PassportJs helps oAuth - 2 Limitations
- hard to understand flow and big picture
- how library been structured (passport [generic helper functions], passport strategy)

There are 500+ strategies on passportJS. Go to website to find the right one.

#19.
npm install --save passport passport-google-oauth20