var video = document.querySelector('video');

window.addEventListener("load", function() {
	video.autoplay = false; // once loaded

	// buttons
    const play_button = document.querySelector('#play');
    const pause_button = document.querySelector('#pause');

    const slow_down = document.querySelector('#slower');
    const faster = document.querySelector('#faster');
	
    const skip = document.querySelector('#skip');
	// volume settings
	const mute = document.querySelector('#mute');
    const slider = document.querySelector('#slider');
    const volume = document.querySelector('#volume');
	// filters
    const vintage = document.querySelector('#vintage');
    const orig = document.querySelector('#orig');

	
    play_button.addEventListener('click', function() {
		// play the video
        video.play();
		// initialize the volume
        volume.textContent = video.volume;
    });

    pause_button.addEventListener('click', function() {
		// pause the video
        video.pause();
    });

    slow_down.addEventListener('click', function() {
		// decrease the playback by 10%
        video.playbackRate -= 0.10;

        console.log("New speed:", video.playbackRate);
    });

    faster.addEventListener('click', function() {
		// increase playback by 10%
        video.playbackRate += 0.10;
        console.log("New speed:", video.playbackRate);
    });

	// skip button
    skip.addEventListener('click', function() {
        video.currentTime += 10;
        if (!(video.currentTime <= video.duration)) {
            video.currentTime = 0;
        }
        console.log("Current location:", video.currentTime);
    });

	// mute functionality 
    mute.addEventListener('click', function() {
        video.muted = !video.muted;
		if (video.muted){mute.textContent = "Unmute"}
		else {mute.textContent = "Mute"}
    });

    slider.addEventListener('input', function() {
		// 
        video.volume = slider.value / 100;
        volume.textContent = video.volume;
    });

    vintage.addEventListener('click', function() {
        video.classList.add('oldSchool');
    });

    orig.addEventListener('click', function() {
        video.classList.remove('oldSchool');
    });
});


