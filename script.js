$(document).ready(function () {
  const quotes = [
    "Fiecare zi poate fi o nouă oportunitate.",
    "Curajul nu este absența fricii, ci triumful asupra ei.",
    "Dacă vrei ceva ce nu ai avut niciodată, trebuie să faci ceva ce nu ai făcut niciodată.",
    "Succesul nu este cheia fericirii. Fericirea este cheia succesului.",
    "Nu te opri până nu ești mândru.",
  ];
  $("#new-quote").on("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    $("#quote").text(quotes[randomIndex]);
  });
});
