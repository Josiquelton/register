/* eslint-disable no-unused-vars */
import { RiLoginBoxFill } from "react-icons/ri";
import { GiPadlock } from "react-icons/gi";
import { FaReply } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Computer from"../src/assets/ComputadorTabletCelularSOBLEC.jpg";
import "./App.css";

const Login = () => {
  const [username, setUsername] = useState("");
  // eslint-disable-next-line no-unused-vars
  const[password, setPassword] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();

    alert("Enviando os dados:" + username + " - " + password);
  };

  return (
    <>
      <div className='Menu'>
        <form onSubmit={handleSubmit}>
        <h3> Login <RiLoginBoxFill /><a href="http://127.0.0.1:5500/copywriting/cadastro/index.html"><FaReply /></a><br/>
        Acesse o Sistema!</h3>
          <input type="text" placeholder="Nome" onChange={(e) => setUsername(e.target.value)} required="required"/><br/>
          <FaUser /><br/>
          <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required="required"/><br/>
          <GiPadlock />
          <p><input type="checkbox"  required="required"/> Você  concorda com os termos?</p>
          <button type="submit">Enviar</button>
        </form>
        <img id="computer" src={Computer} alt="computer"/>
      </div>
      
    </>
  )
}

export default Login;
