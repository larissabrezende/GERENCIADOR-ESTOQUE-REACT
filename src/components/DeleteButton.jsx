import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStock from "../hooks/useStock";
import PropTypes from "prop-types";

DeleteButton.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired
};

export default function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => setShowModal(true);

  const handleConfirmDelete = () => {
    deleteItem(itemId);   
    setShowModal(false);   
    navigate("/items");    
  };

  const handleCancelDelete = () => setShowModal(false); 

  return (
    <>
      <button
        className="button is-danger is-small"
        onClick={handleDeleteClick}
      >
        Excluir
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Tem certeza que deseja excluir {itemName}?</h2>
            <button onClick={handleConfirmDelete} className="button is-danger">
              Confirmar Exclusão
            </button>
            <button onClick={handleCancelDelete} className="button is-light">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}