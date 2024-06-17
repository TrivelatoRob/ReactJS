import React from "react";
import './styles/pecas.css'


function Pecas({pecas}){

    return (
        pecas.map((element) =>{
            return (<div className="grid">
                <ul className="lista">
                <li>Numero: {element['numero']}</li>
                <li>Cliente: {element['cliente']}</li>
                <li>Bitola: {element['bitola']}</li>
                <li>Material: {element['material']}</li>

                </ul>
            </div>)
        })
    )

}

export default Pecas
