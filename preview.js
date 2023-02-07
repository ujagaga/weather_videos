function setupVideoQueue(start_id, end_id){
    var startVideo = document.getElementById(start_id);
    var endVideo = document.getElementById(end_id);

    var duration = (startVideo.duration / startVideo.playbackRate - 2) * 1000;

    setTimeout(() => {
        startVideo.classList.remove('showing');
        startVideo.classList.add('fading');
        endVideo.classList.remove('fading');
        endVideo.classList.add('showing');
        endVideo.play();
    }, duration)
}
