import { GearSix, BuildingOffice, MapPin, Phone, CaretDown } from "@phosphor-icons/react";
import emailjs from "emailjs-com";

import './styles/itens.sass'

function App() {
  var menutipo = document.getElementsByClassName("menu")[0];

  function showTipo() {
    if (menutipo.style.display == "none") {
      menutipo.style.display = "block";
    } else {
      menutipo.style.display = "none";
    }
  }

  function selectTipe(txt) {
    document.getElementById("tipo").value = txt
    menutipo.style.display = "none"
  }

  var link = document.querySelectorAll(".item")

  link.forEach(function (links) {
    links.addEventListener('click', function (event) {
      event.preventDefault()
      var texto = this.textContent
      selectTipe(texto)
    })
  })

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_xi26o83', 'template_4gyqkkj', e.target, '2hKcOoKCHUYuViiaO')

      .then((result) => {
        alert("Mensagem enviada com sucesso! 👍");

      }, (error) => {
        alert(error.message)

      });
    e.target.reset()


  }


  return (
    <div className='main'>
      <div className="titulo">
        <i><GearSix weight="duotone" /></i>
        <h1>SOS Manutenção</h1>
      </div>
      <form onSubmit={sendEmail}>
        <div className="unidade">
          <label htmlFor=""><BuildingOffice weight="duotone" /> Unidade</label>
          <input type="text" placeholder='Nome da unidade' required name="unidade" />
        </div>

        <div className="info">
          <div className="end">
            <label htmlFor=""><MapPin weight="duotone" /> Endereço</label>
            <input type="text" placeholder='Bairro' required name="endereco" />
          </div>
          <div className="tel">
            <label htmlFor=""><Phone weight="duotone" /> Telefone</label>
            <input type="text" placeholder='Telefone' name="telefone" />
          </div>

        </div>
        <div className="tipo">
          <label htmlFor="">Selecione o tipo de manutenção</label>
          <span onClick={showTipo}>Tipo <CaretDown weight="light" /></span>
          <div className="menu">
            <nav>
              <a class="item" href="#">Elétrica</a>
              <a class="item" href="#">Hidraulica</a>
              <a class="item" href="#">Esgoto</a>
              <a class="item" href="#">Telhado</a>
              <a class="item" href="#">Pintura</a>
              <a class="item" href="#">Carpintaria</a>
              <a class="item" href="#">Limpesa</a>
            </nav>
          </div>
        </div>
        <br />
        <input id="tipo" type="text" placeholder="Aceita apenas 1 item!" required name="tipo" />
        <div className="pedidos">
          <label htmlFor="">Adicione as manutenções</label>
          <textarea required name="pedido"></textarea>
        </div>
        <button type="submit" >Enviar</button>
      </form>
    </div>
  )
}

export default App
