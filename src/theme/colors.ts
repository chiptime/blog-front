import { createMuiTheme } from '@material-ui/core/styles';

// ! yellow
// export const COLOR_50 = '#fff8e6';
// export const COLOR_100 = '#feefc1';
// export const COLOR_200 = '#fee498';
// export const COLOR_300 = '#fed96e';
// export const COLOR_400 = '#fdd04f';
// export const COLOR_500 = '#fdc830';
// export const COLOR_600 = '#fdc22b';
// export const COLOR_700 = '#fcbb24';
// export const COLOR_800 = '#fcb41e';
// export const COLOR_900 = '#fca713';
// export const COLOR_A100 = '#ffffff';
// export const COLOR_A200 = '#fffcf6';
// export const COLOR_A400 = '#ffe8c3';
// export const COLOR_A700 = '#ffdeaa';

// ! purple
// export const COLOR_50 = '#e6e6ec';
// export const COLOR_100 = '#c1bfd0';
// export const COLOR_200 = '#9895b1';
// export const COLOR_300 = '#6e6b92';
// export const COLOR_400 = '#4f4b7a';
// export const COLOR_500 = '#302b63';
// export const COLOR_600 = '#2b265b';
// export const COLOR_700 = '#242051';
// export const COLOR_800 = '#1e1a47';
// export const COLOR_900 = '#131035';
// export const COLOR_A100 = '#7c73ff';
// export const COLOR_A200 = '#4c40ff';
// export const COLOR_A400 = '#1c0dff';
// export const COLOR_A700 = '#1000f2';


// ! black
export const COLOR_50 = '#e3e3e3';
export const COLOR_100 = '#b9b9ba';
export const COLOR_200 = '#8a8b8c';
export const COLOR_300 = '#5b5c5d';
export const COLOR_400 = '#38393b';
export const COLOR_500 = '#151618';
export const COLOR_600 = '#121315';
export const COLOR_700 = '#0f1011';
export const COLOR_800 = '#0c0c0e';
export const COLOR_900 = '#060608';
export const COLOR_A100 = '#4f4fff';
export const COLOR_A200 = '#1c1cff';
export const COLOR_A400 = '#0000e8';
export const COLOR_A700 = '#0000cf';

export const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            light: COLOR_200,
            main: COLOR_500,
            dark: COLOR_900,
            contrastText: '#fff',
            '50': COLOR_50,
            '100': COLOR_100,
            '200': COLOR_200,
            '300': COLOR_300,
            '400': COLOR_400,
            '500': COLOR_500,
            '600': COLOR_600,
            '700': COLOR_700,
            '800': COLOR_800,
            '900': COLOR_900,
            'A100': COLOR_A100,
            'A200': COLOR_A200,
            'A400': COLOR_A400,
            'A700': COLOR_A700,
        },
        secondary: {
            light: '#fee498',
            main: '#eeb40c',
            dark: '#fca713',
            contrastText: '#000',
        },
    },
});