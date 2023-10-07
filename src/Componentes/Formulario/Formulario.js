import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

const Formulario = () => {

    const times=[
        'De 0 a 1 ano',
        'Maior que 1 ano',
        'Ate 2 anos'
    ]

    return (
        <section className='formulario'>
        <form>
            <h1>Cadastrese</h1>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="E-mail" placeholder="Digite e-mail"/>
            <CampoTexto label="Telefone" placeholder="Digite seu telefone"/>
            <ListaSuspensa itens={times}/> 
            <br></br>
            <button className="botao">Enviar</button>
        </form>
        </section>
    );
}

export default Formulario;