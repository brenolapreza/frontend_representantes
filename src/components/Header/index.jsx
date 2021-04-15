import './style.css'
export default function Header(){
    return(
        <header>
            <ul>
                <li><a href="/mostrar">MOSTRAR</a></li>
                <li><a href="/criar">CRIAR</a></li>
                <li><a href="/editar">EDITAR</a></li>
                <li><a href="/deletar">DELETAR</a></li>
            </ul>
        </header>
    )
}