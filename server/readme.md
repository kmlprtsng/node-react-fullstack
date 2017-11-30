Node React Fullstack

#3.
Use Prettier to automatically format document on save.

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

#20.
http://console.developers.google.com
create app and sign up for google+ Api (not oauth. Doh!!!) -> Create credentials -> Oauth client ID

Authorised JavaScript origins -> http://localhost:5000
Authorised redirect URI's: http://localhost:5000/auth/google/callback

Don't push clientSecret to Github. Create config -> keys.js and add to git ignore.

#25.
Once successfully logged in, the callback function for the GoogleStrategy will be called with the accessToken.

#26.
Access token allows us to do stuff with users profile that they have given us access to e.g read emails etc.

Refresh token allows us to update the access token as it refreshes after some time.

#27. Nodemon Setup
npm install --save nodemon

Pacakge.json -> scripts  -> "dev" : "nodemon index.js"
npm run dev

#28. Refactor
3 things: config, services and routes

#30. Signin with oAuth
Store some unique token from the profile. Google allows multiple emails so not a good strategy. Use the user's id provided by google.

#31. Mongo DB Intro
Mongoose.js optional library that provides useful operations.

Mongoose has Model class. It has bunch of functions assigned to it e.g. creating a record, searching all the records.

#32. Mongo DB Setup
Hosting Mongo DB remotely https://mlab.com/

#33. Connecting Mongoose
npm install --save mongoose
mongoose.connect(keys.mongoURI);
You may see warning becuase mongoose need to update their code to bring it inline with MongoDb updates.

#35. Mongoose Model class
Deconstructing  - const { Schema } = mongoose; //destructing for const Schema = mongoose.Schema;
Mongoose forces us to declare all the properties for a model ahead of time where Mongo Db doesn't have any such restrictions.

Once mongoose is told about the model, it will create an empty collection if it doesn't exist.

#36. Saving Model Instances
const User = mongoose.model('users'); //fetch user Model instance
new User({ }).save(); //create a user instance and save

#37. Mongooes Queries
User.findOne({googleId: profile.id}).then(user => { //do something });

#38. Passport Callbacks
call the done method to let passport know that we are done. First argument of the method should be null if there were no error otherwise an error object.

#39. Encoding Users
passport.serializeUser is called when the user authenticates.

#40. Deserialize User
passport.deserializeUser()

This will put the user onto the request i.e. req.user

#41. Enabling Cookies
npm install --save cookie-session

Extracts cookie data and encrypts and decrypts it. Passport will then pull out the data from the cookie data.

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey] //could provide multiple keys which could be used for different cookies
  })
);
app.use(passport.initialize());
app.use(passport.session());

#42. Testing Authentication
Request Comes in -> Cookie data is decrypted -> passport derserializes the user -> request sent to route handler.

#43. Logging out
request is attached with .logout() function by passportjs. It will clear the cookies.

#44 Deeper Dive
app.use() - used to plug in small middleware functions. Order of these methods is very important. These can be used for small subset of routes as well.

req.session - cookieSession takes the data out of cookie and assigns it to session property.
PassportJs looks at req.session for the user data.

Express recommends express-session but we used cookie-session. They accomplish the same thing but do it in a different fashion. The difference is how the data is stored. 
Cookie session -> all session data is within one cookie. 4093 bytes limitation.
Express session -> stores session id on client side cookie and then lookup up the relevant information in the session store on the server side data store e.g. mongo db. Need to get a package for that.