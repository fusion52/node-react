# NodeJS and ReactJS Fullstack

This project uses NodeJS, ReactJS, and integrates with multiple third-party services to created a starter application for sending one question survey campaigins to mutiple emails (comma-separated).  Authenication via Google, Email service on SendGrid.com, MongoDB data store on mLab.com, and Payment Gateway on Stripe.com.

```
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
};
```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
NodeJs
ReactJS
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
node install
```


End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
No tests
```

### And coding style tests

Explain what these tests test and why

```
No tests
```

## Deployment

Add additional notes about how to deploy this on a live system

Deploy to Development environment

```
node run start
node run server
node run client
node run dev    (runs both client and server)
```

Deploy to Production on Heroku
```
git push heroku master
```

Please read [README-Production.md](README-Production.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Built With

* [NodeJS](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces 
* [SendGrid](https://sendgrid.com) - Partner with the email service trusted by developers and marketers for time-savings, scalability, and delivery expertise.
* [mLab](https://mLab.com/) - Database-as-a-Service for MongoDB
* [Stripe](https://stripe.com/) - Payment Gateway. The new standard in online payments


## Versioning

We use [Git](https://git-scm.com/) for versioning. 

## Authors

* **Roberto Hernandez** - *Initial work* - [node-react](https://github.com/fusion52/node-react)


## License

This project is licensed under the GNU General Public License 

## Acknowledgments

* My loving family
* Instructors at Udemy
