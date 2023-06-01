import React, {
	FunctionComponent,
	useEffect,
	useState,
	Component,
} from "react";
import ModalService from "../services/ModalService";
import styles from "../styles/ModalRoot.module.scss";

type ModalRootProps = {};

const ModalRoot: FunctionComponent<ModalRootProps> = (
	props: ModalRootProps
) => {
	const [modal, setModal] = useState<null | {
		component: any;
		props: any;
		close: Function;
	}>(null);

	useEffect(() => {
		// @ts-ignore
		ModalService.on("open", ({ component, props }) => {
			setModal({
				component,
				props,
				close: (value: string) => {
					setModal(null);
				},
			});
		});
	}, []);

	const ModalComponent = modal?.component ? modal.component : null;

	return (
		<div className={ModalComponent ? styles.modalRoot : ""}>
			{ModalComponent && (
				<ModalComponent
					{...modal?.props}
					close={modal?.close}
					className={ModalComponent ? "d-block" : ""}
				/>
			)}
		</div>
	);
};

export default ModalRoot;
