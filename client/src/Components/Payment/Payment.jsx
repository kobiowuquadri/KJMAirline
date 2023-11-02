import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Payment = () => {
  const [bitcoinAddress, setBitcoinAddress] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      const newBitcoinAddress = ["15wmgrti36sCgtYxgJFanZcB5qnbwjxyxs", "1QHPevyJjUoNFnzFwFUoBB7Fda9Pb1MKy4", "1JqLQr9JhyPK1oJs1iQNfqT3o13n5ffkoA", "1EwNgXtBqSL4aUMqomTamwmaRZWPdZD6N7", "1J9PvgyhrLsHii1rSoyr5kjCNp3NjANyqH", "1ERLnGQ1JvYHSWBsFD7ohExtEm4hMAKjk4", "1PhcYrsA3GqHZP1hShGw8ZAq6mowLiMc6N", "18ixrCZd3K7JVCr8Xjoq5uVd8ND9owDydn", "1L7cmGTvQ6YPTDBpG1FFqR5jJqn8ANa1Hp", "1BN5PNPq4DKsGHCxd26RKiBEVSghUtgwe4", "1HeN8Q5neS3JtADqgX437B3vXusaS2UEAg", "1LA5rdp6CfLDuk5cgrgkbkrHTqWJnCtmvF", "1CDycPTtFG4d4P3eXKpboX3uy9yL7tXKwE", "1FFVjHeMdHPd9KuDdA1o1BGF82yvVVD1FF"][Math.floor(Math.random() * 13)];

      setBitcoinAddress(newBitcoinAddress);
    }, 60000); // Every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleYesIHavePaid = () => {
    // TODO: Implement this function to handle the case when the user clicks the "Yes, I have paid" button.
  };

  return (
    <div>
      <button type="button" class="btn btn-primary" id="paymentButton" onClick={openModal}>Pay</button>

      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bitcoin Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please send your payment to the following Bitcoin address:<br />
          <span id="bitcoinAddress">{bitcoinAddress}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary" onClick={handleYesIHavePaid}>Yes, I have paid</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Payment;
