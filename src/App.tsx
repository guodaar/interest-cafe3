import Routes from "./routes/Routes";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
};

export default App;
