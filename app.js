const btn = document.getElementById("deleteButton");

btn.addEventListener("click", () => {
  btn.remove();
});
///////
const container = document.querySelector(".b_container");
const img = document.createElement("img");
img.src =
  "https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A";
img.alt = "Random image";
img.classList.add("myImage");
container.after(img);
//////

const section = document.getElementById("characters-list");
const html = characters
  .map((character) => {
    return `
  <div class="character-card">
    <div class="card-content">
      <div class="card-text">
        <h2>${character.first_name} ${character.last_name}</h2>
        <p><strong>House:</strong> ${character.house}</p>
        <button class="delete-btn">Delete</button>
        <button class="info-btn">Info</button>
        <p class="actor-info" style="display: none;"><strong>Actor:</strong> ${character.actor}</p>
      </div>
      <div class="card-image">
        <img src="${character.image}" alt="${character.first_name} ${character.last_name}">
      </div>
    </div>
  </div>
`;
  })
  .join("");

section.innerHTML = html;
///////
const deleteButtons = document.querySelectorAll(".delete-btn");
const infoButtons = document.querySelectorAll(".info-btn");

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".character-card").remove();
  });
});

infoButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const actorInfo = btn.parentElement.querySelector(".actor-info");

    actorInfo.style.display =
      actorInfo.style.display === "none" ? "block" : "none";
  });
});
