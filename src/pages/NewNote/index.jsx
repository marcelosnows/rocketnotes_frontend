import { useState } from "react";
import { ContainerNewNote, Form } from "./styles";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function NewNote() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState(""); 
  
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  
  const navigate = useNavigate();

  function handleBack() { 
    navigate(-1);
  };

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  };

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  };

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));

  };

  async function handleNewNote() {

    if(!title) {
      return alert("Enter the title of the note!");
    };

    if(newLink) {
      return alert("There is a link that has not yet been added, click + to add or leave the field empty!");
    };

    if(newTag) {
      return alert("There is a tag that has not yet been added, click + to add or leave the field empty!");
    };

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Note created successfully!");
    navigate(-1);
  };

  return (
    <ContainerNewNote>
      <Header />  

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText 
              title="Voltar" 
              onClick={handleBack}
            />
          </header>

          <Input 
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}  
          />
          
          <TextArea 
            placeholder="Observações..."
            onChange={e => setDescription(e.target.value)}  
          />

          <Section title="Links úteis">

            {
              links.map((link, index) => (
                <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
            />
              ))
            }
          
            <NoteItem
              isNew 
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              
              { 
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem 
                isNew 
                placeholder="Nota Tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote}/>

        </Form>
      </main>

    </ContainerNewNote>
  );
};