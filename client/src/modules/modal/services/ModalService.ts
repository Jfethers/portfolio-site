import { ReactElement } from "react";

const ModalService = {
	on(event: string, callback: Function) {
		document.addEventListener(event, (e) => {
			const customEvent = e as CustomEvent;
			return callback(customEvent.detail);
		});
	},
	open(component: ReactElement, props = {}) {
		document.dispatchEvent(
			new CustomEvent("open", { detail: { component, props } })
		);
	},
};

export default ModalService;
