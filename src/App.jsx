import { GearSix, BuildingOffice, MapPin, Phone, HouseLine, Lightning, Broom, PaintRoller, Hammer, Drop, Pipe, Question } from "@phosphor-icons/react";
import emailjs from "emailjs-com";

import './styles/itens.sass'

function App() {

  let tipoList = ["Elétrica", "Hidráulica", "Esgoto", "Estrutural", "Pintura", "Carpintaria", "Limpeza", "Outros"]

  function valideTipo() {
    let valideTipo = document.getElementById("tipo").value
    let valid = false

    for (let i = 0; i < tipoList.length; i++) {
      if (tipoList[i].toLowerCase() === valideTipo.toLowerCase()) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      alert("Selecione um tipo de manutenção valida!")
      document.getElementById("tipo").value = ""
      document.getElementById("tipo").style.border = "solid 1px #f12345"
    }
  }

  function selectTipe(txt) {
    document.getElementById("tipo").value = txt
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_xi26o83', 'template_4gyqkkj', e.target, '2hKcOoKCHUYuViiaO')

      .then((result) => {
        alert("Seu pedido foi enviado com sucesso!\nEm breve, uma equipe irá até sua unidade.");

      }, (error) => {
        alert("No momento, não é possível enviar seu pedido.\nAguarde alguns instantes\ne tente novamente.")

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
              <a className="item" href="#" onClick={() => selectTipe("Elétrica")}><Lightning weight="duotone" /></a>
              <a className="item" href="#" onClick={() => selectTipe("Hidráulica")}><Drop weight="duotone" /></a>
              <a className="item" href="#" onClick={() => selectTipe("Esgoto")}><Pipe weight="duotone" /></a>
              <a className="item" href="#" onClick={() => selectTipe("Estrutural")}><HouseLine weight="duotone" /></a>
              <a className="item" href="#" onClick={() => selectTipe("Pintura")}><PaintRoller weight="duotone" /></a>
              <a className="item" href="#" onClick={() => selectTipe("Carpintaria")}><Hammer weight="duotone" /></a>
              <a className="item" href="#" onClick={() => selectTipe("Limpeza")}><Broom weight="duotone" /></a>
              <a className="item" href="#" onClick={() => selectTipe("Outros")}><Question weight="duotone" /></a>
            </nav>
          </div>
        </div>
        <br />
        <input id="tipo" type="text" placeholder="Aceita apenas 1 item!" required name="tipo" />
        <div className="pedidos">
          <label htmlFor="">Adicione as manutenções</label>
          <textarea onClick={valideTipo} placeholder="Pule para a linha abaixo ao terminar um pedido!" required name="pedido"></textarea>
        </div>
        <button onClick={valideTipo} type="submit" >Enviar</button>
      </form>
    </div>
  )
}

export default App
