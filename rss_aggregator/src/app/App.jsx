import { BrowserRouter } from "react-router";
import "./styles/reset.css";
import "./styles/variables.css";
import Routing from "@/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
