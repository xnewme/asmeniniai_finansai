import { Modal, useModal, Button, Text } from "@nextui-org/react";
import React, { useState } from 'react';
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
const Login = () => {

 const [visible, setVisible] = React.useState(false);
const handler = () => setVisible(true);
const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    return (
      <div>
        <Button auto ghost color="success" onClick={handler}>
          Open modal
        </Button>
        <Modal
          closeButton
          animated={false}
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
Prisijungimas
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Email"
              contentLeft={<Mail fill="currentColor" />}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Password"
              contentLeft={<Password fill="currentColor" />}
            />
            <Row justify="space-between">
              <Checkbox>
                <Text size={14}>Isiminti vartotoja</Text>
              </Checkbox>
              <Text size={14}>Pamirsote slaptazodi?</Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Uzdaryti
            </Button>
            <Button auto onClick={closeHandler}>
              Prisijungti
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}

export default Login