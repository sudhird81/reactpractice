const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID, // Your Credentials here.
			clientSecret: process.env.CLIENT_SECRET, // Your Credentials here.
			callbackURL: process.env.CLIENT_URL,
			scope:['profile','email'],
			
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	));

	passport.serializeUser((user, done) => {
		done(null, user);
	})
	passport.deserializeUser(function (user, done) {
		done(null, user);
	});