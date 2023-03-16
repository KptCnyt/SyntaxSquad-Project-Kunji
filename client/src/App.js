import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import UserPreferences from "./pages/user-preferences/UserPreferences";
import Result from "./pages/result/Result";
import NGOs from "./pages/admin/NGOs";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
	<div>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user-preferences" element={<UserPreferences />} />
      <Route path="/result" element={<Result />} />
      <Route path="/admin/ngos" element={<NGOs />} />
		</Routes>
	</div>
);

export default App;
