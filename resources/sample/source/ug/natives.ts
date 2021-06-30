import { callNative, SampPlayer } from "samp-node-lib";
import { HudComponents } from "./enums";

// see samp-node wiki
// https://github.com/AmyrAhmady/samp-node/wiki/Native-caller

// see ugmp wiki
// https://gtaundergroundmod.com/pages/ug-mp/documentation

export const AddAtomicModel = (modelName: string, txdName: string, drawDistance: number, modelFlags: number): void => {
	callNative("AddAtomicModel", "ssfi", modelName, txdName, drawDistance, modelFlags);
};

export const TogglePlayerHUDComponents = (player: SampPlayer, hudComponent: HudComponents): void => {
	callNative("TogglePlayerHUDComponents", "ii", player.playerid, hudComponent);
};

export const EnableRadioAutoTune = (toggle: boolean): void => {
	callNative("EnableRadioAutoTune", "i", toggle);
};

export const IsRubbishVisibleForPlayer = (player: SampPlayer): boolean => {
	return callNative("IsRubbishVisibleForPlayer", "I", player.playerid) as boolean;
};