const watson = require('watson-developer-cloud');
const fs = require('fs');

const speechToText = new watson.SpeechToTextV1({
  username: 'e7434103-17e8-4623-94ac-a88c9a38dc0a',
  password: 'i68lQJUtt6ES'
});

var params = {
  // From file
  audio: fs.createReadStream('test.wav'),
  'content_type': 'audio/wav; rate=44100; channels=2',
  model: 'en-US_NarrowbandModel'
};

// to playback this file:
// sox -b 16 -e signed -c 2 -r 14400 test.wav -d
speechToText.recognize(params, function(err, res) {
  if (err)
    console.log(err);
  else
//    console.log(JSON.stringify(res, null, 2));
    console.log("File Reads: " + res.results[0].alternatives[0].transcript);
});
