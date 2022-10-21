import React from 'react'
import Heart from '../components/Heart';
import Context from "../Context"
import { useContext } from 'react';


export default function Favoritos() {
  const { galeria, setGaleria } = useContext(Context)   

  const handleClick = (id) => {
    galeria.findIndex((element, index) =>{
      if(element.id === id){
        galeria[index].liked = !galeria[index].liked
    }
    })
    setGaleria([...galeria])
  }
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {galeria.map((foto) => {
          return(foto.liked ? (
            <div className='foto' key={foto.id} style={{backgroundImage: `url(${foto.src.medium})`}} onClick={() => {
              handleClick(foto.id)
              }}>
              {foto.alt}
              <Heart filled={galeria.liked}/>
              <p>{galeria.alt}</p>
            </div>
          ):('') 
        )})}       
      </div>
    </div>
  );
}