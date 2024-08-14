
//We only have to change background-color and height of the sorting element.

let speed = 1000;

inp_aspeed.addEventListener("input", vis_speed);

function vis_speed() {
  let array_speed = inp_aspeed.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }

  delay_time = 10000 / (Math.floor(array_size / 10) * speed); //Decrease numerator to increase speed.
}

let delay_time = 10000 / (Math.floor(array_size / 10) * speed); //Decrease numerator to increase speed.
let c_delay = 0; //This is updated ov every div change so that visualization is visible.

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}

function enable_buttons() {
  window.setTimeout(function () {
    for (let i = 0; i < butts_algos.length; i++) {
      // butts_algos[i].classList=[]; /*on enabling empty all the classList for algo buttons*/
      butts_algos[i].classList.remove("butt_locked");
      butts_algos[i].classList.remove("butt_selected");
    }
    // inp_as.disabled = false;
    inp_gen.classList.remove("inp_genDisable");
    // inp_aspeed.disabled = false;/
    inp_as.classList.remove("inp_genDisable");
    inp_aspeed.classList.remove("inp_genDisable");
    sortButton.style.color = "white";
    sortButton.classList.remove("butt_locked");
    sortButton.classList.add("hide");
    algoSelected = null;
  }, (c_delay += delay_time));
}
