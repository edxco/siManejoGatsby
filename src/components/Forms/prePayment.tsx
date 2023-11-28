import {
  Button,
  Checkbox,
  FormControl,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import LessonsCard from "./lessonsCard";
import { IDrivingLessonsProps } from "../../atoms/types/cities";
import { priceFormat, stringToTelephone } from "../../helpers";
import Logo from "../../images/simanejoLogo.png";

interface IPrePaymentsProps {
  lessons: IDrivingLessonsProps[];
  selectedLesson: string;
  whatsApp: string;
}

const CustomAnchor = styled("a")(({ bgColor }: { bgColor: string }) => ({
  backgroundColor: bgColor,
  padding: "6px 12px",
  color: "white",
  borderRadius: "16px",
  textDecoration: "none",
  ':hover': {
    backgroundColor: 'blue'
  }
}));

const FormPrePayment = (props: IPrePaymentsProps) => {
  // Will create initial object with id lessons as keys
  const initialLessonsCount: {
    [key: string]: { count: number; cost: number };
  } = props.lessons.reduce((accumulator, value) => {
    return {
      ...accumulator,
      [value.id]: {
        count: props.selectedLesson === value.id ? 1 : 0,
        cost: value.costo,
      },
    };
  }, {});

  const [lessonsSelected, setLessonsSelected] = useState<{
    [key: string]: { count: number; cost: number };
  }>(initialLessonsCount);
  const [calcOrder, setCalcOrder] = useState<{
    subTotal: number;
    discount: number;
    total: number;
  }>({
    subTotal: initialLessonsCount[props.selectedLesson].cost,
    discount: 0,
    total: 0,
  });
  const [checkDiscount, setCheckDiscount] = useState<{
    sameAdress: boolean;
    ownCar: boolean;
  }>({ sameAdress: false, ownCar: false });
  const [totalLessons, setTotalLessons] = useState(0);

  const theme = useTheme();

  const calculateDiscount = (subTotalTemp: number) => {
    let costoTotalTemp = subTotalTemp;

    if (checkDiscount.sameAdress || checkDiscount.ownCar) {
      costoTotalTemp = costoTotalTemp * 0.1;
    } else {
      costoTotalTemp = 0;
    }

    return costoTotalTemp;
  };

  const calculateOrder = () => {
    let costoTotal = 0;
    let lessonsSelectedCount = 0;

    for (let id in lessonsSelected) {
      costoTotal += lessonsSelected[id].count * lessonsSelected[id].cost;
      lessonsSelectedCount += lessonsSelected[id].count;
      setTotalLessons(lessonsSelectedCount);
    }

    setCalcOrder({
      ...calcOrder,
      subTotal: costoTotal,
      discount: calculateDiscount(costoTotal),
      total: costoTotal - calculateDiscount(costoTotal),
    });
  };

  useEffect(() => {
    setCalcOrder({
      ...calcOrder,
      subTotal: initialLessonsCount[props.selectedLesson].cost,
      total: initialLessonsCount[props.selectedLesson].cost,
    });
  }, [props.selectedLesson]);

  //Calculate total with or without discount
  useEffect(() => {
    calculateDiscount(calcOrder.subTotal);

    setCalcOrder({
      ...calcOrder,
      discount: calculateDiscount(calcOrder.subTotal),
      total: calcOrder.subTotal - calculateDiscount(calcOrder.subTotal),
    });
  }, [checkDiscount.sameAdress, checkDiscount.ownCar]);

  const handleUpdateOrder = (lessonId: string, newValue: number) => {
    lessonsSelected[lessonId].count = newValue;
    calculateOrder();
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={"20px"}
      >
        <img
          src={Logo}
          alt="Si Manejo Logo"
          style={{ width: "35%", maxWidth: "180px" }}
        />
        <Typography
          fontWeight={600}
          variant="body1"
          component={"div"}
          lineHeight={'30px'}
          textAlign={'right'}
          sx={{ maxWidth: '60%', color: theme.siManejoSecondary.main, backgroundColor: theme.backGroundColors.main, borderRadius: '16px', padding: '10px' }}
        >
          Estamos mejorando para tí. Antes de pagar verifica disponibilidad
          mediante whatsApp:{" "}
          <CustomAnchor
            bgColor={theme.siManejoPrimary.main}
            href={`https://api.whatsapp.com/send?phone=${props.whatsApp}&text=Quiero%20informaci%C3%B3n%20de%20los%20cursos%20en%20Puebla`}
            target="_blank"
          >
            {stringToTelephone(props.whatsApp)}{" "}
          </CustomAnchor>
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} gap={5}>
        <div style={{ width: "55%" }}>
          <Typography
            fontWeight={400}
            style={{
              color: theme.siManejoTertiary.dark,
            }}
            variant="body1"
            component={"p"}
            marginTop={"10px"}
            marginBottom={"10px"}
            textAlign={ "left"}
          >
            Porfavor, proporciona los datos de la persona{" "}
            <strong>que va a tomar el curso.</strong>{" "}
            <span
              style={{
                color: theme.siManejoTertiary.main,
                fontStyle: "italic",
              }}
            >
              En caso de contratar más de un solo curso poner el nombre de la
              persona responsable.
            </span>
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Nombre Completo"
            fullWidth
            helperText="Please enter your name"
            variant="standard"
          />
          <Stack direction={"row"} spacing={{ xs: 1, sm: 2 }}>
            <TextField
              required
              id="outlined-required"
              label="Tel/Whats"
              helperText="Please enter your name"
              variant="standard"
            />
            <TextField
              required
              id="outlined-required"
              label="Correo"
              helperText="Please enter your name"
              variant="standard"
            />
          </Stack>
          <TextField
            required
            id="outlined-required"
            label="Dirección"
            fullWidth
            helperText="Please enter your name"
            variant="standard"
          />
        </div>
        <div
          style={{
            width: "45%",
            backgroundColor: theme.siManejoTertiary.light,
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          {props.lessons.map((lesson, index) => {
            return (
              <LessonsCard
                createOrder={(value) =>
                  handleUpdateOrder(lesson.id, Number(value))
                }
                nombre={lesson.nombre}
                totalHours={lesson.totalHours}
                hoursPerDay={lesson.hoursPerDay}
                dias={lesson.dias}
                costo={lesson.costo}
                descripcion={lesson.descripcion}
                id={lesson.id}
                mostPopular={false}
                optionalHours={lesson.optionalHours}
                selectedLesson={props.selectedLesson === lesson.id}
              />
            );
          })}
          <div>
            {totalLessons > 1 ? (
              <Stack
                flexDirection={"row"}
                justifyContent="flex-start"
                alignItems={"flex-start"}
                sx={{ mt: 2 }}
              >
                <Checkbox
                  {...label}
                  disabled={checkDiscount.ownCar === true}
                  onChange={() =>
                    setCheckDiscount({
                      ...checkDiscount,
                      sameAdress: !checkDiscount.sameAdress,
                    })
                  }
                />
                <Typography
                  fontWeight={400}
                  style={{
                    color:
                      checkDiscount.ownCar === true
                        ? theme.grayScale.main
                        : theme.siManejoPrimary.main,
                  }}
                  variant="body2"
                  component={"p"}
                  marginTop={"10px"}
                  sx={{ textAlign: "left" }}
                >
                  Voy a iniciar todos los cursos contratados{" "}
                  <span style={{ fontWeight: 600 }}>
                    {" "}
                    desde la misma dirección en horas seguidas
                  </span>
                </Typography>
              </Stack>
            ) : null}
            <Stack
              flexDirection={"row"}
              justifyContent="flex-start"
              alignItems={"flex-start"}
            >
              <Checkbox
                {...label}
                disabled={checkDiscount.sameAdress === true}
                onChange={() =>
                  setCheckDiscount({
                    ...checkDiscount,
                    ownCar: !checkDiscount.ownCar,
                  })
                }
              />
              <Typography
                fontWeight={400}
                style={{
                  color:
                    checkDiscount.sameAdress === true
                      ? theme.grayScale.main
                      : theme.siManejoPrimary.main,
                }}
                variant="body2"
                component={"p"}
                marginTop={"12px"}
                sx={{ textAlign: "left" }}
              >
                Voy a tomar{" "}
                <span style={{ fontWeight: 600 }}>
                  {" "}
                  todo el curso en mi automovil{" "}
                </span>
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              justifyContent={"flex-end"}
              sx={{ mt: 3 }}
            >
              <Typography
                fontWeight={400}
                style={{ color: theme.siManejoTertiary.main }}
                variant="body1"
                component={"div"}
                sx={{ width: "auto", textAlign: "right" }}
              >
                Subtotal
              </Typography>
              <Typography
                fontWeight={600}
                style={{ color: theme.siManejoPrimary.main }}
                variant="body1"
                component={"div"}
                sx={{ width: "90px", textAlign: "right" }}
              >
                {priceFormat(calcOrder.subTotal)}
              </Typography>
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"flex-end"}>
              <Typography
                fontWeight={400}
                style={{ color: theme.siManejoSecondary.main }}
                variant="body1"
                component={"div"}
                sx={{ width: "auto", textAlign: "right" }}
              >
                Descuento
              </Typography>
              <Typography
                fontWeight={600}
                style={{ color: theme.siManejoSecondary.main }}
                variant="body1"
                component={"div"}
                sx={{ width: "90px", textAlign: "right" }}
              >
                {priceFormat(calcOrder.discount)}
              </Typography>
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"flex-end"}>
              <Typography
                fontWeight={400}
                style={{ color: theme.siManejoTertiary.main }}
                variant="body1"
                component={"div"}
                sx={{ width: "auto", textAlign: "right" }}
              >
                Total
              </Typography>
              <Typography
                fontWeight={900}
                style={{ color: theme.siManejoPrimary.main }}
                variant="body1"
                component={"div"}
                sx={{ width: "90px", textAlign: "right" }}
              >
                {priceFormat(calcOrder.total)}
              </Typography>
            </Stack>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default FormPrePayment;
