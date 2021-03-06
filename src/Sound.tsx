import Settings from './settings';

export default class Sound {
  private audio!: HTMLAudioElement;
  constructor(song: string) {
    const audioPath = `${Settings.backend}/songs/${song}.mp3?${Math.random()}`;
    this.audio = new Audio(audioPath);
  }

  public fadeOut = () => {
    if (this.audio.volume > 0.01) {
      this.audio.volume -= 0.01;
      setTimeout(this.fadeOut, 1);
    } else {
      this.audio.pause();
    }
  };
  public play = () => {
    this.audio.play();
  };

  public pause = () => {
    this.audio.pause();
  };

  public canPlay = () => {
    return this.audio.duration;
  };
}
