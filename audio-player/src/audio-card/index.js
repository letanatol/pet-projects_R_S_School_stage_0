import { playList } from './constants.js';
import { AudioCardView } from './view.js';
class AudioCard {
  constructor(track, playList) {
    this.track = track;
    this.playList = playList;
    this.track.audio.currentTime = this.track.currentTime || 0;
    this.isPlayedTrack = false;
    this.index = track.id;
    this.timerId = null;
    this.audioCardView = new AudioCardView(
      this.track,
      this.handlePlayPause,
      this.handleNextStep,
      this.handlePrevStep,
      this.handleChange,
      this.saveToLocaleStorage,
    );
  }

  saveToLocaleStorage = () => {
    this.track.currentTime = this.track.audio.currentTime;

    localStorage.setItem('currentTrack', JSON.stringify(this.track, ['id', 'currentTime']));
  }

  handlePlay = () => {
    this.timerId = setInterval(this.audioCardView.renderTimeCodes, 0);
    this.track.audio.play();
    this.isPlayedTrack = true;
    this.audioCardView.renderControls(this.isPlayedTrack);
  }

  handleStop = () => {
    clearInterval(this.timerId);
    this.track.audio.pause();
    this.isPlayedTrack = false;
    this.audioCardView.renderControls(this.isPlayedTrack);
  }

  handlePlayPause = () => {
    if (!this.isPlayedTrack) {
      this.handlePlay();
    } else {
      this.handleStop();
    }
  }

  createNewAudio = () => {
    this.handleStop();

    const newTrack = new AudioCard(this.playList[this.index], this.playList);

    this.audioCardView.removeEvents();
    newTrack.render();
    newTrack.handlePlay();
  }

  handlePrevStep = () => {
    if (this.index === 0) {
      this.index = this.playList.length - 1
    } else {
      this.index -= 1
    }

    this.createNewAudio();
  }

  handleNextStep = () => {
    if (this.index === this.playList.length - 1) {
      this.index = 0;
    } else {
      this.index += 1
    }

    this.createNewAudio();
  }

  handleChange = (e) => {
    this.track.audio.currentTime = e.target.value;
  }

  render = () => {
    this.audioCardView.render();
    this.audioCardView.handleEvents();
  }
}

const { id, currentTime } = JSON.parse(localStorage.getItem('currentTrack')) || playList[0];
const audioCard = new AudioCard({ ...playList[id], currentTime }, playList);

audioCard.render();


console.log('');