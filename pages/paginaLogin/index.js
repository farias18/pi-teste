import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import { Col, Form, Row } from 'react-bootstrap'

const index = () => {
  return (
    <div>
       <div className={styles.wrap}>
                <div className={styles.w100}><div className={styles.logo}></div></div>
                <div className={styles.w50}>
                    <h1>Bem vindo(a) ao jogo!</h1>
                    <div className={styles.form}>
                    <Form>  
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Nome: 
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="Nome" />
                            </Col>
                        </Form.Group>
                    </Form>
                    </div>
                    <button className={styles.btnHome}>
                        <Link href={"/paginaLogin"}>Iniciar Jogo</Link>
                    </button>
                </div>
                <div className={styles.w50}>
                    <div className={styles.fundo}>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default index