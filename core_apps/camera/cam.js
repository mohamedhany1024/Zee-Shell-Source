function errorCallback(e) {
            console.log('Error', e)
         }

         navigator.getUserMedia({video: true, audio: true}, (localMediaStream) => {
            var video = document.querySelector('video')
            video.src = window.URL.createObjectURL(localMediaStream)
            video.onloadedmetadata = (e) => {
               // Ready to go. Do some stuff.
            };
         }, errorCallback)
