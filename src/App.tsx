import { ThemeProvider } from "styled-components"
import theme from "./styles/theme/theme"
import { GlobalStyles } from "./styles/GlobalStyles"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { router } from "./router.routes"

function App() {

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Helmet titleTemplate="%s | Menu" />
        <RouterProvider router={router} />
      <GlobalStyles />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
