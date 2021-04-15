import axios from "axios"
import React from 'react'

export default function DeletarRepres() {
    const [dados, setDados] = React.useState([])

    const [representante, setRepresentante] = React.useState({
        _id: ''

    })

    const outherDados = {
        "_id": representante._id,

    }

    React.useEffect(() => {
        axios.get('http://localhost:4002/representantes').then(res => {
            const dados = res.data
            setDados(dados)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        //  const { nome, url, whatsapp_link, cursos:[{online, presencial}] } = representante;

        axios.delete(`http://localhost:4002/deletar/${outherDados._id}`, outherDados)
        // //     console.log(representante)
        console.log(representante)
    }

    const handleChange = e => {
        setRepresentante({ ...representante, [e.target.name]: e.target.value });
        console.log(dados)
    };




    return (
        <form onSubmit={handleSubmit}>
            <select onChange={handleChange} name="_id">
                <option value="none">Escolha</option>
                {dados.map((valores, index) => {
                    return <option key={index} value={valores._id}>{valores.nome}</option>
                })}
            </select>
            <input onChange={handleChange} type="submit" />
        </form>
    )
}

