// JS file, ktory jest potrzebny dla index.php w celu obslugi zdarzen potrzebnych dla przyciskow oraz odwolan na stronie glownej 

$("#navHome").click( //Jesli jest wcisniety przycisk Home to ...
    function () {
        $("#dashboardPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#navCustomer").click( //Jesli jest wcisniety przycisk Customer to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#navItem").click( //Jesli jest wcisniety przycisk Item to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#navOrder").click( //Jesli jest wcisniety przycisk Order to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#addNewCustomer").click( //Jesli jest wcisniety przycisk Add new Customer to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#addNewItem").click( //Jesli jest wcisniety przycisk Add New Item to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#addNewOrder").click( //Jesli jest wcisniety przycisk Add New Order to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#viewCustomers").click( //Jesli jest wcisniety przycisk View Customers to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#viewCustomersFromUpdate").click( //Jesli jest wcisniety przycisk UPDATE CUSTOMER to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#viewItems").click( //Jesli jest wcisniety przycisk View Items to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#viewItemsFromUpdate").click( //Jesli jest wcisniety przycisk UPDATE ITEM to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);

$("#viewOrders").click( //Jesli jest wcisniety przycisk View Orders to ...
    function () {
        $("#dashboardPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#customerUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemViewPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#itemUpdatePanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderPanel").css("display","none"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
        $("#orderViewPanel").css("display","inline"); // to blok z tym identyfikatorem ustawia CSS za pomocą js
    }
);