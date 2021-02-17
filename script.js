const ratings = document.querySelectorAll(".rating");
const panel = document.querySelector("#panel");
const review = document.querySelector("#review");
const sendBtn = document.querySelector("#send");

const text = {
  unhappy: "I am unhappy",
  neutral: "I am neutral",
  satisfied: "I am satisfied"
}

const comment = document.getElementById("comment");
const type = document.getElementById("type");

ratings.forEach((rating, idx) => {
  rating.addEventListener("click", () => {
    type.innerText = ratings[idx].childNodes[3].innerText;
    comment.innerText = text[ratings[idx].childNodes[3].innerText.toLowerCase()];

    removeActive();
    rating.classList.add("active");
  })
});

function removeActive() {
  ratings.forEach(rating => {
    rating.classList.remove("active");
  });
}

sendBtn.addEventListener("click", e => {
  panel.style.display = "none";
  review.classList.remove("hide");
});