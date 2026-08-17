import MT_Side_Logo from '../assets/img/MT_Side_Logo.webp'
import '../css/transferpage.css'
import { useNavigate } from 'react-router-dom';
import { Upload, ListChecks, Copy, FileText, Trash2, ChevronDown } from 'lucide-react'

const TransferPage = () => {

    const navigate = useNavigate();

    return (
        <section id="TransferPage">
            <header id="TP-Header">
                <img src={MT_Side_Logo} alt="Logo Meccha Transfer" id="TP-Logo" onClick={() => navigate('/')} />

                <div id="header-ops">
                    <button className="tp-btn" id="tp-upload-btn">
                        <Upload size={18} /> Fazer upload
                    </button>

                    <button className="tp-btn" id="tp-select-all-btn">
                        <ListChecks size={18} /> Selecionar todos
                    </button>

                    <div className="tp-key-box">
                        <p className="tp-key-label">CHAVE PÚBLICA</p>
                        <div className="tp-key-value-row">
                            <span className="tp-key-value">MT-PUB-7XQ9-3K2L-9Z8V</span>
                            <button className="tp-copy-btn">
                                <Copy size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="tp-key-box">
                        <p className="tp-key-label">CHAVE PRIVADA</p>
                        <div className="tp-key-value-row">
                            <span className="tp-key-value">MT-PRIV-5GJ8-H2Y4-D6M1</span>
                            <button className="tp-copy-btn">
                                <Copy size={16} />
                            </button>
                        </div>
                    </div>

                    <label id="tp-admin-access">
                        <input type="checkbox" />
                        <span>Liberar acesso de administrador a chave pública</span>
                    </label>
                </div>
            </header>
        </section>
    )
}

export default TransferPage;