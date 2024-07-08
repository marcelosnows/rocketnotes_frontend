import { useState } from "react";

import { FiMail, FiUser, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { ContainerSignUp, Form, Background } from "./styles";

export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  function handleSignUp() {

    if(!name || !email ||!password) {
      return alert("All fields must be filled!");
    };

    api.post("/users", { name, email, password })
    .then(() => {
      alert("User registered successfully!");
      navigate("/");
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message) 
      }else {
        alert("Unable to registered!");
      };
    });
  };

  return (
    <ContainerSignUp>
      <Background />
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para gerenciamento de links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">
          Voltar para o login
        </Link>

      </Form>

    </ContainerSignUp>
  );
};