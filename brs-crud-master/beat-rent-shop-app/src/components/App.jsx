import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import CelularesCRUD from "./CelularesCRUD";
import CelularesFORM from "./CelularesFORM";
import './estilo.css';
import NotFound404 from "./NotFound404";
import Juegoscrud from "./JuegosCrud";
import JuegosFORM from "./juegoFORM";

function App(){
    return(
        <div>
            <BrowserRouter>
            <Menu />
            <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/celulares" element={<CelularesCRUD />} />
                    <Route path="/celulares/new" element={<CelularesFORM />} />
                    <Route path="/celulares/edit/:id" element={<CelularesFORM />} />
                    <Route path="/celulares/delete/:id" element={<CelularesFORM del={true} />} />
                    <Route path="*" element={<NotFound404 />}/>
                    <Route path="/juegos" element={<Juegoscrud />}/>
                    <Route path="/juegos/new" element={<JuegosFORM />}/>
                    <Route path="/juegos/edit/:id" element={<JuegosFORM />}/>
                    <Route path="/juegos/delete/:id" element={<JuegosFORM del={true}/>}/>
            </Routes>

            

            
            </BrowserRouter>
        </div>
    )
}

export default App