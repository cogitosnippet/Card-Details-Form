
let button = document.getElementById('button-id');
let card_name = document.getElementById('name-id');
let card_number = document.getElementById('number-id');
let card_month = document.getElementById('month-id');
let card_year = document.getElementById('year-id');
let card_cvv = document.getElementById('cvv-id');
let name_alert = document.getElementById('alert_name');
let number_alert = document.getElementById('alert_number');
let exp_alert = document.getElementById('alert_exp');
let wrong_exp = document.getElementById('wrong_exp');
let wrong_number = document.getElementById('wrong_number');
let cvv_alert = document.getElementById('alert_cvv');



button.addEventListener('click', (e) => {

  e.preventDefault();
  check_empty();
  check_format();

  if (check_empty() && check_format()) {
    successful_state();
  }

})

const check_empty = () => {
  let check1 = "";
  let check2 = "";
  let check3 = "";
  let check4 = "";

  if (card_name.value === "") {
    name_alert.style.display = "block";
  } else {
    name_alert.style.display = "none";
    check1 = "true";
  }
  if (card_number.value === "") {
    number_alert.style.display = "block";
  } else {
    number_alert.style.display = "none";
    check2 = "true";
  }
  if (card_month.value === "" || card_year.value === "") {
    exp_alert.style.display = "block";
  } else {
    exp_alert.style.display = "none";
    check3 = "true";
  }
  if (card_cvv.value === "") {
    cvv_alert.style.display = "block";
  } else {
    cvv_alert.style.display = "none";
    check4 = "true";
  }

  if (check1 === "true" && check2 === "true" && check3 === "true" && check4 === "true") {
    return true;
  } else {
    return false;
  }
}

const check_format = () => {
  let check1 = "";
  if (exp_alert.style.display === "none") {
    if (card_month.value > 12 || card_month.value < 1) {
      wrong_exp.style.display = "block";
    } else if (card_year.value.length != 2 || card_year.value < 24) {
      wrong_exp.style.display = "block";
    } else if (card_month.value.length != 2) {
      wrong_exp.style.display = "block";
    } else if (card_month.value.includes("e") || card_year.value.includes("e")) {
      wrong_exp.style.display = "block";
    }
    else {
      wrong_exp.style.display = "none";
      check1 = "true";
    }
  }
  if (check1 === "true") {
    return true;
  }
  else {
    return false;
  }
}

const format_card_number = () => {
  if (card_number.value.length === 4 || card_number.value.length === 9 || card_number.value.length === 14) {
    card_number.value = card_number.value + " ";
  }
}

const check_card_digit = () => {
  if (card_number.value.length > 19) {
    wrong_number.style.display = "block";
  }
  else {
    wrong_number.style.display = "none";
  }
}

const check_alphabet = () => {
  let regular_expresion = /[a-zA-Z]/;
  if (regular_expresion.test(card_number.value)) {
    document.getElementById('only_number').style.display = "block";
  }
  else {
    document.getElementById('only_number').style.display = "none";
  }
}

const update_name = () => {
  if (card_name.value === "") {
    document.getElementById('name_on_card').innerHTML = card_name.placeholder;
  } else {
    document.getElementById('name_on_card').innerHTML = card_name.value;
  }
}

const update_number = () => {
  if (card_number.value === "") {
    document.getElementById('number_on_card').innerHTML = "0000 0000 0000 0000";
  } else {
    document.getElementById('number_on_card').innerHTML = card_number.value;
  }
}

const update_month = () => {
  if (card_month.value === "") {
    document.getElementById('month_on_card').innerHTML = card_month.placeholder;
  } else {
    document.getElementById('month_on_card').innerHTML = card_month.value;
  }
}

const update_year = () => {
  if (card_year.value === "") {
    document.getElementById('year_on_card').innerHTML = card_year.placeholder;
  } else {
    document.getElementById('year_on_card').innerHTML = card_year.value;
  }
}

const update_cvv = () => {
  if (card_cvv.value === "") {
    document.getElementById('cvv_on_card').innerHTML = card_cvv.placeholder;
  } else {
    document.getElementById('cvv_on_card').innerHTML = card_cvv.value;
  }
}

const successful_state = () => {
  document.getElementById('right-div').innerHTML = `<div class="complete">
  <img src="images/icon-complete.svg" class="complete-logo">
  <p class="thanks-msg">Thank you!</p>
  <p class="info">We've added your card details</p>
  <button class="complete-button">Continue</button>
</div>`
}



/// learning


// let regExp = /[a-zA-Z]/;
// console.log(regExp.test("123a5"));
// input::-webkit-outer-spin-button,
// input::-webkit-inner-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }