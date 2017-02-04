
var name = document.getElementById("name")

//  set focus on the first text field when the page loads
window.onload = function() {
  document.getElementById("name").focus();
};

//reveal text field when "Other" option is selected
var jobrole = document.getElementById("other-title")
jobrole.style.display = "none";

var select = document.getElementById("title");
select.addEventListener("change", function() {
  if (select.value === "other") {
  jobrole.style.display = "block";
} else {
  jobrole.style.display = "none";
}});


// display matching colors for the T-shirt color menu
var design = document.getElementById("design");
var color = document.getElementById("color");
var colordiv = document.getElementById("colors-js-puns");
var selectdesign = document.getElementById("design").firstElementChild;
colordiv.style.display = "none";
design.addEventListener("change", function() {
  if (design.value == "js puns") {
    colordiv.style.display = "block";
    color[0].style.display = "block";
    color[0].setAttribute("selected", true);
    color[1].style.display = "block";
    color[2].style.display = "block";
    color[3].style.display = "none";
    color[4].style.display = "none";
    color[5].style.display = "none";
    selectdesign.setAttribute("disabled", true);
  }
  else if (design.value == "heart js") {
    colordiv.style.display = "block";
    color[0].style.display = "none";
    color[1].style.display = "none";
    color[2].style.display = "none";
    color[3].style.display = "block";
    color[3].setAttribute("selected", true);
    color[4].style.display = "block";
    color[5].style.display = "block";
    selectdesign.setAttribute("disabled", true);
  }
});


// functions to update activities costs and disable competing activities
function update() {
  var checkbox = document.querySelectorAll('input[type=checkbox]');
  var sum = 0;
  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      sum += parseInt(checkbox[i].getAttribute('value'));
      }
   }
   var h3 = document.getElementById("total")
   h3.textContent = "Total: $" + sum;
}

var checkbox = document.querySelectorAll('input[type=checkbox]');

for (var i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('change', update);
}

var checkbox = function (i, e) {
  var checkbox = document.querySelectorAll('input[type=checkbox]');
  var unavailable = document.createTextNode(" - UNAVAILABLE");
  checkbox[i].addEventListener("click", function() {
      if (checkbox[e].disabled != true) {
      checkbox[e].disabled = true;
      checkbox[e].parentNode.appendChild(unavailable);
     } else {
       checkbox[e].disabled = false;
       checkbox[e].parentNode.removeChild(unavailable)
     }
  }

);
}

checkbox(1, 3);
checkbox(3, 1);
checkbox(2, 4);
checkbox(4, 2);

// hide and show payments options
var payment = document.getElementById("payment");
var credit = document.getElementById("credit-card");
var paypal = document.getElementById("paypal");
var bitcoin = document.getElementById("bitcoin");

payment[0].setAttribute("disabled", true);
payment[1].setAttribute("selected", true);

var creditFunc = function() {
  credit.style.display = "block";
  paypal.style.display = "none";
  bitcoin.style.display = "none";
}
creditFunc();

payment.addEventListener("change", function() {
    if (payment.value == "credit card") {
      creditFunc();
    } else if (payment.value == "paypal") {
      credit.style.display = "none";
      paypal.style.display = "block";
      bitcoin.style.display = "none";
    } else if (payment.value == "bitcoin") {
      credit.style.display = "none";
      paypal.style.display = "none";
      bitcoin.style.display = "block";
    }


})

// validate submit form
var form = document.getElementById("form");
var email = document.getElementById("mail").value;

form.addEventListener("submit", function(evt) {
  var name = document.getElementById("name");
  var mail = document.getElementById("mail");
  var ccnum = document.getElementById("cc-num");
  var zip = document.getElementById("zip");
  var cvv = document.getElementById("cvv");
  if (name.value == "") {
      evt.preventDefault();
      name.style.borderColor = "hotpink";
   }  else {
       name.style.borderColor = "";
   }
   if (mail.value.includes("@") && mail.value.includes(".com")) {
       mail.style.borderColor = "";
    }  else {
       evt.preventDefault();
       mail.style.borderColor = "hotpink";
    }
   if (ccnum.value.length < 13 || ccnum.value.length > 16) {
       evt.preventDefault();
       ccnum.style.borderColor = "hotpink";
    }  else {
       ccnum.style.borderColor = "";
    }
   if (zip.value.length !== 5) {
       evt.preventDefault();
       zip.style.borderColor = "hotpink";
    }  else {
       zip.style.borderColor = "";
    }
    if (cvv.value.length !== 3) {
       evt.preventDefault();
       cvv.style.borderColor = "hotpink";
     } else {
       cvv.style.borderColor = "";
     }


     var error = document.createElement('h3')
     error.id = "error"
     error.style.color = "crimson"
     var fieldsetAct = document.getElementById("activities");
     fieldsetAct.appendChild(error)
    if (document.querySelectorAll("input[type=checkbox]:checked").length == 0) {
       evt.preventDefault();
       error.textContent = "Choose at least one activity."
     } else {
       var error = document.getElementById("error")
       fieldsetAct.removeChild(error)
     }

})
