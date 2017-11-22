Node React Fullstack


# 12.
npm init
npm install -g express
create index.js

Let heroku know which node and npm to use

"engines": {
    "node": "8.1.1",
    "npm": "5.0.3"
  }


# 14.
Install heroku cli

heroku login
heroku create
git remote add heroku https://REMOTE_URL
git push heroku master
heroku open --opens in the browser
heroku logs

# 17. 
(client - api call) localhost:500/auth/google -> (Server) google.com/auth?appid=123 -> (google redirect) localhost:5000/auth/google/callback?code=456 