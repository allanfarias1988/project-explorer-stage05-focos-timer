export default function ToggleMode() {
  let darkMode = true;

  const toggleMode = document.querySelector("#btn-toggle-mode");

  const handleToggleMode = (event) => {
      document.querySelector("html").classList.toggle("light");
      darkMode = !darkMode;
      
      const mode = darkMode ? "light" : "dark";
      event.currentTarget.querySelector(
          "span"
          ).textContent = `${mode} mode actived!`;
          
  };

  toggleMode.addEventListener("click", handleToggleMode);
}
