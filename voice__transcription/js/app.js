
const initGetVoice = () => {
    console.log('Ingresamos??');
    console.info(window.speechSynthesis.getVoices());
    const synth = window.speechSynthesis;
    console.log(synth);
    voices = synth.getVoices();
    console.log(voices);
    // for(i = 0; i < voices.length ; i++) {
    //     console.log( `${voices[i].name}  (${voices[i].lang})` );
    
    //     if(voices[i].default) {
    //       console.log( ' -- DEFAULT' );
    //     }
    // }
}
const initSpeechRecognition = () => {
    const voiceResult = document.querySelector(`#voiceResult`);
    const recognition = new webkitSpeechRecognition();
    if( recognition === undefined ) {
        voiceResult.innerHTML = `No se pude iniciar el reconocimiento de voz`;
        return false;
    }
    recognition.lang = 'es-MX';
    recognition.continuous = true;
    recognition.interimResults = true; // Permite la la previsualización del texto
    recognition.onresult = event => {
        voiceResult.innerHTML = ``
        for( const result of event.results )
        {
            console.info( result[0] );
            // console.info( result[0].transcript );
            const paragraph = document.createElement('p');
            paragraph.innerHTML = result[0].transcript.trim();
            voiceResult.appendChild(paragraph);
        }
    }
    recognition.onspeechend = () => { recognition.stop(); }
    recognition.onnomatch = function(event) {
        voiceResult.innerHTML = 'I didnt recognise that color.';
    }
    recognition.onerror = function(event) {
        voiceResult.innerHTML = 'Error occurred in recognition: ' + event.error;
    }

    document.querySelector('#startSpeech').addEventListener('click', () => recognition.start() );
    document.querySelector('#stopSpeech').addEventListener('click', () => recognition.stop() );
}

initSpeechRecognition()
// setTimeout(() => {
//     initGetVoice()
// }, 2000);