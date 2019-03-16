
export const addRoomAction = (name: string) => {
  return ({
    payload: name,
    type: 'ADD_ROOM',
  });
};
