import React, { useState } from "react";
import {
  BaseCenterContainer,
  MaxWidthContainer,
  SubtitleAndTitle,
} from "../../atoms";
import { useTableOrMobile } from "../../hooks";
import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import { IDrivingLessonsProps } from "../../atoms/types/cities";
import styled from "@emotion/styled";
import { priceFormat } from "../../helpers";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
  numberInputClasses,
} from "@mui/base/Unstable_NumberInput";
import NumberInput from "./numberInput";
import FormPrePayment from "../Forms/prePayment";

interface IPriceTableProps {
  lessons: Array<IDrivingLessonsProps>;
  title: string;
  description: string;
  conditions: string;
}

interface IContainersProps {
  bgColor?: string;
  isMobile?: boolean;
  isPopular?: boolean;
  borderLine?: string;
  lastChild?: boolean;
  bgColorPopular?: string;
  $maxWidth?: string;
}

const CardPrice = styled(Card)((props: IContainersProps) => ({
  maxWidth: props.isPopular
    ? `calc(${props.$maxWidth} + 50px)`
    : props.$maxWidth,
  margin: props.isMobile ? "5px 0" : "20px 0",
  borderRadius: props.isPopular ? "6px" : 0,
  backgroundColor: props.isPopular ? props.bgColorPopular : props.bgColor,
  height: props.isPopular ? "620px" : "550px",
  borderRight:
    props.lastChild || props.isMobile
      ? `1px solid ${props.borderLine}`
      : "none",
  borderLeft: `1px solid ${props.borderLine}`,
  borderTop: `1px solid ${props.borderLine}`,
  borderBottom: `1px solid ${props.borderLine}`,
  boxShadow: "none",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignItems: "center",
}));

const CardsContainer = styled(MaxWidthContainer)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
}));

const TitleContainer = styled.div((props: IContainersProps) => ({
  alignItems: "center",
  height: props.isPopular ? "120px" : "90px",
  display: "flex",
  flexDirection: "column",
}));

const DescriptionContainer = styled(BaseCenterContainer)(() => ({
  height: "130px",
  margin: "10px 0",
}));

const CardActionsCustom = styled(CardActions)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const CardContentContainer = styled.div(
  ({
    borderLine,
    borderLineHover,
    mobileSize,
  }: {
    borderLine: string;
    borderLineHover: string;
    mobileSize: boolean;
  }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    border: `2px solid ${borderLine}`,
    padding: "7px 20px",
    cursor: "pointer",
    width: mobileSize ? "100%" : "auto",
    margin: "50px auto 30px auto",
    textDecoration: "none",
    transition: "transform 0.5s, border 1s",
    ":hover": {
      border: `2px solid ${borderLineHover}`,
      transform: "translateY(-5px)",
    },
  })
);

