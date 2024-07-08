import { useState } from "react";

import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { ContainerSignIn, Form, Background } from "./styles";

export function SignIn({ }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  
  function handleSignIn() {
    
    signIn({ email, password });
  };
  
  return (
    <ContainerSignIn>
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para gerenciamento de links úteis.</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange= {e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange= {e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register">
          Criar conta
        </Link>

      </Form>

      <Background />

    </ContainerSignIn>
  );
};