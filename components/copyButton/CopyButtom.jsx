import React from 'react';

//Libs
import { IconButton } from 'rsuite';
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";

//Styles
import '../../styles/CopyButtom.css';

const CopyButtom = ({onClick, title, status}) => {
    return(
        <IconButton className="btnCopy" 
                    icon={
                        status ? 
                            <FaClipboardCheck className="rs-icon"/>
                            :
                            <FaClipboard className="rs-icon"/>
                        } 
                    appearance="subtle" 
                    onClick={onClick}>
                    {title}
        </IconButton>
    )
}


export default CopyButtom;