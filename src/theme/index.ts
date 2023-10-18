import { createTheme } from "@mui/material/styles";
import { PaletteOptions, light } from "@mui/material/styles/createPalette";
import '@fontsource/inter/100.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/900.css';

const theme = createTheme({
  status: {
    danger: "#FE0017",
  },
  siManejoPrimary: {
    main: "rgb(26, 56, 99)",
    light: "rgb(37, 79, 139)",
  },
  siManejoSecondary: {
    main: "rgb(203, 22, 27)",
    light: "",
  },
  siManejoTertiary: {
    main: "rgb(63, 58, 71)",
    light: "rgb(248, 248, 248)",
  },
  grayScale: {
    dark: "rgb(129, 133, 137)",
    main: "rgb(192, 192, 192)",
    light: "rgb(211, 211, 211)",
  },
  backGroundColors: {
    dark: '',
    main: '#F5F5F5',
    light: '#f8f9fc',
  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
  },
  // 	expired: {
  // 		main: '#02447B',
  // 		contrastText: '#fff',
  // 	},
  // typography: {
  // 	h6: {
  // 		fontSize: 14,
  // 	},
  // 	h5: {
  // 		fontSize: 16,
  // 	},
  // 	h4: {
  // 		fontSize: 20,
  // 	},
  // 	h3: {
  // 		fontSize: 24,
  // 	},
  // 	h2: {
  // 		fontSize: 34,
  // 	},
  // },
  // components: {
  // 	MuiButton: {
  // 		styleOverrides: {
  // 			root: {
  // 				borderRadius: '10px',
  // 				textTransform: 'capitalize',
  // 			},
  // 		},
  // 	},
  // 	MuiFormControl: {
  // 		styleOverrides: {
  // 			root: {
  // 				borderRadius: '12px',
  // 			},
  // 		},
  // 	},
  // 	MuiTablePagination: {
  // 		defaultProps: {
  // 			labelRowsPerPage: 'Elementos por página',
  // 		},
  // 	},
  // MuiDataGrid: {
  // 	styleOverrides: {
  // 		root: {
  // 			border: 'none',
  // 		},
  // 		columnSeparator: {
  // 			display: 'none',
  // 		},
  // 	},
  // },
  // },
  // shape: {},
});

declare module "@mui/material/styles" {
  interface BasicObjects {
    dark?: string;
    main: string;
    light: string;
  }
  export interface Theme {
    status: {
      danger: string;
    };
    siManejoPrimary: BasicObjects;
    siManejoSecondary: BasicObjects;
    siManejoTertiary: BasicObjects;
    grayScale: BasicObjects;
    backGroundColors: BasicObjects;
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    status?: {
      danger?: string;
    };
    siManejoPrimary?: BasicObjects;
    siManejoSecondary?: BasicObjects;
    siManejoTertiary?: BasicObjects;
    grayScale: BasicObjects;
    backGroundColors: BasicObjects;
  }
}

export default theme;
