(function WebCam() {

  var mediaOptions = {
    audio: false,
    video: true
  };
  // TODO move these into different functions so that can make requests on demand
  var makeVideo16by9 = function() {
    return Math.round((window.innerWidth / 16) * 9);
  };

  if (!navigator.getUserMedia) {
    navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  }
  // Testing again incase nothing was found
  if (!navigator.getUserMedia) {
    return console.log('getUserMedia is not supported in this bowser');
  }

  var success = function success(stream) {
    var video = document.querySelector('#player');
    video.height = makeVideo16by9();
    video.width = window.innerWidth;
    // TODO implement server to distritube the data to other subscribers
    video.src = window.URL.createObjectURL(stream);
  };

  navigator.getUserMedia(mediaOptions, success, function(e) {
    console.debug(e);
  });

}());
