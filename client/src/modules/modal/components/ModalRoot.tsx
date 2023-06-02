import { useEffect, useState, useRef, RefObject } from "react";
import ModalService from "../services/ModalService";

const ModalRoot = ({ matches }: { matches: boolean }) => {
	const [modal, setModal] = useState<null | {
		component: any;
		props: any;
		close: Function;
		ref: React.RefObject<HTMLDivElement>;
		matches: boolean;
	}>(null);

	const ref = useRef<HTMLDivElement>(null);

	useOnClickOutside(ref, () => {
		setModal(null);
	});

	const modalRootStyles = {
		position: "fixed",
		top: "0",
		zIndex: "100",
		width: "100vw",
		height: "100vh",
		backgroundColor: "rgba(1, 1, 1, 0.2)",
	};

	useEffect(() => {
		// @ts-ignore
		ModalService.on("open", ({ component, props }) => {
			setModal({
				component,
				props,
				matches,
				close: () => {
					setModal(null);
				},
				ref,
			});
		});
	}, []);

	const ModalComponent = modal?.component ? modal.component : null;

	return (
		<div style={ModalComponent && modalRootStyles}>
			{ModalComponent && (
				<ModalComponent
					{...modal?.props}
					matches={modal?.matches}
					close={modal?.close}
					className={ModalComponent ? "d-block" : ""}
					modalRef={modal?.ref}
				/>
			)}
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

export default ModalRoot;
