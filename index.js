document.querySelectorAll(".drum").forEach(item => {
  item.addEventListener('click', event => {
    alert("I have been called");
  })
})
