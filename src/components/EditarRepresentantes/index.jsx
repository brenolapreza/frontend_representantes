import axios from "axios"
import React from 'react'

export default function EditarRepresentantes() {
    const [dados, setDados] = React.useState([])

    const [representante, setRepresentante] = React.useState({
        _id: '',
        nome: '',
        url: '',
        whatsapp_link: ''

    })

    const outherDados = {
        "_id": representante._id,
        "nome": representante.nome,
        "url": representante.url,
        "whatsapp_link": representante.whatsapp_link,
        "cursos": {
            "online": {
                "evp": "<div>asdasd</div>"
            },
            "presencial": {
                "evp": "<div>asdasd</div>"
            },
        }

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

        axios.put(`http://localhost:4002/editar/${outherDados._id}`, outherDados)
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

            <div>
                <input onChange={handleChange} type="text" placeholder="nome" name="nome" />
                <input onChange={handleChange} type="text" placeholder="url" name="url" />
                <input onChange={handleChange} type="text" placeholder="whatsapp" name="whatsapp_link" />
                <input onChange={handleChange} type="submit" />
            </div>

        </form>
    )
}

