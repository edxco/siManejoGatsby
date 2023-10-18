import '@emotion/react'
import { Palette } from '@mui/material';

declare module '@emotion/react' {
  interface BasicObjects {
    dark?: string;
    main: string;
    light: string;
  }
  export interface Theme extends Palette{
    status: {
      danger: string;
    };
    siManejoPrimary: BasicObjects;
    siManejoSecondary: BasicObjects;
    siManejoTertiary: BasicObjects;
    grayScale: BasicObjects;
    backGroundColors: BasicObjects;
  }
}