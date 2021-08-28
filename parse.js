const fetch = require('node-fetch')
const fs = require('fs')

class UpdateBotList {
    constructor() {
        this.channelMinimum = 150;
        this.daysMinimum = 30;
        this.lastOnline = Math.floor(Date.now() / 1000) - this.daysMinimum * 24 * 60 * 60;
        this.whitelist = JSON.parse(fs.readFileSync('./whitelist.json'));
        this.greylist = JSON.parse(fs.readFileSync('./greylist.json'));
        this.fetchList();
    }

    async fetchList() {
        console.log('Fetching botlist, this will take a moment..');
        fetch('https://api.twitchinsights.net/v1/bots/all', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'MrEliasen/twitch-bot-list',
            },
        })
        .then((res) => res.json())
        .then((json) => {
            console.log('Received list of ' + json.bots.length + ' names.');
             this.filterList(json.bots)
         });
    }

    filterList(bots) {
        console.log('Filtering list..');
        console.log('Minimum Channels the bot needs to be in: ' + this.channelMinimum);
        console.log('Last Online within: ' + this.daysMinimum + ' days');
        var filteredBots = [];

        for (var i = 0; i < bots.length; i++) {
            var bot = bots[i];
            var name = bot[0];

            // check channel count
            if (bot[1] < this.channelMinimum) {
                continue;
            }

            // check last activity
            if (bot[2] < this.lastOnline) {
                continue;
            }

            // check whitelist
            if (this.whitelist.includes(name)) {
                continue;
            }

            // check greylist
            if (this.greylist.includes(name)) {
                continue;
            }

            filteredBots.push(name);
        }

        fs.writeFileSync('list.json', JSON.stringify(filteredBots, null, 2), 'utf8');
        console.log('The list.json now contains ' + filteredBots.length + ' usernames.');
    }
}

new UpdateBotList();