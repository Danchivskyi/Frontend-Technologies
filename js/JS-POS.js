// JS dla pliku buy.html, ktory odpowiada za wybranie biletow
var products = {
  // Ticket List 
  list : {
    1 : { name:"Octobeer ticket", img:"ticket.jpg", price: 5 },
    2 : { name:"Disco", img:"disco.jpg", price:  10 },
    3 : { name:"Hip Hop Festiwal", img:"festiwal.jpg", price: 15 },
    4 : { name:"Piosenka w melonku", img:"piosenka.jpg", price: 15 },
    5 : { name:"Bilet na pokazy", img:"tiketik.jpg", price: 10 },
  },

  // Rysowanie Listy Ticketow
  draw : () => {
    // Target Wrapper
    const wrapper = document.getElementById("poslist");

    // Create Ticket HTML
    for (let pid in products.list) {
      // Current Ticket - Aktualny Ticket
      let p = products.list[pid],
          pdt = document.createElement("div"),
          segment;

      // Ticket Segment - Segment Ticketow
      pdt.className = "pwrap";
      pdt.onclick = () => { cart.add(pid); }; //jesli jest wcisniety wybrany ticket to dodanie do sekcji wybranej
      wrapper.appendChild(pdt); //dodanie przekazanego wezla za ostatnim 'dzieckiem' w danym wezle i zwraca go

      // Image
      segment = document.createElement("img"); //tworzenie elementu zdjecia
      segment.className = "pimg"; // pobieranie i ustawieanie wartosci atrybutu klasy
      segment.src = "images/" + p.img; // dodanie image do odpowiedniego miejsca
      pdt.appendChild(segment); //dodanie przekazanego wezla za ostatnim 'dzieckiem' w danym wezle i zwraca go

      // Name
      segment = document.createElement("div"); //tworzenie elementu name
      segment.className = "pname"; // pobieranie i ustawieanie wartosci atrybutu klasy
      segment.innerHTML = p.name; // segment pobiera innerHTML lub ustawia znacznik HTML zawarty w elemencie
      pdt.appendChild(segment); //dodanie przekazanego wezla za ostatnim 'dzieckiem' w danym wezle i zwraca go

      // Price
      segment = document.createElement("div"); //tworzenie elementu price
      segment.className = "pprice"; // pobieranie i ustawieanie wartosci atrybutu klasy
      segment.innerHTML = "PLN" + p.price; // segment pobiera innerHTML lub ustawia znacznik HTML zawarty w elemencie (ustawia odpowiednia linijke napisu)
      pdt.appendChild(segment); //dodanie przekazanego wezla za ostatnim 'dzieckiem' w danym wezle i zwraca go
    }
  }
};
window.addEventListener("DOMContentLoaded", products.draw); // wywolanie funkcji, gdy zostanie wykryte jakies zdarzenie (w ty, wypadku rysowanie ticketow)

