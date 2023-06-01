import { FunctionComponent, useState, Component, ReactElement } from "react";
import Project from "../../types/Project";
import TileModal from "./TileModal";
import tileColors from "../../styles/variables/_variables.scss";
import ModalService from "../../modules/modal/services/ModalService";

interface ITileProps {
	key: string;
	project: Project;
	index: number;
}

const Tile: FunctionComponent<ITileProps> = (props: ITileProps) => {
	const { project, index } = props;
	const tileKey = project.color as keyof typeof tileColors;
	const tileColor = tileColors[tileKey];

	const addModal = () => {
		// @ts-ignore
		ModalService.open(TileModal, { project });
	};

	return (
		<div
			style={{ backgroundColor: tileColor, animationDelay: index / 6 + "s" }}
			className='tile'
			onClick={() => addModal()}
		>
			{project.title}
		</div>
	);
};

export default Tile;
