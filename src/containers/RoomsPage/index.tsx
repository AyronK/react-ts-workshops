import React from 'react';
import { connect } from 'react-redux';
import { Container, Row,  Button, Input} from 'reactstrap';
import SingleRoom from '../../components/SingleRoom';
import {RoomReducerState, Room } from '../../reducers/roomReducer';
import { addRoomAction } from '../../actions/roomActions';
import { Dispatch} from 'redux';

interface StateProps {
    rooms: Room[];
}

interface DispatchProps {
    addRoom: (name: string) => void;
}

interface State {
    roomName: string;
}

type Props = StateProps & DispatchProps;

export class RoomsPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            roomName: 'test',
        };
    }

  public render() {
    return (
      <Container>
        <Button style={{marginBottom: 20}} onClick={() => this.props.addRoom(this.state.roomName)}>Dodaj pokoj</Button>
        <Input
            type='text'
            name='roomName'
            id='roomName'
            placeholder='type a room name'
            onChange={(e) => this.setState( {roomName : e.target.value})}
        />
        <Row>
          {this.props.rooms.map((item) => {
            return (
              <SingleRoom key={item.id} name={item.name} />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export interface ReducerState {
  roomReducer: RoomReducerState;
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
    addRoom: (name: string) => dispatch(addRoomAction(name)),
});

const mapStateToProps = (state: ReducerState): StateProps => {
  return({
      rooms: state.roomReducer.rooms,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsPage);