var cart = {
  // Properties - Wlasciwosci
  items : {}, // Aktyalne pozycji w tzw. koszyku 

  // Zapisywanie tych items w tzw. magazynie 
  save : () => {
    localStorage.setItem("cart", JSON.stringify(cart.items)); //Ustawianie tych pozycji w tzw. magazynie
  },

  // Zaladowanie cart w pamieci lokalnej (tzw. magazyn - local_storage)
  load : () => {
    cart.items = localStorage.getItem("cart"); //zwracanie wartoci klucza lub null jesli on nie istnieje po przekazaniu nazwy klucza 
    if (cart.items == null) { cart.items = {}; } // sprawdzanie czy klucz jest pusty (nie istnieje)
    else { cart.items = JSON.parse(cart.items); } //analizowanie danych (wymiana danych z/do serwera www) 
  },

  // Nuke Cart
  nuke : () => {
    cart.items = {}; //Tworzenie listy  
    localStorage.removeItem("cart"); // usuniecie tego klucza z obiektu localStorage
    cart.list(); //wywolanie
  },

  // Inicjalizacja, Przywracanie poprzedniej sesji 
  init : () => {
    cart.load(); // zaladowanie elementow 
    cart.list(); // wywolanie listy
  },

  // Wyswietlenie aktualnych pozycji 
  list : () => {
    // Rysowanie tzw. koszyka 
    var wrapper = document.getElementById("poscart"), // zwracanie elementu z okreslonym unikatowym identyfikatorem
        item, part, pdt,
        total = 0, subtotal = 0,
        empty = true;
    wrapper.innerHTML = "";
    for (let key in cart.items) { //sprawdzanie czy klucz jest w tej liscie pozycji 
      if (cart.items.hasOwnProperty(key)) { empty = false; break; } //sprawdzanie czy obiekt posiada wlasciwosc o podanej nazwie 
    }

    // Jesli tzw. wozek jest pusty
    if (empty) { //jesli jest pusty 
      item = document.createElement("div"); //to tworzymy element 
      item.innerHTML = "Cart is empty"; // z odpowiednia nazwa
      wrapper.appendChild(item); //dodaje przekazany wezel za ostatnim dzieckiem w danym wezle i zwraca referencje do przekazanego wezla 
    }

    // Jesli tzw. wozek nie jest pusty - Lista Itemow (pozycji)
    else {
      for (let pid in cart.items) {
        // Current Item  - Aktualna pozycja
        pdt = products.list[pid];
        item = document.createElement("div"); // tworzymy element
        item.className = "citem"; // pobieranie i ustawieanie wartosci atrybutu klasy
        wrapper.appendChild(item); //dodaje przekazany wezel za ostatnim dzieckiem w danym wezle i zwraca referencje do przekazanego wezla 

        // Item Name  
        part = document.createElement("span"); // tworzymy element span 
        part.innerHTML = pdt.name; // segment pobiera innerHTML lub ustawia znacznik HTML zawarty w elemencie
        part.className = "cname"; // pobieranie i ustawieanie wartosci atrybutu klasy
        item.appendChild(part); //dodaje przekazany wezel za ostatnim dzieckiem w danym wezle i zwraca referencje do przekazanego wezla

        // Remove
        part = document.createElement("input"); // tworzenie elementu input
        part.type = "button"; //ustawianie typu zmiennej 
        part.value = "X"; // zwraca tablice wlasnych wyliczanych wartosci wlasciwosci danego obiektu w tej samej kolejnosci
        part.className = "cdel"; // part pobiera i ustawia wartosc class attribute okreslonego elementu 
        part.onclick = () => { cart.remove(pid); }; //przy kliknieciu odbywa sie usuwanie elementu
        item.appendChild(part); //dodaje przekazany wezel za ostatnim dzieckiem w danym wezle i zwraca referencje do przekazanego wezla

        // Quantity - Ilosc
        part = document.createElement("input"); //tworzenie elementu input 
        part.type = "number"; // ustawianie (przypisanie) typu dla zmiennej 
        part.min = 0; // nadawanie wartosci 
        part.value = cart.items[pid];  // zwraca tablice wlasnych wyliczanych wartosci wlasciwosci danego obiektu w tej samej kolejnosci
        part.className = "cqty"; // part pobiera i ustawia wartosc class attribute okreslonego elementu 
        part.onchange = function () { cart.change(pid, this.value); }; // gdy wartosc elementu zostala zmieniona to odbywa sie zmiana parametrow
        item.appendChild(part); //dodaje przekazany wezel za ostatnim dzieckiem w danym wezle i zwraca referencje do przekazanego wezla

        // Subtotal - Suma czesciowa
        subtotal = cart.items[pid] * pdt.price; // wzor na obliczanie sumy czesciowej
        total += subtotal; // przypisanie tej sumy do wyniku koncowego
      }

      // Total Amount - Laczna Kwota  
      item = document.createElement("div"); //tworzenie elementu div 
      item.className = "ctotal"; // item pobiera i ustawia wartosc class attribute okreslonego elementu 
      item.id = "ctotal"; // item pobiera i ustawia wartosc id okreslonego elementu 
      item.innerHTML ="TOTAL: PLN" + total; // segment pobiera innerHTML lub ustawia znacznik HTML zawarty w elemencie
      wrapper.appendChild(item); // dodaje przekazany wezel za ostatnim dzieckiem w danym wezle i zwraca referencje do przekazanego wezla

      // Empty Button - Pusty Przycisk 
      item = document.createElement("input"); // tworzy element input
      item.type = "button"; //  ustawia (przypisanie) typu dla zmiennej
      item.value = "Empty"; // zwraca puste wartosci
      item.onclick = cart.nuke; // przy kliknieciu odbywa sie zdarzenie 
      item.id = "cempty"; // item pobiera i ustawia wartosc id okreslonego elementu
      wrapper.appendChild(item); // dodaje przekazany wezel za ostatnim dzieckiem w danym wezle i zwraca referencje do przekazanego wezla

      // Checkout Button - Przycisk Kasy
      item = document.createElement("input"); //tworzenie elementu 
      item.type = "button"; // ustawienie typu dla zmiennej
      item.value = "Checkout"; // zwraca tablice wlasnych wyliczanych wartosci wlasciwosci danego obiektu w tej samej kolejnosci
      item.onclick = cart.checkout; // przy zdarzeniu klikniecia odbywa sie pokazanie tego okna z kasa
      item.id = "ccheckout"; // item pobiera i ustawia wartosc id okreslonego elemntu
      wrapper.appendChild(item); // dodaje przekazany wezel za ostatnim dzieckiem w danym wezle i zwraca referencje do przekazanego wezla
    }
  },

  // Add Item to Cart - Dodanie elementu do tzw. koszyka
  add : (pid) => {
    if (cart.items[pid] == undefined) { cart.items[pid] = 1; } // instrukcja warunkowa, ktora sprawdza elemty czy one sa zdefiniowane, czy nie
    else { cart.items[pid]++; } // jesli nie to jest inkremenacja elemento 
    cart.save(); cart.list(); // i zapisywanie tych wszystkich elementow
  },

  // Change Quantity - Zmienianie Ilosci 
  change : (pid, qty) => {
    // Usuwanie Elementu
    if (qty <= 0) { // sprawdzanie warunku
      delete cart.items[pid]; // jesli zgadza sie to usuwamy 
      cart.save(); cart.list(); // i odbywa sie zapyisywanie aktualnych elementow
    }

    // Update Total Only - Aktualizacja Tylko Sumy 
    else { // jesli warunek nie jest spelniony to 
      cart.items[pid] = qty; // do listy elementow idzie przypisanie zmian 
      var total = 0; // ustawianie wartosci dla zmiennej 
      for (let id in cart.items) { // instrukcja warunkowa, ktora sprawdza elementy w liscie elementow
        total += cart.items[pid] * products.list[pid].price; // wyliczanie wedlug jakiego wzoru ma byc aktualizacja 
        document.getElementById("ctotal").innerHTML ="TOTAL: PLN" + total; // zwracanie pierwszego potomka z określonym unikatowym identyfikatorem 
      }
    }
  },

  // Remove Item From Cart - Usuniecie elementu z tzw. koszyka
  remove : (pid) => {
    delete cart.items[pid]; // usuwanie elementow
    cart.save(); cart.list(); // zapisywanie aktualnych elementow
  },

  // Checkout
  checkout : () => {
    orders.print(); // drukowanie tzw. zamowien (biletow)
    orders.add(); // dodanie do drukowanego zamowienia
  }
};
window.addEventListener("DOMContentLoaded", cart.init); // dzieki tej metodzie mozemy wywolac funkcje w momencie, kiedy zostanie wykryte jakies zdarzenie

