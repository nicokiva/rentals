import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import List from './components/List';
import Create from './components/Create';

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="list" element={<List />} />
            <Route path="new" element={<Create />} />
        </Routes>
    </BrowserRouter>
);
