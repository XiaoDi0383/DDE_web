const searchForm = document.querySelector("#thread-search");
const searchInput = document.querySelector("#query");
const searchStatus = document.querySelector("#search-status");
const guide = document.querySelector("#guide");

document.querySelector("#open-guide").addEventListener("click", () => guide.showModal());

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.normalize("NFKC").trim().replace(/\s+/g, " ").toLowerCase();

  if (query === "alien transformation tutorial") {
    window.location.assign("./loading.html");
    return;
  }

  searchInput.setAttribute("aria-invalid", "true");
  searchStatus.textContent = "該当するスレッドはありません。";
  searchInput.focus();
});

searchInput.addEventListener("input", () => {
  searchInput.removeAttribute("aria-invalid");
  searchStatus.textContent = "";
});
