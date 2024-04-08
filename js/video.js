var video = document.querySelector('video');

window.addEventListener("load", function() {
	video.autoplay = false; // once loaded

	// buttons
    let play_button = document.querySelector('#play');
    let pause_button = document.querySelector('#pause');

    let slow_down = document.querySelector('#slower');
    let faster = document.querySelector('#faster');
	
    let skip = document.querySelector('#skip');
	// volume settings
	let mute = document.querySelector('#mute');
    let slider = document.querySelector('#slider');
    let volume = document.querySelector('#volume');
	// filters
    let vintage = document.querySelector('#vintage');
    let orig = document.querySelector('#orig');

	
    play_button.addEventListener('click', function() {
		// play the video
        video.play();
		// initialize the volume
        volume.textContent = video.volume * 100 + "%";
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
        volume.textContent = video.volume * 100 + "%";
    });

    vintage.addEventListener('click', function() {
        video.classList.add('oldSchool');
    });

    orig.addEventListener('click', function() {
        video.classList.remove('oldSchool');
    });
});


