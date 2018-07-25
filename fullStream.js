const watson = require('watson-developer-cloud');
const mic = require('mic');

const micParams = {
  rate: 44100,
  channels: 2,
  debug: false,
  exitOnSilence: 6
}

// set up streaming from the mic
const micInstance = mic(micParams);
const micInputStream = micInstance.getAudioStream();
micInstance.start();

console.log('Watson is listening, you may speak now.');

const speechToText = watson.speech_to_text({
  username: 'e7434103-17e8-4623-94ac-a88c9a38dc0a',
  password: 'i68lQJUtt6ES',
  version: 'v1'
});

// pipe the mic stream to Speech to Text service
const textStream = micInputStream.pipe(
  speechToText.createRecognizeStream({
    content_type: 'audio/l16; rate=44100; channels=2'
  })).setEncoding('utf8');

textStream.on('data', (user_speech_text) => {
  console.log('Watson hears:', user_speech_text);
});
