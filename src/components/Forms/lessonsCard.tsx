import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../theme";
import NumberInput from "../PriceTable/numberInput";
import { IDrivingLessonsProps } from "../../atoms/types/cities";
import { priceFormat } from "../../helpers";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface ILessonsCart {
    selectedLesson: boolean;
    createOrder: (count: number) => void;
}

const LessonsCard = (props: IDrivingLessonsProps & ILessonsCart) => {
    const initialCount = props.selectedLesson ? 1 : 0;
  const [count, setCount] = useState<number | undefined>(initialCount);

  const diasOrDia = (value: string) => {
    const result = Number(value)
      ? Number(value) > 1
        ? "Días"
        : "Día"
      : "Días";
    return `${value} ${result}`;
  };

  const handleCountChange = (valueCount: number) => {
    setCount(valueCount);
    props.createOrder(valueCount)
  }

  return (
    <Stack
      direction={"row"}
      spacing={{ xs: 1, sm: 2 }}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom={`1px solid ${theme.grayScale.main}`}
      padding={"15px"}
    >
      <div style={{width: '200px'}}>
        <Typography
          fontWeight={600}
          variant="body1"
          component={"div"}
          style={{
            color: theme.siManejoTertiary.main,
            textAlign: "left",
          }}
        >
          {props.nombre}
        </Typography>
        <Stack direction={"row"} margin="10px 0 0 0">
          <Typography
            fontWeight={400}
            component={"p"}
            style={{
              color: theme.grayScale.dark,
              width: "100px",
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              fontSize: '12px',
            }}
          >
            <CalendarTodayIcon fontSize="small" />
            {diasOrDia(props.dias)}
          </Typography>
          <Typography
            fontWeight={400}
            component={"p"}
            style={{
              color: theme.grayScale.dark,
              width: "100px",
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              fontSize: '12px',
            }}
          >
            <AccessTimeIcon fontSize="small" />
            {props.totalHours} Hr total
          </Typography>
        </Stack>
      </div>

      <NumberInput
        aria-label="Demo number input"
        placeholder="0"
        min={0}
        max={5}
        value={count}
        onChange={(event, val) => {handleCountChange(val || 0)}}
        style={{
          maxWidth: "100px",
          padding: 0,
          backgroundColor: "transparent",
        }}
      />

      <div style={{textAlign: "right", justifyContent: 'flex-end', display: 'flex', width: '70px' }}>
      <Typography
        fontWeight={600}
        style={{ color: theme.siManejoPrimary.main }}
        variant="body1"
        component={"p"}
        textAlign={'right'}
      >
        {priceFormat(props.costo)}*
      </Typography>
      </div>
    </Stack>
  );
};

export default LessonsCard;
