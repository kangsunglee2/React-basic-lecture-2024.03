import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Board from "../pages/Board";
import Root from "../pages/Root";
import NotFound from "../pages/NotFound";
import BoardDetail from "../pages/BoardDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElment: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: '/board', element: <Board />},
      {path: '/board/:bid', element: <BoardDetail />},
    ]
  }
]);
  
function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;