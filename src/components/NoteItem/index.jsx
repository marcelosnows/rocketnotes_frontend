import { FiPlus, FiX } from "react-icons/fi";

import { ContainerNoteItem } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest}) {
  return (
    <ContainerNoteItem isNew={isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        {...rest}  
      />

      <button
        type="button"
        onClick={onClick}
        className={ isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus /> : <FiX /> }    
      </button>
      
    </ContainerNoteItem>
  );
};