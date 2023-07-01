import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";
import SignIn from "./components/sigin";
import SignOut from "./components/signout";
import SignUpBiz from "./components/signupBiz";
import MyCards from "./components/myCards";
import ProtectedRoute from "./components/common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CardsCreate from "./components/cardsCreate";
import CardsDelete from "./components/cardsDelete";
import CardsEdit from "./components/cardsEdit";
import CardsShow from "./components/cardsShow";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignUp redirect="/sign-in" />} />
          <Route
            path="sign-up-biz"
            element={<SignUpBiz redirect="/my-cards" />}
          />
          <Route path="sign-in" element={<SignIn redirect="/" />} />
          <Route path="sign-out" element={<SignOut redirect="/" />} />
          <Route
            path="my-cards"
            element={
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/delete/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardsDelete />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/edit/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardsEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/show/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardsShow />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-card"
            element={
              <ProtectedRoute onlyBiz>
                <CardsCreate />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
