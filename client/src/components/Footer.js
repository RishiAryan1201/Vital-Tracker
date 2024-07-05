import React from "react";
import styled from "styled-components";

const Image = styled.img`
  flex-direction: row;
  width: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
const Container = styled.div`
  flex: 1;
  padding: 22px 0px;
  overflow-y: scroll;
  gap: 70px;
  backgroundcolor: "white";
  margin: 5px 5px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  shadow: 1px;
`;
const Footer = () => {
  return (
    <footer>
      <Container>
        <span>© 2024 Made By Rishi Aryan. All Rights Reserved.</span>
        <Wrapper>
          <div>
            <a
              href="https://www.linkedin.com/in/rishi-aryan-52969a213/"
            
            >
              <Image src="https://seeklogo.com/images/L/linkedin-logo-A6EF048412-seeklogo.com.png" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/_rishi_aryan_">
              <Image src="https://i.pinimg.com/736x/7f/7b/87/7f7b872e56430e68d69538b17525c51c.jpg" />
            </a>
          </div>

          <div>
            <a href="https://x.com/rishiarya1201">
              <Image src="https://img.freepik.com/premium-vector/vector-twitters-new-2023-x-logo-white-background_1093524-454.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1718236800&semt=ais_user" />
            </a>
          </div>
          <div>
            <a href="https://github.com/RishiAryan1201">
              <Image src="https://cdn.icon-icons.com/icons2/2389/PNG/512/github_logo_icon_145252.png" />
            </a>
          </div>
        </Wrapper>
      </Container>
    </footer>
  );
};
export default Footer;
