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

       /*     <Modal style={{opacity:1,margintop:'50%'}}
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>*/