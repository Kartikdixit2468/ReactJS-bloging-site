import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from "./custom_components/Signup";
import Signin from "./custom_components/Signin";
import Post_page from "./custom_components/Post_page.js";
import News_tab from "./News_tab";
import Home from "./Home";
import Dashboard from "./Dashboard";

function App() {
  const key = 12345678
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/sign-in" element={<Signin />} />
          <Route exact path="/all-news" element={<News_tab />} />
          <Route exact path="/post" element={<Post_page />} />
          <Route exact path={"/admin-dashboard-"+ key} element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
