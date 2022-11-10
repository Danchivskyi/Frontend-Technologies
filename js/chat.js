// JS dla New messages (chatbox) 
//Tworzenie zmiennych
var messages = [], 
  lastUserMessage = "", 
  botMessage = "", 
  botName = 'Chatbot', 
  botLastName = 'Anonymous'
  talking = true; 

function chatbotResponse() { //Funckja odpowiedzi
  talking = true; //ustawienie rozmowe (zmienna, ktora odpowiada za mowienie chatbox) na true
  botMessage = "Siema, ziomeczku";  // ustawienie domyslnej odpowiedzi

  if (lastUserMessage === 'Hi' || lastUserMessage =='Hello' || lastUserMessage =='siema') { // instrukcja warunkowa ( petla :) ), sprawdzajaca na jakie slowa kluczowe bedzie odpowiadac bot
    const hi = ['Hi','Siema','Czesc'] // ustawienia wszystkich mozliwych odpowiedzi
    botMessage = hi[Math.floor(Math.random()*(hi.length))];; // zwracanie odpowiedzi w okienku dialogowym
    // floor() - zaokrągla liczbę w dół do najbliższej liczby całkowitej
    // random() - generowanie liczb losowych 
  }

  if (lastUserMessage === 'Co tam' || lastUserMessage =='Jak tam' || lastUserMessage =='co robisz') { //sprawdzanie na jakie slowa kluczowe bedzie odpowiadac bot
    const hi = ['A, dobrze','super','elegancko'] //ustawienia wszystkich mozliwych odpowiedzi
    botMessage = hi[Math.floor(Math.random()*(hi.length))];; // zwracanie odpowiedzi w okienku dialogowym
  }

  if (lastUserMessage === 'name') { //sprawdzanie na jakie slowa kluczowe bedzie odpowiadac bot 
    botMessage = 'My name is ' + botName; // ustawienia wszystkich mozliwych odpowiedzi
  }

  if(lastUserMessage === 'nazwisko'){ //sprawdzanie na jakie slowa kluczowe bedzie odpowiadac bot 
    botMessage = 'Moje nazwisko ' + botLastName; // ustawienia wszystkich mozliwych odpowiedzi
  }
}

function newEntry() { //Funkcja nowego wejscia
  if (document.getElementById("chatbox").value != "") { //sprawdzanie zwracania pierwszego potomka z okreslonym identyfikatorem chatbox 
    lastUserMessage = document.getElementById("chatbox").value; //jesli tak, to zmienna lastUserMessage pobiera element (zmienna) chatbox
    document.getElementById("chatbox").value = ""; //zwracanie pierwszego potomka z okrelonym unikatowym identyfikatorem
    messages.push(lastUserMessage); //dodanie elementu na koniec tablicy i zwracanie jej nowej dlugosci
    chatbotResponse(); //wywolanie funkcji odpowiedzi
    messages.push("<b>" + botName + ":</b> " + botMessage); //dodanie wiadomosci wedlug zasady: imie + wiadomosc
    Speech(botMessage); //wlaczanie odpowiedzi glosowej 
    for (var i = 1; i < 8; i++) { //sprawdzanie dla wiadomosci
      if (messages[messages.length - i]) //jesli wiadomosc jest okreslonej dlugosci
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i]; //to dokument jest zwracany
    }
  }
}

function Speech(say) { //funkcja odpowiedzi glosowej
  if ('speechSynthesis' in window && talking) { //jesli interfejs kontrolera uslugi mowy jest w okienku dialogowym i jest wlaczony 
    var utterance = new SpeechSynthesisUtterance(say); //to zmienna tworzy nowego reprezenta mowy, ktory zawira tresc, jaka usluga mowy powinna przeczytac
    speechSynthesis.speak(utterance); //i odbywa sie na koniec sama rozmowa (mowienie) reprezentanta mowy
  }
}

document.onkeypress = keyPress; //zdarzenie, gdy uzytkownik nacisnie klawisz
function keyPress(e) { //funckja nacisniecia klawisza
  var x = e || window.event; //jesli zdarzenie jest wlaczone w okienku dialogowym 
  var key = (x.keyCode || x.which); //i jest pokazane funckji ze jest wlaczone
  if (key == 13 || key == 3) { // to odbywa sie sprawdzanie klucza 
    newEntry(); //inicjacja metody
  }
  if (key == 38) { //dalej obywa sie sprawdzanie 
    console.log('hi') // i wyswietlenie w okienku wiadomosci
  }
}

function placeHolder() { //funckja ustwienia symbolu zastepczego
  document.getElementById("chatbox").placeholder = ""; //zwracanie elementu chatbox
}