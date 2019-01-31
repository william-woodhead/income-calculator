// This page is based on the Material-ui Next.js page
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs
import { SheetsRegistry, GenerateClassName } from "jss";
import purple from "@material-ui/core/colors/purple";
import {
  createMuiTheme,
  createGenerateClassName,
  Theme
} from "@material-ui/core/styles";

export interface PageContext {
  theme: Theme;
  sheetsManager: Map<any, any>;
  sheetsRegistry: SheetsRegistry;
  generateClassName: GenerateClassName;
}

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

function createPageContext(): PageContext {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  };
}

let pageContext: PageContext;

export default function getPageContext() {
  if (!(process as any).browser) return createPageContext();

  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
