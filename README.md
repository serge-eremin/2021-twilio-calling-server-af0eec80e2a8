# twilio-calling-server
Simple Node Express Calling Server
# Basic Calling Functionality Configuration

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This is a backend code for Calling and its frontend can be found [ here ] ( https://developmentmadeeasy2020@bitbucket.org/developmentmadeeasy2020/twilio-calling-client.git )

### Prerequisites

   1) Install ngrok and at its directory, tunnel the localhost at 12345, using the ./ngrok http 12345 ( For Unix ) or ngrok.exe http 12345 ( For windows ) copy the url which looks something like http://12345dummy.ngrok.io.

# Configuration
    1) npm install

    2) Add a file called development.json to environment/ folder taking example from an example file kept their, configure the accountSid and authToken from the twilio console dashboard ( twilio.com/console ), callbackURL as the URL mentioned ( something like http://12345dummy.ngrok.io ), and applicationSid as the Application Sid defined in the TwiML apps ( https://www.twilio.com/console/sms/runtime/twiml-apps ). Keep the device1 name something of like a uniq id of 15-20 characterss

    3) Update the ngrok URLs at your twilio numbers i.e. ( https://www.twilio.com/console/phone-numbers/ ) and TwiML apps ( https://www.twilio.com/console/sms/runtime/twiml-apps )

    4) npm start

    5) Refer the medium link to get things in perspective [ here ] ( https://medium.com/@shubham21dixit/calling-functionality-using-twilio-with-react-and-node-13818b46e969 )
