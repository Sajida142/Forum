import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";

function Layout() {
  const location = useLocation();

  // Hide header only on welcome page
  const hideHeader = location.pathname === "/";

  return (
    <>
      {!hideHeader && <Header />}

      <div className={!hideHeader ? "pt-24" : ""}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/threads" element={<PostsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route
            path="/create-thread"
            element={
              <ProtectedRoute>
                <div>Create Thread Page</div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;