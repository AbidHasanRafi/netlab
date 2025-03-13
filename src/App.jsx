import { ToastContainer } from "react-toastify";
import Footer from "./shared/footer/Footer";
import Navbar from "./shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-anek dark:selection:text-black dark:selection:bg-white">
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
