# Twilio Video App using Hooks

Based on the article https://www.twilio.com/blog/video-chat-react-hooks

To run the app you must have a Twilio account with the appropriate keys.

Create a .env with the following and fill in the missing ids.

TWILIO_ACCOUNT_SID=<twilio sid>
  
TWILIO_API_KEY=<video api key>
  
TWILIO_API_SECRET=<video api secret>
  
TWILIO_CHAT_SERVICE_SID=

TWILIO_TWIML_APP_SID=

TWILIO_ALLOW_INCOMING_CALLS=

To test the express proxy server and the react server,
Type

npm run dev
or
yarn dev

into your terminal
Then navigate to localhost:3000.

Give yourself a name and choose a room name and log in. You will be asked for permission to use video and audio.
Accept and you will see your video.

If you open other windows and navigate to localhost:3000, you can join the room you created.

![Alt text](./demo.png?raw=true "Title")
