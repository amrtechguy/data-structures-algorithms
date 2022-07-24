export function log(text)
{
    const logs = document.querySelector("#logs");
    logs.innerHTML += "<p>> " + text + "</p>"
}