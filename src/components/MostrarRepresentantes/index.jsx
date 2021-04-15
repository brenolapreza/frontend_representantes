import axios from "axios"
import React from 'react'
import './style.css'

export default function MostrarRepresentantes(){
  const [dados, setDados] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:4002/representantes').then(res =>{
      const dados = res.data
      setDados(dados)
    })
  }, [])



  return(
     <div>
           
           {dados.map((valores, index) => {
             return <li key={index}>
               <li>{valores.nome}</li>
               <li>{valores.url}</li>
               <li>{valores.whatsapp_link}</li>
             </li> 
           })}
     
     </div>
  )
}

