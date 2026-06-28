console.log("Welcome to Epic Frames Nigeria!");

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Welcome to Epic Frames! Online ordering is coming soon.");
  });
});
