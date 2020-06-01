import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap'

class MyModal extends Component{
    render(){ 
        return (
        <>
            <Modal {...this.props} style={{opacity:1}}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.props.onHide}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
        );
    }
}
export default MyModal;