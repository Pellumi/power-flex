import "./App.css";
import HomePage from "./pages/home-page";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import QuotePage from "./pages/quote-page";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="quotation/details" element={<QuotePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
