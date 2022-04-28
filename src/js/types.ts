// import { MapData } from "./MapTypes";

// These are some examples that show hot to define a type (in object oriented languages called 'class').

// An object with constants. Do not use constans elsewhere in your code.
export const constants = {
    GROUP_1: "group_id_1",
    MAX_ROOM_SIZE: 10,
}

// An enumeration that gives you options as a choice (strings).
export enum Buttons {
    BUTTON_LEFT = "button_left",
    BUTTON_RIGHT = "button_right",
    BUTTON_DOWN = "button_down"
}

// An enumeration that gives you options as a choice (numbers).
export enum GameEvent {
    COLLISION = 0,
    JUMP = 1,
    GOAL = 2
}

// The definition of an interface which is an object with specific attributes.
// ? means that this value is optional.
// Note that you can also define a class (which can have methods as well).
export interface SocketData {
    type: Buttons,
    broadcast?: boolean,
    recipientIds?: Array<string>,
    roomId?: string;
    payload: any
}

// You can use an interface in another interfcae.
export interface GameStartData {
    event: GameEvent
}

// You can define a type as an array of something else (like an array of interfaces).
export type GameStartDatas = Array<GameStartData>;
