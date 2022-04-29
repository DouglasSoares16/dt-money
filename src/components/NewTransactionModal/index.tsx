import Modal from "react-modal";
import { Container } from "./styles";
import imgClose from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

export function NewTransactionModal({ onRequestClose, isOpen }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={imgClose} alt="Fechar" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          name="title"
          id="title"
          placeholder="Título"
        />

        <input
          type="number"
          name="value"
          id="value"
          placeholder="Valor"
        />

        <input
          type="text"
          name="category"
          id="category"
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}