import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput.js";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 19px 9px;
  overflow-y: scroll;
`;
const Title = styled.div`
  padding: 0px 5px;
  font-size: 32px;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const Dsc = styled.div`
  padding: 5px 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const Wrapper = styled.div`
  padding: 5px 5px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [description, setdescription] = useState("");
  return (
    <Container>
      <Title>Contact Us</Title>
      <Dsc>If you have any querry or suggestion you can write below</Dsc>
      <Wrapper>
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <hr></hr>
        <TextInput
          label="Describe"
          textArea
          rows={5}
          placeholder={`Write your suggestion`}
          value={description}
          handelChange={(e) => setdescription(e.target.value)}
        />
      </Wrapper>
      <br></br>
      <NavLink to="/">
        <Button text="Submit" />
      </NavLink>
    </Container>
  );
};

export default ContactUs;
