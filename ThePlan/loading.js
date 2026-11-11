// Wait for the loading page to paint before starting the two-second timer.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    setTimeout(() => window.location.replace("./tutorial.html"), 2000);
  });
});
