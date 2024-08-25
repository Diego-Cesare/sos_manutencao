import { GearSix, BuildingOffice, MapPin, Phone, CaretDown } from "@phosphor-icons/react";
import emailjs from "emailjs-com";

import './styles/itens.sass'

function App() {
  function selectTipe(txt) {
    document.getElementById("tipo").value = txt
  }

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
          <div className="menu">
            <nav>
              <a className="item" href="#" onClick={() => selectTipe("Elétrica")}>Elétrica</a>
              <a className="item" href="#" onClick={() => selectTipe("Hidraulica")}>Hidraulica</a>
              <a className="item" href="#" onClick={() => selectTipe("Esgoto")}>Esgoto</a>
              <a className="item" href="#" onClick={() => selectTipe("Telhado")}>Telhado</a>
              <a className="item" href="#" onClick={() => selectTipe("Pintura")}>Pintura</a>
              <a className="item" href="#" onClick={() => selectTipe("Carpintaria")}>Carpintaria</a>
              <a className="item" href="#" onClick={() => selectTipe("Limpesa")}>Limpesa</a>
              <a className="item" href="#" onClick={() => selectTipe("Outros")}>Outros</a>
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
