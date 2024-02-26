// Prima richiesta
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  //   isSameAge(otherUser) {
  //     return this.age === otherUser.age;
  //   }

  static isSameAge(utenteX, utenteY) {
    return utenteX.age === utenteY.age;
  }

  static olderOrYounger(utenteX, utenteY) {
    if (User.isSameAge(utenteX, utenteY)) {
      return `${utenteX.firstName} ha la stessa età di ${utenteY.firstName}`;
    } else if (utenteX.age > utenteY.age) {
      return `${utenteX.firstName} è più vecchio di ${utenteY.firstName}`;
    } else {
      return `${utenteX.firstName} è più giovane di ${utenteY.firstName}`;
    }
  }
}

const primoUtente = new User("Mario", "Rossi", 31, "Lerici");
const secondoUtente = new User("Giuseppe", "Bianchi", 31, "Torino");
const terzoUtente = new User("Marco", "Neri", 18, "Milano");

console.log(User.isSameAge(primoUtente, secondoUtente));
console.log(User.isSameAge(primoUtente, terzoUtente));

console.log(User.olderOrYounger(primoUtente, secondoUtente));
console.log(User.olderOrYounger(primoUtente, terzoUtente));
console.log(User.olderOrYounger(terzoUtente, secondoUtente));
console.log(User.olderOrYounger(secondoUtente, terzoUtente));

// Seconda richiesta
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static sameOwner(ownerX, ownerY) {
    return ownerX.ownerName === ownerY.ownerName;
  }
}

const form = document.getElementById("form");
const list = document.getElementById("list");
const petOwner = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  petOwner.push(newPet.ownerName);

  for (let i = 0; i < petOwner.length - 1; i++) {
    if (newPet.ownerName !== petOwner[i] && (newPet.ownerName === undefined || null)) {
      console.log(petOwner);
    } else if (newPet.ownerName === petOwner[i]) {
      console.log(Pet.sameOwner(newPet.ownerName, petOwner[i]));
    }
  }

  console.log(petOwner);
  console.log(newPet);

  newPetData(newPet);
});

const newPetData = function (pet) {
  const petList = document.createElement("ul");

  const name = document.createElement("li");
  name.textContent = `Nome: ${pet.petName}`;
  petList.appendChild(name);

  const owner = document.createElement("li");
  owner.textContent = `Owner: ${pet.ownerName}`;
  petList.appendChild(owner);

  const specie = document.createElement("li");
  specie.textContent = `Specie: ${pet.species}`;
  petList.appendChild(specie);

  const breed = document.createElement("li");
  breed.textContent = `Breed: ${pet.breed}`;
  petList.appendChild(breed);

  list.appendChild(petList);
};
