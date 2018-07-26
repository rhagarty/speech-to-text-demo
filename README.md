# speech-to-text-demo

## Tests

The repo attempts to test the specific function of connecting a microphone with the Speech-to-Text service.

To use: clone locally, then add your Speech-to-Text credentials to your local `.env` file.
```
git clone git@github.com:rhagarty/speech-to-text-demo.git

# cd to install location
cd speech-to-text-demo

# install audio utilities
brew install sox

# set credentials for Speech-to-Text service
cp env.sample .env
vi .env
```

### `fullStream.js`

Directly pipes microphone input stream to speech-to-text service

Works:
* Edit package.json and set `watson-developer-cloud` to `^2.2.0`.
* `npm install`
* `npm ls watson-developer-cloud` to ensure correct version is installed.
* `npm start` OR `node fullStream.js`
* talk into microphone after prompt, and speech will be converted to text and printed to the console.

Hangs:
* Edit package.json and set `watson-developer-cloud` to `^3.7.0`.
* `npm install`
* `npm ls watson-developer-cloud` to ensure correct version is installed.
* `npm start` OR `node fullStream.js`
* prompt is displayed, then app hangs


### `readFromFile.js`

Streams audio from file to speech-to-text service

Works:
* Edit package.json and set `watson-developer-cloud` to `^3.5.0`.
* `npm install`
* `npm ls watson-developer-cloud` to ensure correct version is installed.
* `node readFromFile.js`
* audio file is read, converted to text, and printed to the console.

## To create test wav files (on OSX)

```
brew install sox
sox -d -b 16 -e signed -c 2 -r 14400 temp.wav     // record 
sox -b 16 -e signed -c 2 -r 14400 temp.wav -d     // playback
```
