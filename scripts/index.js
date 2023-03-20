var senderName = "Alguém";

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const possibleSenderName = params[queryParamKeys.senderName];
if(possibleSenderName) 
    senderName = possibleSenderName;

const senderNameEl = document.querySelector("#sender-name");
senderNameEl.innerHTML = senderName;

function downloadFakeVirus(){
    var filename = params[queryParamKeys.fakeVirusFileName] || "trojan-virus.xml";
    var pom = document.createElement("a");
    var blob = new Blob(["Mané"], { type: "text/plain" });
    
    pom.setAttribute("href", window.URL.createObjectURL(blob));
    pom.setAttribute("download", filename);
    
    pom.dataset.downloadurl = ["text/plain", pom.download, pom.href].join(
      ":"
    );
    pom.draggable = true;
    pom.classList.add("dragout");
    
    pom.click();
}

const initialEl = document.querySelector("#initial");
const finalEl = document.querySelector("#final");
const finalMessageEl = document.querySelector("#final-message");

var message = "Vírus descarregado com sucesso no aparelho";
const possibleMessage = params[queryParamKeys.fakeVirusFileName];
if(possibleMessage) message = possibleMessage;

function showFinalMessage(){
    finalMessageEl.innerHTML = message;
    initialEl.style.display = "none";
    finalEl.style.display = "flex";
}

const createTooEl = document.querySelector("#create-too");

const downloadButton = document.querySelector("#see-image");
downloadButton.addEventListener("click", () => {
    downloadFakeVirus();
    document.title = "Perdeu!"
    setTimeout(() => {
        showFinalMessage();
    }, 2000);
    setTimeout(() => {
        finalEl.style.animation = "none";
        createTooEl.style.display = "block";
    }, 6000);
});
