import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", backgroundColor: "#0F172A" }}>
        <Navbar />
        <main
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#E2E8F0",
            }}
          >
            Student Developer Platform 🚀
          </h1>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;