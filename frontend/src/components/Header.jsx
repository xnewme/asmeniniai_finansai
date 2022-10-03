import React, { useState } from 'react';
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

export const Header = (props) => {
  const [variant, setVariant] = React.useState("static");
loginas = true;
  return (
    <div>
      <Navbar isBordered variant={variant}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            mano Biudzetas
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Apie</Navbar.Link>
          <Navbar.Link isActive href="#">Musu jau</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#" modalis= {props.loginas}>
            Prisijungti
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
             Registruotis
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      </div>
 
    
  )
}
export default Header