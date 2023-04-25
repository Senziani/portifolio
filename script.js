document
  .querySelector(".container-contato")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // quebranco o padrão
  });
var dados = {};

document.querySelector(".btn").addEventListener("click", () => {
  let filds = document.querySelectorAll(".container-contato [name]");

  // eu quero que ele verifique se  os inputs nao estão vazios TODOS ELES
  //MANDE UM E -mail de teste

  filds.forEach((filds, index)=> {
    dados[filds.name] = filds.value;
  });

  if (document.getElementById("name").value < 3) {
    alert("Por favor, preencha os campos");
  } else {
    filds.forEach(function (filds, index) {
      dados[filds.name] = filds.value;
    });
    console.log("Esse é um projeto portifolio, seu e-mail não foi enviado");
    alert(`Olá ${dados.nome} , seu e-mail foi enviado com sucesso`);
  }
  document.querySelector('#formulario').reset(); // resete dos campos
});
function myFocus() {
  document.getElementById("name").style.borderColor = "red";
  document.getElementById("email").style.borderColor = "red";
  document.getElementById("assunto").style.borderColor = "red";
  document.getElementById("feedback").style.borderColor = "red";
}
