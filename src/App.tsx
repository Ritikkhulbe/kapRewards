import { BrowserRouter } from "react-router-dom"
import RootRouter from "./routes/RootRouter"
import Providers from "./Providers"
import Navbar from "./app/components/Navbar"


function App() {

  return (
    <>
      <Providers>
        <BrowserRouter>
          <div className="layout ">
            <Navbar />
            <div className="w-full ml-[3.5rem]">
            <RootRouter />
            </div>
          </div>
        </BrowserRouter>
      </Providers>
    </>
  )
}

export default App
