import { Actions } from 'flummox';
import Links from '../repository/LinkRepository';


export default class LinkActions extends Actions {

  async create (session, replay) {

    return await Links.create(session, replay);

  }

  async getAll (session) {

    let response = await Links.getAll(session);

    return response.links;

  }

}
