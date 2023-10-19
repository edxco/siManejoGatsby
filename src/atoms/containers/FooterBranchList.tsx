import React from "react";
import styled from "@emotion/styled";
import { Typography, Link } from "@mui/material";
import { ISchoolData } from "../../components/Footer/MainFooter";
import { useTheme } from "@emotion/react";
import { stringToTelephone } from "../../helpers";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useTableOrMobile } from "../../hooks";

const MainContainer = styled.div(() => ({
  maxWidth: "300px",
  margin: 0,
  padding: 0,
}));

const ContactContainer = styled.div(({ colorTxt }: { colorTxt: string }) => ({
  paddingLeft: "12px",
  color: colorTxt,
}));

const ContactIconAndTitle = styled.div(({ theme }) => ({
  display: "flex",
}));

const PhoneContainer = styled.div(({ txtColor }: { txtColor: string }) => ({
  marginTop: "1px",
  marginBottom: "13px",
  color: txtColor,
}));

const LinkContact = styled(Link)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 5,
}));

interface IFooterBranchList {
  branches: ISchoolData[];
  title: string;
}

const FooterBranchList = (props: IFooterBranchList) => {
  const theme = useTheme();
  const [mobileSize, tabletSize] = useTableOrMobile();

  return (
    <MainContainer>
      <Typography
        variant="h6"
        fontWeight={900}
        align="left"
        color={"white"}
        margin={"20px 10px 10px 10px"}
      >
        {props.title}
      </Typography>
      <ContactContainer colorTxt={theme.grayScale.light}>
        {props.branches.map((branch) => (
          <>
            <ContactIconAndTitle>{branch.node.sucursal}</ContactIconAndTitle>
            <PhoneContainer txtColor={theme.grayScale.main}>
              {mobileSize ? (
                <LinkContact
                  variant="body2"
                  fontWeight={400}
                  align="center"
                  underline="none"
                  color="inherit"
                  href={`tel:${branch.node.numerosContacto.telefono}`}
                >
                  <PhoneAndroidIcon sx={{ fontSize: "17px" }} />
                  {stringToTelephone(branch.node.numerosContacto.telefono)}
                </LinkContact>
              ) : (
                <LinkContact
                  variant="body2"
                  fontWeight={400}
                  align="center"
                  underline="none"
                  color="inherit"
                  href={`https://api.whatsapp.com/send?phone=${branch.node.numerosContacto.whatsapp}&text=Hola!%0AQuiero%20informaci%C3%B3n%20de%20los%20cursos%20en%20${branch.node.sucursal}`}
                >
                  <WhatsAppIcon sx={{ fontSize: "17px" }} />
                  {stringToTelephone(branch.node.numerosContacto.whatsapp)}
                </LinkContact>
              )}
            </PhoneContainer>
          </>
        ))}
      </ContactContainer>
    </MainContainer>
  );
};

export default FooterBranchList;
