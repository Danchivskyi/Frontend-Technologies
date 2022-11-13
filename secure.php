<!--PHP file, ktory jest potrzebny dla tworzenia rekordow w bazie oraz laczenie sie z baza-->
<?php
 session_start(); // uruchomienie sesji

 $errors = array();
 $_SESSION['success'] = ""; // ustawienie zmiennych sesji za pomocą globalnej zmiennej _SESSION

 $connHost = 'localhost';
 $connUser = 'root';
 $connPass = '';
 $connName = "myDB";
 $connTableName = "uzytkownicy";

 $fName = "";
 $lName = "";
 $uName = "";
 $email = "";

 $conn = new mysqli($connHost, $connUser, $connPass); //otwiera nowe połączenie z serswerem MySQL
	if($conn->connect_error) { //sprawdzanie połaczenia
	echo("Polaczenie nie udane: " . $conn->connect_error . '<br/>');
 }

 $sql = 'CREATE DATABASE IF NOT EXISTS ' . $connName; //tworzenie bazy, jeśli ona nie istnieje
	if($conn->query($sql) === TRUE) { //zwraca instancję, jeśli jest prawdziwa
	} else {
		echo 'Nie mozna utworzyc bazy danych: ' . $conn->error .'<br />';
	}

 $conn->close(); //zamknięcie

 $conn = new mysqli($connHost, $connUser, $connPass, $connName);
	if($conn->connect_error) {
		echo("Polaczenie nie udane: " . $conn->connect_error . '<br/>');
	}

//tworzy tabelę jeśli nie istnieje
 $sql = "CREATE TABLE IF NOT EXISTS " . $connTableName . "( 
 id INT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,
 imie VARCHAR(30) NOT NULL,
 nazwisko VARCHAR(30) NOT NULL,
 email VARCHAR(50) NOT NULL,
 user VARCHAR(30) NOT NULL,
 password VARCHAR(50) NOT NULL
 )";
 
 //query - tutaj zostaje umieszczona terść kwerendy
 if($conn->query($sql) === TRUE) {}
	else {
		echo 'Nie mozna utworzyc tabeli: ' . $conn->error . '<br/>';
	}

//isset jest jednym z najważniejszych narzędzi do walidacji danych w PHP
//isset sprawdza czy zmienna ktora zostala mu podana jest ustawiona
if (isset($_POST['rejestracja'])) {
	$username = mysqli_real_escape_string($conn, $_POST['uName']); // "mysqli_real_escape_string" wycofuje znaki specjalne w ciągu do użycia w instrukcji SQL, biorąc pod uwagę bieżący zestaw znaków połączenia
	$email = mysqli_real_escape_string($conn, $_POST['email']);
	$password_1 = mysqli_real_escape_string($conn, $_POST['pass']);
	$password_2 = mysqli_real_escape_string($conn, $_POST['rpass']);
	$imie = mysqli_real_escape_string($conn, $_POST['fName']);
	$nazwisko = mysqli_real_escape_string($conn, $_POST['lName']);
	if (empty($username)) { 
		array_push($errors, "Nazwa użytkownika wymagana"); //wygeneruje ostrzeżenie, jeśli pierwszy argument nie jest tablicą
	}
	if (empty($email)) {
		array_push($errors, "Adres email wymagany"); 
	}
	if (empty($password_1)) { 
		array_push($errors, "Hasło wymagane"); 
	}
	if (empty($imie)) {
		array_push($errors, "Imię wymagane"); 
	}
	if (empty($nazwisko)) {
		array_push($errors, "Nazwisko wymagane");
	}
	if ($password_1 != $password_2) {
		array_push($errors, "Hasła różnią się");
	}	
	$user_check_query = "SELECT * FROM uzytkownicy WHERE user='$username' OR email='$email' LIMIT 1"; //sprawdzenie czy dane istnieją
	$wyn = mysqli_query($conn, $user_check_query); //wykonuje zapytanie w bazie danych
	$user = mysqli_fetch_assoc($wyn); //zwraca tablicę zawierającą pobrany wiersz, lub FALSE jeżeli nie ma więcej wierszy w w zmiennej wyn
	
	if ($user) {
		if ($user['user'] === $username) {
			array_push($errors, "Nazwa użytkownika jest już zajęta");
		}
//array_push - generuje ostrzeżenie, jeśli pierwszy argument nie jest tablicą
		if ($user['email'] === $email) {
			array_push($errors, "Podany adres jest już zarejestrowany");
		}
	}
	//jesli nie ma bledow, to pozwala na doodanie rekordow do tabeli
	if (count($errors) == 0) {
		$password = md5($password_1);
		$zapytanie = "INSERT INTO uzytkownicy (imie, nazwisko, email, user, password) 
		VALUES('$imie','$nazwisko','$email', '$username', '$password')";
		
		mysqli_query($conn, $zapytanie);
		$_SESSION['username'] = $username;
		$_SESSION['success'] = "Jesteś zalogowany";
		header('location: index.php');
	}
}
 
if (isset($_POST['zaloguj'])) {
	$username = mysqli_real_escape_string($conn, $_POST['username']);
	$password = mysqli_real_escape_string($conn, $_POST['password']);

	if (empty($username)) {
		array_push($errors, "Potrzebujemy nazwe użytkownika");
	}
	if (empty($password)) {
		array_push($errors, "Potrzebujemy haslo");
	}

	if (count($errors) == 0) { // wuliczanie ilosci elementow w tablicy
		$password = md5($password); // szyfrowanie
		$zapytanie = "SELECT * FROM uzytkownicy WHERE user='$username' AND password='$password'";
		$wynik = mysqli_query($conn, $zapytanie); // wykonuje zapytanie do bazy danych
		if (mysqli_num_rows($wynik) == 1) { // zwraca liczbę wierszy w wyniku
			$_SESSION['username'] = $username;
			$_SESSION['success'] = "Zostałeś zalogowany.";
			header('location: index.php');
		}else 
		{
			array_push($errors, "Błędnie podane nazwe użytkownika lub hasło");
		}
	}
}
	$conn->close();
?>