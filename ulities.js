function inputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const inputFloat = parseFloat(inputValue)
    return inputFloat;
}

function textInnerValue(textId) {
    const text = document.getElementById(textId);
    const textValue = text.innerText;
    const textParse = parseFloat(textValue)
    return  textParse;
}

function setelement(elementId,value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}