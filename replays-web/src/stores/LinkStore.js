import { Store } from 'flummox';
import { OrderedMap } from 'immutable';


export default class LinkStore extends Store {

  constructor (flux) {

    super();

    // fetch action ids
    const linkActionIds = flux.getActionIds('links');

    // register action handlers
    this.register(linkActionIds.create, this._handleCreate);
    this.register(linkActionIds.getAll, this._handleGetAll);

    // set initial state
    this.state = {
      links: OrderedMap()
    };

  }

  has (id) {
    return this.state.links.has(id);
  }

  get (id) {
    return this.state.links.get(id);
  }

  getAll () {
    return this.state.links.toArray();
  }

  _handleCreate (link) {
    this.setState({
      links: this.state.links.set(
        link.id,
        link
      )
    });
  }

  _handleGetAll (links) {

    // convert array of links to map
    let hash = links.reduce((prev, curr) => {
      return prev.set(curr.id, curr);
    }, OrderedMap());

    // update store state
    this.setState({
      links: this.state.links.merge(hash)
    });

  }

}