var orders = {
  // Property 
  idb : window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
  posdb : null,
  db : null,

  // Init - Create Database
  init : () => {
    // Indexed Database Object
    if (!orders.idb) { // sprawdzanie czy zamowienia sa rozne
      alert("INDEXED DB IS NOT SUPPORTED ON THIS BROWSER!"); // wyswietlenie alertu na ekranie 
      return false; // zwracanie wartosci
    }

    // Open POS Database 
    orders.posdb = orders.idb.open("JSPOS", 1); // otwieranie zamowien 
    orders.posdb.onsuccess = () => { // otwieranie bazy danych
      orders.db = orders.posdb.result; // i nasluchiwanie succeess zdarzenie za pomoca 
    };

    // Create POS Database
    orders.posdb.onupgradeneeded = () => { // zdarzenie upgradeneeded jest wywolane, gdy podjeto probe otwarcia bazy danych o numerze wersji wyzszym niz jej biezaca wersja
      // Orders Store (Table)
      var db = orders.posdb.result,
      store = db.createObjectStore("Orders", {keyPath: "oid", autoIncrement: true}), // metoda tworzy i zwraca nowy IDBObjectStore
      index = store.createIndex("time", "time"); // ta metoda tworzy i zwraca nowy IDBIndex obiekt w polaczonej bazie danych

      // Order Item Store (Table)
      store = db.createObjectStore("Items", {keyPath: ["oid", "pid"]}), // metoda tworzy i zwraca nowy IDBObjectStore
      index = store.createIndex("qty", "qty"); // ta metoda tworzy i zwraca nowy IDBIndex obiekt w polaczonej bazie danych
    };

    // Error 
    orders.posdb.onerror = (err) => { // Zdarzenie onerror jest wywoływane w przypadku wystąpienia błędu podczas ładowania zewnętrznego pliku
      alert("ERROR CREATING DATABASE!"); // wyswietlenie alertu na ekranie
      console.error(err); // wypisanie tego alertu 
    };
  },

  // Add New Order 
  add : () => {
    // Insert Orders Store (Table)
    var tx = orders.db.transaction("Orders", "readwrite"),
        store = tx.objectStore("Orders"), // zwraca nowy IDBObjectStore
        req = store.put({time: Date.now()}); // metoda put umozliwia dodawanie par klucz/wartosc do biezacego store obiektu

    var size = 0, entry; // ustawianie wartosci dla zmiennych 
    for (entry in cart.items) { // instruckja warunkowa
      if (cart.items.hasOwnProperty(entry)) { size++; } // sprawdza czy obiekt posiada wlasciwosc o podanej nazwie i idzie inkrementacja rozmiaru
    }

    // Insert Items Store (Table) 
    entry = 0; // ustawianie wartosci dla tej zmiennej 
    req.onsuccess = (e) => {  // Zdarzenie successjest uruchamiane, gdy się IDBRequestpowiedzie.
      tx = orders.db.transaction("Items", "readwrite"), // transakcja dla zamowien z bazy 
      store = tx.objectStore("Items"),  // zwraca nowy IDBObjectStore
      oid = req.result; // przypisanie wartosci do zmiennej wynikowej 
      for (let pid in cart.items) { // instrukcja warunkowa, ktora sprawdza czy dlugosc zmiennej jest w zmiennej, ktora odpowiada za elementy tzw. koszyka
        req = store.put({oid: oid, pid: pid, qty: cart.items[pid]}); //wypchniecie tych elemnentow

        // Empty Cart Only After All Entries Saved 
        req.onsuccess = () => { // Zdarzenie successjest uruchamiane, gdy się IDBRequestpowiedzie.
          entry++; // inkrementacja dla entry
          if (entry == size) { cart.nuke(); } // sprawdzanie czy ta zmienna jest tego rozmiaru ktorego potrzebna i potem idzie dodanie do tego do listy ogolnej zamowien
        };
      }
    };
  },

  // Print Receipt For Current Order
  print : () => { // drukowanie
    // Generate Receipt
    var wrapper = document.getElementById("posreceipt"); // zwracanie pierwszego potomka z określonym unikatowym identyfikatorem 
    wrapper.innerHTML = ""; // umożliwia odczyt, zmodyfikowanie, wstawienie, albo usunięcie kodu HTML z danego elementu DOM
    for (let pid in cart.items) { // instrukcja warunkowa
      let item = document.createElement("div"); // tworzenie elementu 
      item.innerHTML = `${cart.items[pid]} X ${products.list[pid].name}`; // odczyt wszystkich potrzebnych elementow dla drukowania  
      wrapper.appendChild(item); // dodaje przekazany wezel za ostatnim dzieckiem w danym wezle i zwraca referencje do przekazanego wezla
    }

    // Print
    var printwin = window.open(); // otwieranie okna drukowania
    printwin.document.write(wrapper.innerHTML); // wypisanie tego dokumentu html z elementami
    printwin.stop(); // zatrzymanie (tzn. zeby lista nie zniknela)
    printwin.print(); // drukowanie
    printwin.close(); // zamnkniecie okna drukowania 
  }
};
window.addEventListener("DOMContentLoaded", orders.init); // dzieki tej metodzie mozemy wywolac funkcje w momencie, kiedy zostanie wykryte jakies zdarzenie
