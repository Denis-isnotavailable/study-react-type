import { Component } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { ModalStyled, ButtonCloseStyled, ModalBox } from "./Modal.styled";

interface IProps {
    children?: React.ReactNode,
    closeModal(): void
}

const modalRoot = document.querySelector('#modal-root')!;


export class Modal extends Component<IProps> {    
    

    render() {

        return createPortal(
            <ModalStyled>
                <ModalBox>
                    <ButtonCloseStyled type="button" onClick={() => this.props.closeModal()}>
                        <AiOutlineClose size={20}/>
                    </ButtonCloseStyled>                    
                    {this.props.children}
                </ModalBox>                
            </ModalStyled>,
            modalRoot
        );
    }
}