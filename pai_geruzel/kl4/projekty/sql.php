<?php
$adres_bazy = "localhost";
$uzytkownik = "root";
$haslo = "";
$nazwa_bazy = "test";

$pol = @new mysqli($adres_bazy, $uzytkownik, $haslo, $nazwa_bazy);

$sql = "SELECT imie, nazwisko FROM osoby";
$wynik = $pol->query($sql);

while($wiersz = $wynik->fetch_assoc()) {
    echo "Imię: " . $wiersz["imie"]. ", Nazwisko: " . $wiersz["nazwisko"]. "<br>";
}

$pol->close();
?>