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
