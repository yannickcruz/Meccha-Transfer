import MT_Side_Logo from '../assets/img/MT_Side_Logo.webp'
import type { SessionKeys, UploadedFile, sKey } from '../types/interfaces.ts';
import '../css/transferpage.css'
import { useNavigate } from 'react-router-dom';
import { Upload, ListChecks, Copy, FileText, Trash2, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react';

const TransferPage = ({ sessionKey, sessionFiles }: { sessionKey: SessionKeys | null, sessionFiles: UploadedFile[] | null }) => {

    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [keys, setKeys] = useState<SessionKeys>({
        privKey: null,
        pubKey: null
    });
    const [instanceKey, setInstanceKey] = useState<sKey | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        if (sessionKey) {
            const { privKey, pubKey } = sessionKey;
            setKeys(prev => ({ ...prev, privKey: privKey ?? null, pubKey: pubKey ?? null }));
            if (sessionKey.privKey != null) {
                setIsAdmin(true);
                setInstanceKey(privKey);
            } else {
                setInstanceKey(pubKey);
            }
        }

        if (sessionFiles) {
            setFiles(sessionFiles)
        } else {
            const preview_files: UploadedFile[] = [
                { id: 0, name: 'arquivo.pdf', size: 100 },
                { id: 1, name: 'arquivo 2.pdf', size: 100 }
            ];
            setFiles(preview_files);
        }
    }, []);

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

                    {isAdmin && <div className="tp-key-box">
                        <p className="tp-key-label">CHAVE PRIVADA</p>
                        <div className="tp-key-value-row">
                            <span className="tp-key-value">MT-PRIV-5GJ8-H2Y4-D6M1</span>
                            <button className="tp-copy-btn">
                                <Copy size={16} />
                            </button>
                        </div>
                    </div>}

                    <label id="tp-admin-access">
                        <input type="checkbox" />
                        <span>Liberar acesso de administrador a chave pública</span>
                    </label>
                </div>
            </header>

            <main id="file-container">
                {files.map((file: UploadedFile) => {
                    return (
                        <div className="tp-file-item" key={file.id}>
                            <div className="tp-file-icon">
                                <FileText size={26} />
                            </div>

                            <div className="tp-file-info">
                                <p className="tp-file-name">{file.name}</p>
                                <p className="tp-file-size">{file.size}</p>
                            </div>

                            <div className="tp-file-actions">
                                <div className="tp-actions-select">
                                    <span>Ações</span>
                                    <ChevronDown size={16} />
                                </div>
                                <button className="tp-delete-btn">
                                    <Trash2 size={18} />
                                </button>
                            </div>

                            <input type="checkbox" className="tp-file-checkbox" />
                        </div>
                    )
                })}
            </main>
        </section>
    )
}

export default TransferPage;