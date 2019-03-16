export interface Room {
    id: number;
    name: string;
}

export interface RoomReducerState {
    rooms: Room[];
}

export interface AddRoomType {
    type: 'ADD_ROOM';
    payload: string;
}

export type RoomActionType = AddRoomType;

const INITIAL_STATE: RoomReducerState = {
    rooms: [
        {
            id: 0,
            name: 'Mała sala konferencyjna',
        },
        {
            id: 1,
            name: 'Duza sala konferencyjna',
        },
    ],
};

export default(state: RoomReducerState = INITIAL_STATE, action: RoomActionType) => {
    if (action.type === 'ADD_ROOM') {
        return Object.assign({}, state, {
            rooms: state.rooms.concat({ id: state.rooms.length, name: action.payload}),
        });
    }
    return state;
};
