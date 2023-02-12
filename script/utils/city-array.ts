const cities = ['Baranovichi', 'Ivatsevichi', 'Pinsk', 'Polotsk',
'Belynichi', 'Kalinkovichi', 'Berezino', 'Kamenets', 'Rechitsa',
'Bobruisk', 'Rogachev', 'Borisov', 'Klimovichi', 'Klichev', 'Svetlogorsk',
'Brest', 'Kobrin', 'Svisloch', 'Bykhov', 'Kostyukovichi', 'Slavgorod', 'Slonim',
'Smorgon', 'Vitebsk', 'Soligorsk', 'Talochin', 'Deep', 'Gomel', 'Slides', 'Grodno', 'Minsk', 'Mogilev', 'Dzerzhinsk', 'Mozyr', 'Chausy', 'Mstislavl', 'Drogichin',
'Cherikov', 'Shklov', 'Novopolotsk', 'Zhlobin', 'Orsha', 'Osipovichi'];

let str = 
`
function autocomplete(inp, arr) {//ф-ция автозаполнения принимает 2арг.
 //эл-т текстового поля и массив возможных значений автозаполнения
    var currentFocus;
    /*выполнить функцию, когда кто-то пишет в текстовом поле:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*закрыть все открытые списки автоматически заполняемых значений*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        
        
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/


        for (i = 0; i < arr.length; i++) {
/*проверить, начинается ли элемент с тех же букв, что и значение текстового поля:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
  `
str = str + 'q';