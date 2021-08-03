import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
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
        The Infinity World © 2021 | All rights Reserved
      </h3>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="team/#OurTeam">Our Team</FooterLink>
            <FooterLink href="team/#OurVision">Our Vision</FooterLink>
            <FooterLink href="team/#OurMission">Our Mission</FooterLink>
          </Column>
          <Column>
            <Heading>Collections</Heading>
            <FooterLink href="#">Shooting</FooterLink>
            <FooterLink href="#">Advanture</FooterLink>
            <FooterLink href="#">Racing</FooterLink>
            <FooterLink href="#">Role-Playing</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Karachi</FooterLink>
            <FooterLink href="#">Hyderabad</FooterLink>
            <FooterLink href="#">Islamabad</FooterLink>
            <FooterLink href="#">lahore</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/Wild-Dragonz-106455208325692">
              <FacebookIcon className="text-primary" />
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/wild.dragonz/">
              <InstagramIcon style={{ color: "orangered" }} />
              <span style={{ marginLeft: "10px" }}>Instagram</span> {/* </i> */}
            </FooterLink>
            <FooterLink href="https://twitter.com/DragonzWild">
              <TwitterIcon style={{color:'lightblue'}} />

              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </FooterLink>

            <FooterLink href="https://www.youtube.com/channel/UCKZrlnw8bUC-ptzRkVIDrdQ">
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
