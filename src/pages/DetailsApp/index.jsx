
import { useState, useEffect } from "react";

import { ContainerApp, Links, ContainerContent } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";


import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export function DetailsApp() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() { 
    navigate(-1);
  };

  async function handleRemove() {
    const confirm = window.confirm("Do you really want to remove the note?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    };
  };

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    };

    fetchNotes();

  }, []);

  return (
    <ContainerApp>
      <Header />

       {
        data &&
        <main>
          <ContainerContent>
            < ButtonText 
              title="Excluir nota"
              onClick={handleRemove}  
            />
            
            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}  
            </p>
            
            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))      
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                  />
                  ))
                }
              </Section>
            }
            <Button 
              title="Voltar" 
              onClick={handleBack}
            />
          </ContainerContent>
        </main>

       } 
    </ContainerApp>
  );
};        