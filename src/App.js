import LoginPage from "./pages/login/LogIn";
import SignUp from "./pages/login/SignUp";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SignUp />}>
      {/* <Route index element={<Home />} /> */}
      <Route path="login" element={<LoginPage />} />
      {/* <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} /> */}
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
