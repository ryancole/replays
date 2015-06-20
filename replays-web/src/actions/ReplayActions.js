import { Actions } from 'flummox';
import Replays from '../repository/ReplayRepository';


export default class ReplayActions extends Actions {

  async getByActiveSession (session) {

    let response = await Replays.getByActiveSession(session);

    return response.replays;

  }

}
