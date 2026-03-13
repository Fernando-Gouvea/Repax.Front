// src/App.tsx
import { RouterProvider } from "react-router-dom";
import { AppProviders } from "./core/providers/AppProviders";
import { router } from "./route";

const App = () => {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
};

export default App;
