import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/index";
import { Detail, List } from "./pages/index";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<List />} />
          <Route path=":item" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
