import MediaPlayer from '../MediaPlayer';

class AutoPause {
  private threshold: number;
  private pausedByVisibility: boolean;
  private pausedByIntersection: boolean;
  player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.pausedByVisibility = false;
    this.pausedByIntersection = false;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, { threshold: this.threshold });
    observer.observe(player.media);

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      if (this.pausedByIntersection) {
        this.player.play();
        this.pausedByIntersection = false;
      }
    } else {
      if (!this.player.media.paused) {
        this.player.pause();
        this.pausedByIntersection = true;
      }
    }
  }

  private handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';

    if (isVisible) {
      if (this.pausedByVisibility) {
        this.player.play();
        this.pausedByVisibility = false;
      }
    } else {
      if (!this.player.media.paused) {
        this.player.pause();
        this.pausedByVisibility = true;
      }
    }
  }
}

export default AutoPause;
