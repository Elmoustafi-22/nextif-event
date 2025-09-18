import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import PaymentHeader from "./components/PaymentHeader";
import PaymentForm from "./components/PaymentForm";

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <PaymentHeader />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<PaymentForm />} />
            </Routes>
          </main>
        </div>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
