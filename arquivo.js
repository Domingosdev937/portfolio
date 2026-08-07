document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".links-projetos a");

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Impede o redirecionamento

      alert("⚠️ Este projeto ainda está em desenvolvimento. Em breve estará disponível!");
    });
  });
});
