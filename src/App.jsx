import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Videos, Login, Singup, Upload, NotFound } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="videos" element={<Videos />} />
      <Route path="upload" element={<Upload />} />
      <Route path="login" element={<Login />} />
      <Route path="singup" element={<Singup />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
