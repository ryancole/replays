import { Actions } from 'flummox';
import Replays from '../repository/ReplayRepository';


export default class ReplayActions extends Actions {

  async getAll (session) {

    let response = await Replays.getAll(session);

    return response.replays;

  }

  async getById (session, id) {

    let response = await Replays.getById(session, id);

    return response;

  }

  async remove (session, id) {

    let response = await Replays.remove(session, id);

    if (response.success == true) {

      return response;

    }

  }

}
