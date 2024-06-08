import React from "react";
import './styles/pecas.css'


function Pecas(){
    let pecas = [
        { numero: '73125500', cliente: 'CNH', bitola: 25, material: 'SAE 1020' },
        { numero: '75248663', cliente: 'CNH', bitola: 30, material: 'SAE 4140' },
        { numero: '75267973', cliente: 'CNH', bitola: 40, material: 'SAE 4140' },
        { numero: '87560975', cliente: 'CNH', bitola: 35, material: 'ASTM A36' },
        { numero: '442.9937', cliente: 'Sandvik', bitola: 28, material: 'SAE 1045' },
        { numero: '442.9936', cliente: 'Sandvik', bitola: 22, material: 'SAE 1045' },
        { numero: '1425377', cliente: 'Landini', bitola: 38, material: 'SAE 1045' },
        { numero: '6514191', cliente: 'Landini', bitola: 32, material: 'SAE 4340' },
        { numero: 'BP00018191', cliente: 'Prok', bitola: 45, material: 'SAE 1020' },
        { numero: 'BP40370067', cliente: 'Prok', bitola: 27, material: 'Tubo Mecanico' }
    ];

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
