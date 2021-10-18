import React, {useState} from 'react';

//Libs
import { Panel, PanelGroup, Tag, Divider ,ButtonToolbar, Modal, IconButton, Button} from 'rsuite';
import { FaThumbsDown, FaThumbsUp, FaLink, FaClipboard, FaClipboardCheck} from "react-icons/fa";

//Styles
import '../../styles/Card.css';

//Components
import ModalURL from '../modalUrl/ModalURL';
import CopyButtom from '../copyButton/CopyButtom';

const Card = (props, index) =>{

    //Dados da API
    const { content, title ,nome, data_pub, data_jul, name, initials, url} = props;

    const [btnCopy, setBtnCopy] = useState('Copiar')
    const [statusCopy, setStatusCopy] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const copyText = (textArea) =>{ 
        
        //Copia o texto
        navigator.clipboard.writeText(textArea);
        
        setBtnCopy('Copiado!');
        setStatusCopy(true);
    }

    const onClickPositive = (e) =>{
        e.target.style.backgroundColor = "green";
        e.target.children[0].style.color = "white";
        console.log('e',e);
        //console.log('e',e.target.svg);
    }

    
    const onClickNegative = (e) =>{
        e.target.style.backgroundColor = "red";
        e.target.children[0].style.color = "white";
        //console.log('e',e.target);
    }

    return(
        <Panel className="turivius-card" shaded bordered>
        
        <Tag size="lg">{initials}</Tag>

        <div className="containerCopy">
           
            <div className="container">
                <h4>{name}</h4>
                <h5>{nome}</h5>
            </div>

            <IconButton icon={<FaLink className="rs-icon"/>} onClick={()=>openModal()}>Acessar</IconButton>
        </div>

        <PanelGroup  bordered accordion>
            {content.map(c => (
                <Panel key={c.title} className="collapsePanel" header={c.title}>
                    <p className="scopeContent">{c.content}</p>
                    <div className="containerCopy">
                        <span>{data_jul}</span>
                        
                        <CopyButtom 
                            title={btnCopy} 
                            status={statusCopy} 
                            onClick={()=>copyText(c.content)} 
                        />

                    </div>
                </Panel>
            ))}
        </PanelGroup>

        <span className="dtPub">{data_pub}</span>
        
        <Divider/>

        <div className="containerButtom">
            <span>Você gostou dessa decisão?</span>
            <ButtonToolbar>
                <IconButton color="green" icon={<FaThumbsUp />} size="lg"  appearance="subtle" onClick={e => onClickPositive(e)}/>
                <IconButton color="red" icon={<FaThumbsDown />} size="lg" appearance="subtle" onClick={e => onClickNegative(e)}/>
            </ButtonToolbar>
        </div>

        <ModalURL
            title={`${nome} - ${name}`}
            source={url}
            open={modalOpen}
            onClose={closeModal}
            onClickButton={closeModal}
        />       

       
    </Panel>
    )
}

export default Card;