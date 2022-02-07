// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

//
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToGuestList(guest);
    updateGuestCount();
  }
  clearInput();
});

const clearInput = function () {
  guestInput.value = "";
};

const addToGuestList = function (guest) {
  let listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestInput.classList.add("hide");

    guestFull.classList.remove("hide");
  }
};

const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

const assignItems = function () {
  const potLuckItems = [
    "Samosa",
    "Vada",
    "Crispy Corn Kernels",
    "Red Sauce Pasta",
    "Naan",
    "Dal Makhni",
    "Shahi Paneer",
    "Veg Biriyani",
    "Raita",
    "Curd Rice",
    "Pumpkin Halwa",
    "Brownies"
  ];
  const listOfGuests = document.querySelectorAll(".guest-list li");

  for (let guest of listOfGuests) {
    const randomPotIndex = Math.floor(Math.random() * potLuckItems.length);
    const randomPotLuckItem = potLuckItems[randomPotIndex];
    const potLuckListItem = document.createElement("li");
    potLuckListItem.innerText = `${guest.innerText} is bringing ${randomPotLuckItem}.`;
    //console.log("iTEM");
    //console.log(potLuckListItem);
    assignedItems.append(potLuckListItem);

    potLuckItems.splice(randomPotIndex, 1); //deleting one each time
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  //to prevent assignment of dishes more than once
  assignButton.disabled = true;
});

//console.log(assignedItems);