const style = {
  position: "absolute" as "absolute",
  borderRadius: "16px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const PriceTable = (props: IPriceTableProps & { whatsApp: string }) => {
  const [mobileSize, tabletSize] = useTableOrMobile();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [lessonSelected, setLessonSelected] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePaymentClic = (id: string) => {
    setLessonSelected(id);
    setOpen(true);
  };

  const viewPort1 = useMediaQuery({
    query: "(min-width: 940px) and (max-width: 1281px)",
  });
  const viewPort2 = useMediaQuery({
    query: "(min-width: 720px) and (max-width: 939px)",
  });
  const viewPort3 = useMediaQuery({ query: "(max-width: 721px)" });

  let maxWidthValue = viewPort1
    ? "45%"
    : viewPort2
    ? "45%"
    : viewPort3
    ? "100%"
    : "300px";

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        padding: "90px 0",
        backgroundColor: theme.backGroundColors.light,
      }}
    >
      <CardsContainer isMobile={mobileSize || tabletSize}>
        <SubtitleAndTitle
          title={props.title}
          subtitle="Paquetes & precios"
          margin="0 0 15px 0"
        />
        <Typography
          variant="h6"
          component={"div"}
          textAlign={"center"}
          sx={{ mb: 4 }}
        >
          {props.description}
        </Typography>
        {props.lessons.map((lesson, index) => {
          return (
            <CardPrice
              bgColor={"white"}
              bgColorPopular={theme.siManejoPrimary.main}
              isPopular={lesson.mostPopular}
              borderLine={theme.grayScale.light}
              lastChild={index === props.lessons.length - 1}
              isMobile={viewPort3}
              $maxWidth={maxWidthValue}
              key={lesson.id}
            >
              <CardContent
                sx={{
                  p: 0,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TitleContainer isPopular={lesson.mostPopular}>
                  <Typography
                    variant="h6"
                    component="div"
                    color={
                      lesson.mostPopular
                        ? theme.siManejoTertiary.light
                        : theme.siManejoTertiary.main
                    }
                    fontWeight={600}
                    gutterBottom
                    align="center"
                    sx={{ pt: 4, mb: 0 }}
                  >
                    {lesson.nombre.toUpperCase()}
                  </Typography>
                  {lesson.mostPopular ? (
                    <Typography
                      component="div"
                      color={
                        lesson.mostPopular
                          ? theme.siManejoTertiary.light
                          : theme.siManejoTertiary.main
                      }
                      fontWeight={600}
                      gutterBottom
                      align="center"
                      sx={{
                        px: 3.5,
                        py: 0.5,
                        borderRadius: "50px",
                        backgroundColor: theme.siManejoSecondary.main,
                        fontSize: "11px",
                      }}
                    >
                      {"Más popular".toUpperCase()}
                    </Typography>
                  ) : null}
                </TitleContainer>

                <div
                  style={{
                    backgroundColor: lesson.mostPopular
                      ? theme.siManejoTertiary.light
                      : theme.siManejoPrimary.main,
                    width: "80%",
                    borderRadius: "50px",
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={400}
                    component="div"
                    color={
                      lesson.mostPopular ? theme.siManejoPrimary.main : "white"
                    }
                    align="center"
                    sx={{
                      pt: 1,
                      pb: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    {priceFormat(lesson.costo)}
                    <span style={{ fontSize: "20px" }}>*</span>
                  </Typography>
                </div>
                <DescriptionContainer>
                  <Typography
                    variant="body2"
                    sx={{ p: 2.5 }}
                    color={lesson.mostPopular ? "white" : "text.secondary"}
                    textAlign={"center"}
                  >
                    {lesson.descripcion}
                  </Typography>
                </DescriptionContainer>
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontWeight={600}
                  sx={{ mt: 3 }}
                  color={
                    lesson.mostPopular
                      ? theme.grayScale.light
                      : theme.siManejoTertiary.main
                  }
                >
                  {`${lesson.dias} dias / ${lesson.hoursPerDay} hr por día`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontWeight={400}
                  color={
                    lesson.mostPopular
                      ? theme.grayScale.light
                      : theme.siManejoTertiary.main
                  }
                >
                  {`${lesson.totalHours} horas en total`}
                </Typography>
                {lesson.optionalHours && lesson.optionalHours !== "0" ? (
                  <Typography
                    variant="subtitle2"
                    component="div"
                    fontWeight={400}
                    color={
                      lesson.mostPopular
                        ? theme.grayScale.light
                        : theme.siManejoTertiary.main
                    }
                  >
                    {lesson.optionalHours}
                  </Typography>
                ) : null}
              </CardContent>
              <CardActionsCustom>
                <CardContentContainer
                  borderLine={
                    lesson.mostPopular
                      ? theme.grayScale.light
                      : theme.siManejoPrimary.main
                  }
                  borderLineHover={
                    lesson.mostPopular
                      ? theme.siManejoPrimary.main
                      : theme.grayScale.main
                  }
                  mobileSize={mobileSize}
                  key={lesson.id}
                  onClick={() => handlePaymentClic(lesson.id)}
                >
                  <Typography
                    component="div"
                    fontWeight={600}
                    color={
                      lesson.mostPopular
                        ? theme.grayScale.light
                        : theme.siManejoSecondary.main
                    }
                    align="center"
                    style={{
                      textDecoration: "none",
                      fontSize: mobileSize ? "14px" : "16px",
                    }}
                  >
                    Reservar / Pago
                  </Typography>
                </CardContentContainer>
              </CardActionsCustom>
            </CardPrice>
          );
        })}
        <Typography
          variant="body2"
          component="div"
          fontWeight={400}
          color={theme.siManejoTertiary.main}
          align="center"
        >
          {props.conditions}
        </Typography>
      </CardsContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormPrePayment
            lessons={props.lessons}
            selectedLesson={lessonSelected}
            whatsApp={props.whatsApp}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default PriceTable;
