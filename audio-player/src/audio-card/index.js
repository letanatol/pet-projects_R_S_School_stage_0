import { playList } from './constants.js';
import { AudioCardView } from './view.js';
class AudioCard {
  constructor(track, playList) {
    this.track = track;
    this.playList = playList;
    this.isPlayedTrack = false;
    this.index = track.id;
    this.track.audio.currentTime = this.track.audio.currentTime || 0;
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
}


const { id, currentTime } = JSON.parse(localStorage.setItem('currentTrack')) || playList[0];
const audioCard = new AudioCard({ ...playList[id], currentTime }, playList);
