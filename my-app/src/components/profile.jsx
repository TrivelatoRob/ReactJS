import React from "react";


function Profile({bitola, material, tratamento}){

    return (
        <div>
            <p>Comprar esse material: {bitola} {material}</p>
            {tratamento ? <p>{tratamento} </p> : <p>"Não necessita tratamento"</p> }
        </div>
    )
  
}

export default Profile