import { Barlow } from "next/font/google";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "600", "400"],
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #d7d5dd;
  }
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main className={barlow.className}>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
