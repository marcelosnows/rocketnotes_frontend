import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { ContainerHeader, ContainerProfile, LogoutButton } from "./styles";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header() {

  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  
  function handleSignOut() {
    navigate("/");
    signOut();
  };

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <ContainerHeader>
      <ContainerProfile to="/profile">
        <img 
          src={avatarURL} 
          alt={user.name}
        />
        <div>
          <span>Bem-vindo!</span>
          <strong>{user.name}</strong>
        </div>
      </ContainerProfile>

      <LogoutButton 
        onClick={handleSignOut}
        title="Sair"
      >
        <RiShutDownLine />  
      </LogoutButton>
      
    </ContainerHeader>
  );
};