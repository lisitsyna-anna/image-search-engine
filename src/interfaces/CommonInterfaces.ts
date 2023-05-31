export interface IImage {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export interface IDataFromPixabay {
  total: number;
  images: IImage[];
}

export interface ITheme {
  colors: {
    black: string;
    white: string;
    primaryText: string;
    secondaryText: string;
    backgroundBody: string;
    accentColor: string;
    hoverColor: string;
  };
  space: number[];
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontSizes: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  fontWeights: {
    normal: number;
    bold: number;
  };
  lineHeights: {
    body: number;
    heading: number;
  };
  borders: {
    none: string;
    normal: string;
  };
  radii: {
    none: string;
    normal: string;
    round: string;
  };
}
