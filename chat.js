var messages = [], 
  lastUserMessage = "", 
  botMessage = "", 
  botName = 'Chatbot', 
  botLastName = 'Anonymous'
  talking = true; 

function chatbotResponse() {
  talking = true;
  botMessage = "Siema, ziomeczku"; 

  if (lastUserMessage === 'Hi' || lastUserMessage =='Hello' || lastUserMessage =='siema') {
    const hi = ['Hi','Siema','Czesc']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === 'Co tam' || lastUserMessage =='Jak tam' || lastUserMessage =='co robisz') {
    const hi = ['A, dobrze','super','elegancko']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === 'name') {
    botMessage = 'My name is ' + botName;
  }

  if(lastUserMessage === 'nazwisko'){
    botMessage = 'Moje nazwisko ' + botLastName;
  }
}

function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push(lastUserMessage);
    chatbotResponse();
    messages.push("<b>" + botName + ":</b> " + botMessage);
    Speech(botMessage);
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}

document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
  }
}

function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}