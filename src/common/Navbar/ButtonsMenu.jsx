import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form"

const ButtonsMenu = ({ Ingresar ,log,Salir}) => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit } = useForm();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const enviar = (data) => {
        Ingresar(data);
        handleClose();
    }

    return (
        <>
            <div>
                {
                    log?
                    (
                    <button type="button" onClick={Salir} className="btn btn-danger">Exit</button>
                    ):
                    (   <>
                        <button onClick={handleShow}
                        type="button"
                        className="btn btn-outline-light me-2">
                        Login
                    </button>
                    <button type="button"  className="btn btn-info">Sign-up</button>
                    </>   
                    )
                
                }
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicio de Sesion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(enviar)}>
                        <Form.Group className='container d-flex justify-content-start align-items-center my-3'>
                            <Form.Label className='me-2'>Usuario</Form.Label>
                            <Form.Control
                                placeholder='Pj.Admin123'
                                type='string'
                                {...register("usuario", {
                                    required: "Debe completar este campo"
                                })}
                            />
                        </Form.Group>
                        <Form.Group className='container d-flex justify-content-start align-items-center my-3'>
                            <Form.Label className='me-2'>Contraseña</Form.Label>
                            <Form.Control
                                placeholder='Pj.123abc'
                                type='password'
                                {...register("contraseña", {
                                    required: "Debe completar este campo"
                                })}
                            />
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-end'>
                            <Button variant="secondary" className='mx-1' onClick={handleClose}>Cancelar</Button>
                            <Button variant="primary" className='mx-1' type='submit'>Ingresar</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default ButtonsMenu;
