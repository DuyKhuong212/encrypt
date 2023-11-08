import { useState } from 'react';
import CryptoJS from 'crypto-js';
import './App.css';
import Modal from './encryptPass/ModalComponent';

const App = () => {
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => { setIsOpen(false); setText(''); }

  // Hàm để mã hóa chuỗi sử dụng AES
  function encryptText() {
    const encrypted = CryptoJS.AES.encrypt(text, '').toString();
    return encrypted;
  }

  // Hàm để giải mã chuỗi
  function decryptText(encryptedText: string) {
    const bytes = CryptoJS.AES.decrypt(encryptedText, '');
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

  const handleEncrypt = () => {
    const encryptedText = encryptText();
    setText(encryptedText ?? '');
    openModal();
  };

  const handleDecrypt = () => {
    const decryptedText = decryptText(text);
    setText(decryptedText);
    openModal();
  };

  return (
    <div>
      <div>
        <label htmlFor="text">Enter Text: </label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={handleEncrypt}>Encrypt</button>
      <button onClick={handleDecrypt}>Decrypt</button>
      {isOpen && (
        <Modal isOpen={isOpen}>
          <p>this is: {text}</p>
          <button onClick={closeModal}>Close Modal</button>
        </Modal>
      )}
    </div>
  );
};

export default App;
