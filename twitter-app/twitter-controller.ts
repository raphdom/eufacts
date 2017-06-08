const Twitter = require('twitter');
const Pusher = require('pusher');
const PusherClient = require('pusher-client');
const TinyURL = require('tinyurl');

export class TwitterController {


    constructor(){}

    public run(){
        const client = new Twitter({
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        });

        let socket = new PusherClient(process.env.PUSHER_API_KEY, { cluster: "eu" });
        let channel = socket.subscribe('facts');
        channel.bind('new_fact', (fact) => {

                let tweet = fact.text;

                if (fact.text.length > 110){
                    tweet = fact.text.substring(0,110) + "...";
                }

                tweet += " " + fact.url;

                client.post('statuses/update', {status: tweet}, function(error, tweet, response) {
                    if (error) {
                        console.log(error);
                    }
                });
            }
        );


    }

}