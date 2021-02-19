# Twitch Bot List

The list of bots is currently extracted from [Twitch Insights](https://twitchinsights.net/bots). The purpose of this list is for use with the [Ban Twitch Bots](https://ban-twitch-bots.sirmre.com/) website. Thank you for providing this information <3.

The reason for having this list is to allow people to ban them in their channels so they do not receive subs gifted by the community. The accounts found on the list are not necessarily actual bots, but are in a lot of channels at the same time, making them essentially a "bot" in these channels.

## How to use these lists

**To avoid hammering Twitch Insights website, eating up their bandwidth**, please feel free to use this repository as a "CDN" of sorts or make your own. I have included a very simple script which takes the data from Twitch Insights and updates the list.json see [parse.js](https://github.com/MrEliasen/twitch-bot-list/blob/master/parse.js).

This is an example of how you can load the list from the browser:

```js
fetch('https://mreliasen.github.io/twitch-bot-list/list.json', {
    method: 'GET',
})
.then((response) => {
    // parse the response body as json
    return response.json();
})
.then((response) => {
    // do something with the list here.
    console.log(response);
})
```

## Greylisting

These are bots/accounts which MIGHT be ok not to ban. The list includes community bots and similar. You can opt in to ban thene on the website as these are not part of the default list.

## Whitelisting

These are bots/accounts which won't get added to the ban or grey list. These are all considered safe. These are for reference only and are not actually used in the website.

## Contributing

If you would would like to contribute, please see [CONTRIBUTING.md](https://github.com/MrEliasen/twitch-bot-list/blob/master/.github/CONTRIBUTING.md). Thank you!

## License

Release under the Creative Commons Attribution 3.0 Unported (CC BY 3.0) (for [Humans](https://creativecommons.org/licenses/by/3.0/), for [Lawyers](https://github.com/MrEliasen/twitch-bot-list/blob/master/LICENSE.md)).
