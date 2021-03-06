import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()] });

const buttonPlay: HTMLElement = document.getElementById('play');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.getElementById('mute');
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((err) => {
    console.error(err.message);
  });
}
