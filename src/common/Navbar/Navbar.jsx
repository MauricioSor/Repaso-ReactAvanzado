import React, { useState } from 'react';
import {Menu} from "../../data/Menu";
import Links from './Links';
import ButtonsMenu from './ButtonsMenu';

const Navbar = () => {
    const [log,setLog]=useState();
    
    const Ingresar =(data)=>{
        if(data.usuario =="admin"&& data.contraseña==123){
            setLog(true);
        }
    }
    const Salir=()=>{
        if(log===true){
            setLog(false);
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" >
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {Menu.map((item,index) => (
                                <Links key={index}item={item}/>
                            ))
                            }
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="text-end">
                            <ButtonsMenu log={log} Ingresar={Ingresar} Salir={Salir}/>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;