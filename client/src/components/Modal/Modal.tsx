import React, { FunctionComponent, ReactNode, Ref, RefObject } from 'react';
import classNames from 'classnames';
import * as Close from '../../assets/icons/xmark-solid.svg';
import Project from '../../types/Project';
import { CgClose } from 'react-icons/cg';


interface IModalProps {
    showModal: boolean,
    children?: ReactNode,
    setShowModal: Function,
}

const Modal: FunctionComponent<IModalProps> = (props: IModalProps) => {
    const { showModal, children, setShowModal } = props;

    return (
        <div className={classNames({
            'modal-overlay': true,
            active: showModal,
            }
        )}>
            { showModal ? (
                <div className="modal-body">
                    <CgClose className="close" onClick={() => setShowModal(false)}/>
                    <div className="modal-contents">
                        {children}
                    </div>
                </div>
            ) : (
            null
            )}
        </div>
    )
}

export default Modal;