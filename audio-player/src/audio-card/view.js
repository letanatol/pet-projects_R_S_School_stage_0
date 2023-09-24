import {getTimeCodeFromNum} from './helpers.js';


export class AudioCardView {
    constructor(track, onPlayPause, onNextStep, onPrevStep, onChange, onSave) {
        this.track = track;
        this.onPlayPause = onPlayPause;
        this.onNextStep = onNextStep;
        this.onPrevStep = onPrevStep;
        this.onChange = onChange;
        this.onSave = onSave;
    }

    renderControls = (isPlayedTrack) => {
        controlsPlayPause.src = `../assets/icons/controls/${isPlayedTrack ? 'pause' : 'play'}.png`;
        audioСardСover.classList.toggle('audio-card__cover_scale');
    }

    renderTimeCodes = () => {
        songCurrentTime.textContent = getTimeCodeFromNum(this.track.audio.currentTime);
        songDurationTime.textContent = getTimeCodeFromNum(this.track.audio.duration);
    }

    handleEvents = () => {
        controlsPlayPause.addEventListener('click', this.onPlayPause);
        controlsNext.addEventListener('click', this.onNextStep);
        controlsPrev.addEventListener('click', this.onPrevStep);
        progressBar.addEventListener('change', this.onChange);
        song.addEventListener("loadeddata", this.renderTimeCodes);


        window.addEventListener('beforeunload', this.onSave);
    }

    removeEvents = () => {
        controlsPlayPause.removeEventListener('click', this.onPlayPause);
        controlsNext.removeEventListener('click', this.onNextStep);
        controlsPrev.removeEventListener('click', this.onPrevStep);
        progressBar.removeEventListener('change', this.onChange);
        song.removeEventListener("loadeddata", this.renderTimeCodes);
    }

    render = () => {
        document.body.innerHTML = (
            `
            <img src="${this.track.imgPath}" id="background">
            <audio src="${this.track.audioSrc}" id="song"></audio>
            <div class="audio-card">
                <div class="audio-card__controls"></div>
                <img 
                    src="${this.track.imgPath}" 
                    class="audio-card__cover" 
                    id="audioСardСover"
                >
                <img 
                    src="../assets/icons/controls/play.png" 
                    class="audio-card__controls-play-pause" 
                    id="controlsPlayPause"
                >
                <img 
                    src="../assets/icons/controls/forward.png" 
                    class="audio-card__controls-next" 
                    id="controlsNext"
                >
                <img 
                    src="../assets/icons/controls/backward.png" 
                    class="audio-card__controls-prev" 
                    id="controlsPrev"
                >
                <div class="audio-card__singer">${this.track.singerName}</div>
                <div class="audio-card__song-title">${this.track.songName}</div>
                <input 
                    type="range" 
                    class="audio-card__song-range" 
                    id="progressBar" 
                    min="0" 
                    max="${this.track.audio.duration}" 
                    value="${this.track.audio.currentTime}" 
                >             
                <div class="audio-card__song-time audio-card__song-time--current" id='songCurrentTime'>${this.track.currentTime}</div>
                <div class="audio-card__song-time audio-card__song-time--duration" id='songDurationTime'>${this.track.duration}</div>
            </div>
        `
        );
    }

}
