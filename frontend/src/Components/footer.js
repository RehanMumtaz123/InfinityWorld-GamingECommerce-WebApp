import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from '@material-ui/icons/YouTube';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyle";

const Footer = () => {
  return (
    <Box>
      <h3
        style={{
          color: "wheat",
          textAlign: "center",
          marginTop: "-50px",
          marginBottom: "20px",
        }}
      >
        The Infinity Games © 2021 | All rights Reserved
      </h3>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <FacebookIcon className="text-primary" />

              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </FooterLink>
            <FooterLink href="#">
              <InstagramIcon  style={{color:'orangered'}} />

              <span style={{ marginLeft: "10px" }}>Instagram</span>
              {/* </i> */}
            </FooterLink>
            <FooterLink href="#">
              <TwitterIcon style={{color:'lightblue'}} />

              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </FooterLink>
            <FooterLink href="#">
              <YouTubeIcon className="text-danger" />

                <span style={{ marginLeft: "10px" }}>Youtube</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
