/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      slg: '896px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1368px',
      '3xl': '1920px',
      '4xl': '2400px',
      '5xl': '3500px',
      '6xl': '4400px',
    },
    fontFamily: {
      Noto: ['Noto Sans TC', 'serif'], // 中文
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '32px',
        sm: '32px',
        md: '32px',
      },
    },
    zIndex: {
      '-10': '-10',
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto',
    },
    transitionTimingFunction: {
      easeInCubic: 'cubic-bezier(0.32, 0, 0.67, 0)',
      easeOutQuint: 'cubic-bezier(0.33, 1, 0.68, 1)',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#0D0C0C',
        white: '#fff',
        pr: {
          lighter: '#CEDBD2',
          light2: '#598C6B',
          light: '#A7C1B0',
          DEFAULT: '#327248',
          dark: '#134022',
          a11y: '#07180D',
        },
        sec: {
          DEFAULT: '#CEA859',
          lighter: '#FCF7F0',
          light2: '#F5DFB2',
          light: '#E7D7BE',
          dark: '#90742D',
          a11y: '#5B4C26',
        },
        bgc: {
          paper: '#FCFCFC',
          DEFAULT: '#F8F8F6',
        },
        system: {
          error: '#FF453A',
          warning: '#FF9F0A',
          success: '#19B86A',
        },
        gray: {
          100: '#FAFAFA',
          200: '#F6F6F6',
          300: '#F2F2F2',
          400: '#D9D9D9',
          500: '#CCCCCC',
          600: '#909090',
          700: '#6F6F6F',
          800: '#363230',
          900: '#292624',
        },
        txt: {
          'super-light': '#75fa90',
          light: '#1DA539',
          DEFAULT: '#353437', // 預設文字顏色
          sec: '#FAD23B',
        },
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      dropShadow: {
        detail: '0 0px 4px rgba(0, 0, 0, 0.1)',
      },
      boxShadow: {
        break: '-0.32px 0px 1.28px 0px rgba(91, 76, 38, 0.1) inset, 0px 0.32px 1.28px 0px rgba(91, 76, 38, 0.1) inset',
        card: '2px 2px 8px 0px rgba(168, 168, 168, 0.25), -2px -2px 8px 0px rgba(168, 168, 168, 0.25)',
        patient: '2px 2px 8px 0px rgba(168, 168, 168, 0.1), -2px -2px 8px 0px rgba(168, 168, 168, 0.1)',
        nav: '0px 4px 10px rgba(141, 141, 141, 0.15)',
        popup: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        inset: '0px -7px 10px 0px rgba(255, 255, 255, 1) inset',
        flow: '0px 0px 15px 0px rgba(0, 0, 0, 0.12) inset',
        doctor: '-1px 0px 4px 0px rgba(7, 24, 13, 0.25) inset, 0px 1px 4px 0px rgba(7, 24, 13, 0.25) inset',
        QA: '0px 1px 10px 0px rgba(0, 0, 0, 0.1), -46px 52px 28px 0px rgba(0, 0, 0, 0.01),-72px 81px 30px 0px rgba(0, 0, 0, 0)',
        flowBody: '-1px 0px 4px 0px rgba(91, 76, 38, 0.1) inset, 0px 1px 4px 0px rgba(91, 76, 38, 0.1) inset',
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px',
      },
      fontSize: {
        'Large/40px_B': [
          '40px',
          {
            lineHeight: '56px',
            letterSpacing: '4.8px',
            fontWeight: '700',
          },
        ],
        'H1/36px_B': [
          '36px',
          {
            lineHeight: '50.4px',
            letterSpacing: '5.76px',
            fontWeight: '700',
          },
        ],
        'H1/36px_SB': [
          '36px',
          {
            lineHeight: '50.4px',
            letterSpacing: '5.76px',
            fontWeight: '600',
          },
        ],
        'H2/32px_R': [
          '32px',
          {
            lineHeight: '44.8px',
            letterSpacing: '3.84px',
            fontWeight: '400',
          },
        ],
        'H2/32px_SB': [
          '32px',
          {
            lineHeight: '44.8px',
            letterSpacing: '3.84px',
            fontWeight: '600',
          },
        ],
        'H2/32px_B': [
          '32px',
          {
            lineHeight: '44.8px',
            letterSpacing: '3.84px',
            fontWeight: '700',
          },
        ],
        'H3/30px_M': [
          '30px',
          {
            lineHeight: '39px',
            letterSpacing: '1.2px',
            fontWeight: '500',
          },
        ],
        'H3/30px_SB': [
          '30px',
          {
            lineHeight: '39px',
            letterSpacing: '4.2px',
            fontWeight: '600',
          },
        ],
        'H3/28px_SB': [
          '28px',
          {
            lineHeight: '36.4px',
            letterSpacing: '3.92px',
            fontWeight: '600',
          },
        ],
        'H3/26px_M': [
          '26px',
          {
            lineHeight: '31.2px',
            letterSpacing: '3.64px',
            fontWeight: '500',
          },
        ],
        'H3/26px_SB': [
          '26px',
          {
            lineHeight: '31.2px',
            letterSpacing: '3.64px',
            fontWeight: '600',
          },
        ],
        'H4/24px_R': [
          '24px',
          {
            lineHeight: '31.2px',
            letterSpacing: '0.96px',
            fontWeight: '400',
          },
        ],
        'H4/24px_M': [
          '24px',
          {
            lineHeight: '31.2px',
            letterSpacing: '0.96px',
            fontWeight: '500',
          },
        ],
        'H4/24px_SB': [
          '24px',
          {
            lineHeight: '31.2px',
            letterSpacing: '1.92px',
            fontWeight: '600',
          },
        ],
        'H4/24px_B': [
          '24px',
          {
            lineHeight: '31.2px',
            letterSpacing: '1.92px',
            fontWeight: '700',
          },
        ],
        'H4/22px_R': [
          '22px',
          {
            lineHeight: '28.6px',
            letterSpacing: '0.88px',
            fontWeight: '400',
          },
        ],
        'H4/22px_M': [
          '22px',
          {
            lineHeight: '28.6px',
            letterSpacing: '0.88px',
            fontWeight: '500',
          },
        ],
        'H4/22px_SB': [
          '22px',
          {
            lineHeight: '28.6px',
            letterSpacing: '0.88px',
            fontWeight: '600',
          },
        ],
        'H4/22px_B': [
          '22px',
          {
            lineHeight: '28.6px',
            letterSpacing: '0.88px',
            fontWeight: '700',
          },
        ],
        'H5/20px_R': [
          '20px',
          {
            lineHeight: '26px',
            letterSpacing: '0.8px',
            fontWeight: '400',
          },
        ],
        'H5/20px_M': [
          '20px',
          {
            lineHeight: '26px',
            letterSpacing: '0.8px',
            fontWeight: '500',
          },
        ],
        'H5/20px_SB': [
          '20px',
          {
            lineHeight: '26px',
            letterSpacing: '0.8px',
            fontWeight: '600',
          },
        ],
        'H5/20px_B': [
          '20px',
          {
            lineHeight: '26px',
            letterSpacing: '0.8px',
            fontWeight: '700',
          },
        ],
        'Default/18px_R': [
          '18px',
          {
            lineHeight: '23.4px',
            letterSpacing: '0.72px',
            fontWeight: '400',
          },
        ],
        'Default/18px_M': [
          '18px',
          {
            lineHeight: '23.4px',
            letterSpacing: '0.72px',
            fontWeight: '500',
          },
        ],
        'Default/18px_SB': [
          '18px',
          {
            lineHeight: '23.4px',
            letterSpacing: '1.44px',
            fontWeight: '600',
          },
        ],
        'Default/18px_B': [
          '18px',
          {
            lineHeight: '23.4px',
            letterSpacing: '0.72px',
            fontWeight: '700',
          },
        ],
        'Default2/16px_R': [
          '16px',
          {
            lineHeight: '20.8px',
            letterSpacing: '0.64px',
            fontWeight: '400',
          },
        ],
        'Default2/16px_M': [
          '16px',
          {
            lineHeight: '20.8px',
            letterSpacing: '0.64px',
            fontWeight: '500',
          },
        ],
        'Default2/16px_SB': [
          '16px',
          {
            lineHeight: '20.8px',
            letterSpacing: '0.64px',
            fontWeight: '600',
          },
        ],
        'Default2/16px_B': [
          '16px',
          {
            lineHeight: '20.8px',
            letterSpacing: '0.64px',
            fontWeight: '700',
          },
        ],
        'Dash/16px_SB': [
          '16px',
          {
            lineHeight: '20.8px',
            letterSpacing: '0.64px',
            fontWeight: '600',
          },
        ],
        'Default3/14px_R': [
          '14px',
          {
            lineHeight: '18.2px',
            letterSpacing: '0.56px',
            fontWeight: '400',
          },
        ],
        'Default3/14px_M': [
          '14px',
          {
            lineHeight: '18.2px',
            letterSpacing: '0.56px',
            fontWeight: '500',
          },
        ],
        'Default3/14px_SB': [
          '14px',
          {
            lineHeight: '18.2px',
            letterSpacing: '0.56px',
            fontWeight: '600',
          },
        ],
        'Default3/14px_B': [
          '14px',
          {
            lineHeight: '18.2px',
            letterSpacing: '0.56px',
            fontWeight: '700',
          },
        ],
        'Dash/14px_SB': [
          '14px',
          {
            lineHeight: '18.2px',
            letterSpacing: '0.56px',
            fontWeight: '600',
          },
        ],
        'Subtitle/12px_R': [
          '12px',
          {
            lineHeight: '15.6px',
            letterSpacing: '0.48px',
            fontWeight: '400',
          },
        ],
        'Subtitle/12px_M': [
          '12px',
          {
            lineHeight: '15.6px',
            letterSpacing: '0.48px',
            fontWeight: '500',
          },
        ],
        'Subtitle/12px_SB': [
          '12px',
          {
            lineHeight: '15.6px',
            letterSpacing: '0.48px',
            fontWeight: '600',
          },
        ],
        'Dash/12px_SB': [
          '12px',
          {
            lineHeight: '15.6px',
            letterSpacing: '0.48px',
            fontWeight: '600',
          },
        ],
        'Subtitle/10px_R': [
          '10px',
          {
            lineHeight: '12px',
            letterSpacing: '0.4px',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
}
