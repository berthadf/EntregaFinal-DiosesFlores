import React from 'react';
import { CartContext } from '../context/CartContext';
import { collection, getFirestore, addDoc } from "firebase/firestore"
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Swal from "sweetalert2";

const Checkout = () => {
    const [name, setName] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");

    const { cart } =
        React.useContext(CartContext);

    const createOrder = () => {
        const items = cart.map(item => (
            {
                id: item.id,
                title: item.title,
                quantity: item.quantity
            }));

        const order = {
            items: items,
            buyer: {
                name,
                lastname,
                phoneNumber
            }
        };
        if (name !== "" && lastname !== "" && phoneNumber !== "") {
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");

            addDoc(ordersCollection, order).then(({ id }) => {
                Swal.fire({
                    title: 'Se ha creado la orden exitosamente',
                    text: 'Tu orden fue creada exitosamente, para cualquier consulta indícale a soporte el siguiente código: ' + id,
                    icon: 'success',
                    confirmButtonText: "Cool"
                })
            });
        } else {
            Swal.fire({
                title: 'Por favor completa todos los campos',
                text: 'No te olvides de completar tu nombre, apellido y número de teléfono',
                icon: 'error',
                confirmButtonText: "Ok"
            })
        }
    };

    return (
        <Container style={{
            maxWidth: "600px",
            margin: "50px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9"
        }}>
            <h2 style={{
                textAlign: "center",
                marginBottom: "20px",
                fontSize: "1.5rem",
                color: "#333"
            }}>Finalizar Compra</h2>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formName">
                    <Form.Label column sm={2}>Nombre</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formLastname">
                    <Form.Label column sm={2}>Apellido</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Apellido"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPhoneNumber">
                    <Form.Label column sm={2}>Número de Teléfono</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Número de Teléfono"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Button
                    variant="primary"
                    onClick={createOrder}
                    style={{
                        display: "block",
                        width: "100%",
                        padding: "10px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        backgroundColor: "#5bbec0",
                        border: "none"
                    }}
                >
                    Comprar
                </Button>
            </Form>
        </Container>

    );
};

export default Checkout