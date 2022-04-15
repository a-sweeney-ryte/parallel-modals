import React, { useState } from 'react';
import { useContextHook, useHook } from './useHook';
/* Outcomes ========>
  * on click component button 
    opens modal 
    correct content shown in modal
  * on click modal button 
    * close modal 
*/

// can use export / import in multi file project
const ThemeContext = React.createContext();

function App() { 
  const modalContentDefault = <p>Modal Content Default</p>;
  const modalContentOne = <p>Modal Content One</p>;
  const modalContentTwo = <p>Modal Content Two</p>;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(modalContentDefault);

  const providerValues = {
    isOpen: modalIsOpen,
    setIsOpen: setModalIsOpen,
    content: modalContent,
    setContent: setModalContent,
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={providerValues}>
        <Component modalContent={modalContentOne}>Component 1 Content</Component>
        <Component modalContent={modalContentTwo}>Component 2 Content</Component>
        <Modal/>
      </ThemeContext.Provider>
    </div>
  );
}

const Component = ({
  modalContent,
  children
}) => {
  const style = { border: '2px solid red', padding: '5em', display: 'flex', 'flex-direction': 'column'};
  
  // ====== useHook
  // const { isOpen, setIsOpen } = useHook();

  // ====== useContextHook
  const { isOpen, setIsOpen, content, setContent } = useContextHook(ThemeContext);

  const onClickButton = () => {
    setIsOpen(true)
    setContent(modalContent)
  }

  return (
    <div style={style}>
      {children}

      <p>isOpen: {isOpen.toString()}</p>
      <p>Modal Content: {content}</p>
      <button onClick={onClickButton}>Open Modal</button> 
    </div> 
  )
}

const Modal = () => {
  const style = { border: '2px solid green', padding: '5em', display: 'flex', 'flex-direction': 'column'};

  // ====== useHook
  // const { isOpen, setIsOpen } = useHook();
  
  // ====== useContextHook
  const { isOpen, setIsOpen, content } = useContextHook(ThemeContext);

  const onClickButton = () => {
    setIsOpen(false)
  }

  return isOpen && (
    <div style={style}>
      {content}
      <button onClick={onClickButton}>Close Modal</button> 
    </div> 
  )
}

export default App;
