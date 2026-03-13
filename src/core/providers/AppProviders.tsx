import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { theme } from "../../styles/theme";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { queryClient } from "../query/client";
import { ProvedorAuth } from "../../contextos/ContextoAuth";
import { GlobalLoader } from "../../components/ui/GlobalLoader";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProvedorAuth>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <GlobalLoader />

          {children}

          {/* Ferramenta de debug apenas para desenvolvimento */}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </ThemeProvider>
      </ProvedorAuth>
    </QueryClientProvider>
  );
};
