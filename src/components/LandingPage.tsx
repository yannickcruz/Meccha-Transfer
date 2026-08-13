import MT_Side_Logo from '../assets/img/MT_Side_Logo.webp'
import '../css/landingpage.css'
import { Box, CirclePlus } from 'lucide-react'

const LandingPage = () => {
    

    return(
        <section id="LandingPage">
            <div id="lp-main-container">
                <h1 id="lp-title">
                    <img src={MT_Side_Logo} alt="Imagem de Logo" id="lp-logo-img" />
                </h1>
                <p className="std-text" id='lp-pres-text'>
                    Meccha Transfer permite transferências rápidas e seguras entre dispositivos com tecnologia de ponta.
                </p>
                <div id="lp-action-area">
                    <div className="lp-action-area-subcontainer">
                        <span className="s-icon"><Box/></span>
                        <p className="std-text lp-a-a-text" >GERAR NOVA SESSÃO</p>
                        <button className="lp-btn"><CirclePlus/> Gerar nova Sessão</button>
                    </div>
                    <form action="" className="lp-action-area-subcontainer">
                        <span className="s-icon"><Box/></span>
                        <p className="std-text lp-a-a-text" >INSERIR CHAVE DE ACESSO</p>
                        <div id="lp-form-area">
                            <input type="text" id="lp-form-input"  placeholder='Coloque a chave de acesso aqui'/>
                            <button className='lp-btn' id="form-btn"><CirclePlus/> Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <footer id="lp-footer">
                <p className="std-text">Feito por Yannick Soares Cruz</p>
            </footer>
        </section>
    )
}

export default LandingPage;