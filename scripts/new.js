const senderNameEl = document.querySelector("#sender-name");
const fileNameEl = document.querySelector("#fake-virus-file");
const finalMessageEl = document.querySelector("#final-message");
const generateLinkEl = document.querySelector("#generate-link");
const linkResultEl = document.querySelector("#link-result");
const linkContainerEl = document.querySelector("#link-container");

function generateLink(){
    const senderNameValue = senderNameEl.value;
    const fileNameValue = fileNameEl.value;
    const finalMessageValue = finalMessageEl.value;
    
    const paramsObj = {};
    
    if(senderNameValue) paramsObj[queryParamKeys.senderName] = senderNameValue;
    if(fileNameValue) paramsObj[queryParamKeys.fakeVirusFileName] = fileNameValue;
    if(finalMessageValue) paramsObj[queryParamKeys.finalMessage] = finalMessageValue;
    
    var params = "";
    if(Object.keys(paramsObj).length > 0)
        params = (new URLSearchParams(paramsObj)).toString();
    
    return window.location.protocol + "//" + window.location.host + '/index.html?' + params;
}

generateLinkEl.addEventListener("click", () => {
    linkContainerEl.style.display = "flex";
    const link = generateLink();
    linkResultEl.innerHTML = link;
    window.navigator.clipboard.writeText(link);
})