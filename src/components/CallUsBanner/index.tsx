import React from "react";
import { BaseCenterContainer, MaxWidthContainer } from "../../atoms";
import styled from "@emotion/styled";
import { useTableOrMobile } from "../../hooks";
import { Button, Typography, useTheme } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IContactNumbers, IOpenHours } from "../../atoms/types/cities";
import { stringToTelephone } from "../../helpers";
import { Resend } from "resend";

interface IContainers {
  isMobile?: boolean;
}

const MainContainer = styled(BaseCenterContainer)(
  ({ bgColor }: { bgColor: string }) => ({
    width: "100%",
    margin: 0,
    padding: '60px 0',
    backgroundColor: bgColor,
    marginTop: "60px",
  })
);

const DoubleColumn = styled.div((props: IContainers) => ({
  display: "flex",
  flexDirection: props.isMobile ? "column" : "row",
  justifyContent: props.isMobile ? "center" : "space-between",
  alignItems: props.isMobile ? "center" : "flex-start",
}));

const HoursContainer = styled.div(() => ({
  borderRadius: "14px",
  backgroundColor: "white",
  padding: "22px",
  width: "100%",
}));

const OpenHoursContainerTable = styled.div(
  ({ txtColor }: { txtColor: string }) => ({
    color: txtColor,
    width: "100%",
    paddingLeft: "20px",
  })
);

const RightDiv = styled(BaseCenterContainer)((props: IContainers) => ({
  width: "auto",
  alignItems: "center",
  alignSelf: "center",
  marginTop: props.isMobile ? "50px" : 0,
}));

interface IInfoSchoolProps {
  openHours: IOpenHours[];
  contactNumbers: IContactNumbers;
  city: string;
}

interface IButtonProps {
  bgColor: {
    dark?: string;
    main: string;
    light: string;
  };
  city: string;
  phoneNumber: string;
  icon: any;
  isMobile?: boolean;
}

const CustomCallUsBannerBotton = (props: IButtonProps) => (
  <Button
    variant="contained"
    size="large"
    startIcon={props.icon}
    sx={{
      px: 3,
      py: 1.5,
      backgroundColor: props.bgColor.main,
      "&:hover": { backgroundColor: props.bgColor.light },
      marginRight: "20px",
      marginBottom: props.isMobile ? "20px" : 0,
      borderRadius: '50px',
    }}
    aria-label={props.city}
  >
    <Typography variant="body1" fontWeight={400} align="left" color={"white"}>
      {stringToTelephone(props.phoneNumber)}
    </Typography>
  </Button>
);

const CallUsBanner = (props: IInfoSchoolProps) => {
  const [mobileSize, tabletSize] = useTableOrMobile();
  const theme = useTheme();
  const resend = new Resend("re_Q2xrrDbZ_KAgNSihPCfn2BCtqGK4j2soj");

  async function sendEmail() {
    console.log("---a-sd-asd-a-s");
    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["eduardiximo@yahoo.com"],
        subject: "Alo World",
        html: "<strong>It works!</strong>",
      });

      console.log("data", data);
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <MainContainer bgColor={theme.siManejoPrimary.light}>
      <MaxWidthContainer isMobile={mobileSize || tabletSize}>
        <DoubleColumn isMobile={mobileSize || tabletSize}>
          <div
            style={{
              width: mobileSize || tabletSize ? "90%" : "65%",
              paddingRight: mobileSize || tabletSize ? 0 : "20px",
              textAlign: mobileSize || tabletSize ? "center" : "left",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={800}
              align={mobileSize || tabletSize ? "center" : "left"}
              color={theme.grayScale.light}
            >
              ¡Inicia hoy!
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              align={mobileSize || tabletSize ? "center" : "left"}
              color={"white"}
              margin={"0 0 40px 0"}
            >
              Aprende de manera práctica con un experto que llega a la puerta de
              tu casa.
            </Typography>
            <CustomCallUsBannerBotton
              bgColor={theme.siManejoSecondary}
              city={`Llamada a ${props.city}`}
              phoneNumber={props.contactNumbers.telefono}
              icon={<PhonelinkRingIcon />}
              isMobile={mobileSize || tabletSize}
            />
            <CustomCallUsBannerBotton
              bgColor={theme.siManejoSecondary}
              city={`Whatsapp a ${props.city}`}
              phoneNumber={props.contactNumbers.whatsapp}
              icon={<WhatsAppIcon />}
              isMobile={mobileSize || tabletSize}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: theme.grayScale.light,
                "&:hover": { backgroundColor: 'white' },
                marginRight: "20px",
                marginBottom: mobileSize || tabletSize ? "20px" : 0,
                borderRadius: '50px',
              }}
              aria-label={"Deja tus datos y te contactamos"}
            >
              <Typography
                variant="body1"
                fontWeight={400}
                align={mobileSize || tabletSize ? "center" : "left"}
                color={theme.siManejoPrimary.main}
              >
                Deja tus datos y te contactamos
              </Typography>
            </Button>
          </div>
          <RightDiv isMobile={mobileSize || tabletSize}>
            <HoursContainer>
              <Typography
                variant="h6"
                fontWeight={800}
                align={mobileSize || tabletSize ? "center" : "left"}
                color={theme.siManejoPrimary.main}
                margin="0 0 20px 0"
              >
                Elige tú horario
              </Typography>
              <DoubleColumn>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AccessTimeIcon
                    fontSize="large"
                    style={{ color: theme.siManejoPrimary.main }}
                  />
                </div>
                <OpenHoursContainerTable txtColor={theme.grayScale.dark || ""}>
                  {props.openHours.map((hour) => (
                    <div>{hour.diaHora}</div>
                  ))}
                </OpenHoursContainerTable>
              </DoubleColumn>
            </HoursContainer>
          </RightDiv>
        </DoubleColumn>
      </MaxWidthContainer>
    </MainContainer>
  );
};

export default CallUsBanner;
