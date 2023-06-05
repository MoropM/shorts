
const btnPlay = document.querySelector(`#btn-play`)
const btnPlayIcon = document.querySelector(`#btn-play-icon`)
const btnPrev = document.querySelector(`#btn-prev`)
const btnNext = document.querySelector(`#btn-next`)
const musicName = document.querySelector(`#music-name`)
const musicAuthor = document.querySelector(`#music-author`)
const playerCurrentTime = document.querySelector(`#player-current-time`)
const playerDuration = document.querySelector(`#player-duration`)
const playerProgress = document.querySelector(`#player-progress`)
const audioPlayer = document.querySelector(`#audio-player`)

let currentMusic = 0;

const musics = [
    {
        name: "Tu Última Canción",
        author: "Autor 1",
        path: "../assets/music/tu-ultima-cancion.mp3",
    },
    {
        name: "Deja Una Rosa En Tu Balcon",
        author: "Autor 2",
        path: "../assets/music/deja-una-rosa-en-tu-balcon-video-oficial.mp3",
    },
    {
        name: "Enamorado De Ti",
        author: "Autor 3",
        path: "../assets/music/Enamorado_de_Ti.mp3",
    },
    {
        name: "Tonto Corazón",
        author: "Los Acosta",
        path: "../assets/music/LOS_ACOSTA_-_Tonto_Corazon_1990.mp3",
    },
    {
        name: "Mi Secreto",
        author: "Autor 5",
        path: "../assets/music/mi-secreto.mp3",
    },
];


const formatSecondsToMinutes = (seconds) => new Date(seconds*1000).toISOString().slice(14, 19);

const timeUpdate = () => {
    const { currentTime, duration } = audioPlayer;

    if( isNaN(duration) ) return;

    playerDuration.innerHTML = formatSecondsToMinutes(duration);
    playerCurrentTime.innerHTML = formatSecondsToMinutes(currentTime);
    playerProgress.max = duration;
    playerProgress.value = currentTime;
}

const updatePlayer = () => {
    const music = musics[currentMusic];
    const { name, author, path } = music;
    musicName.innerHTML = name;
    musicAuthor.innerHTML = author;
    audioPlayer.src = path;
}

const togglePlayMusic = () => {
    if( audioPlayer.paused ) {
        audioPlayer.play();
        btnPlayIcon.classList.replace(`bi-play-fill`, `bi-pause-fill`);
    }
    else {
        audioPlayer.pause();
        btnPlayIcon.classList.replace(`bi-pause-fill`, `bi-play-fill`);
    }
}

const changeMusic = ( next = true ) => {
    if( next && currentMusic < musics.length -1 ) currentMusic++;
    else if( !next && currentMusic > 0 ) currentMusic--;
    else return;

    console.log( currentMusic );

    updatePlayer();
    togglePlayMusic();
}

btnPlay.addEventListener(`click`, () => togglePlayMusic() );
btnPrev.addEventListener(`click`, () => changeMusic(false) );
btnNext.addEventListener(`click`, () => changeMusic() );
audioPlayer.addEventListener(`timeupdate`, () => timeUpdate() );

window.onload = () => updatePlayer();

console.log(  musics  );