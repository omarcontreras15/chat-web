var activo=false;

try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.lang = "es-CO";
    recognition.continuous = true;
    recognition.interimResults = true;
}
catch (e) {
    console.error(e);
    alert("El plugin de dictado por voz no es compatible con la versión de este navegador");
}


recognition.onresult = function (event) {

    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far. 
    // We only need the current one.
    var current = event.resultIndex;

    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;
    $("#mensaje").val(transcript);
}



$("#btn-microfono").on("click", function () {
    if(activo==false){
        recognition.start();
        $("#btn-microfono").attr("src", "public/images/mic-activado.png");
        activo=true;
    }else{
        recognition.abort();
        $("#btn-microfono").attr("src", "public/images/mic.png");
        activo=false;
    }
});