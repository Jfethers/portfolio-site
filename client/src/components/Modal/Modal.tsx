import React, {
	FunctionComponent,
	ReactNode,
	useRef,
	useEffect,
	RefObject,
} from "react";
import classNames from "classnames";
import { CgClose } from "react-icons/cg";

interface IModalProps {
	showModal: boolean;
	children?: ReactNode;
	setShowModal: Function;
}

const Modal: FunctionComponent<IModalProps> = (props: IModalProps) => {
	const { showModal, children, setShowModal } = props;

	const ref = useRef<HTMLDivElement>(null);

	useOnClickOutside(ref, () => {
		setShowModal(false);
	});

	return (
		<div
			className={classNames({
				"modal-overlay": true,
				active: showModal,
			})}
		>
			{showModal ? (
				<div className='modal-body' ref={ref}>
					<CgClose className='close' onClick={() => setShowModal(false)} />
					<div className='modal-contents'>{children}</div>
				</div>
			) : null}
		</div>
	);
};

function useOnClickOutside(ref: RefObject<HTMLDivElement>, handler: Function) {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			if (
				(ref && !ref?.current) ||
				(ref?.current && ref?.current.contains(event.target as Node))
			) {
				return;
			}
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
}

export default Modal;
