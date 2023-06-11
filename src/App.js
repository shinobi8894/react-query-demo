import { QueryClient, QueryClientProvider } from "react-query";
import Repositories from "./components/Repositories";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    

      {/* The rest of your application */}

      <Repositories />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}

    </QueryClientProvider>
  );
};

export default App;