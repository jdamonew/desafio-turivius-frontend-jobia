import React from "react";
import {  Modal, Button} from 'rsuite';
import '../../styles/ModalURL.css'

const ModalURL = ({source, title, open, onClose, onClickButton}) =>{
    return(
        <Modal full backdrop={'static'} overflow={true} open={open} onClose={onClose}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe src={source} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClickButton} appearance="default">
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalURL;