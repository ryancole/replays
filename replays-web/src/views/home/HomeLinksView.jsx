import React from 'react';
import FluxComponent from 'flummox/component';
import LinkTable from '../../components/LinkTable';
import SectionNavbar from '../../components/SectionNavbar';


class HomeLinksView extends React.Component {

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar
              label="Links" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <LinkTable 
              links={this.props.links} />
          </div>
        </div>
      </div>
    );
  }

}

export default class HomeLinksViewWrapper extends React.Component {

  render () {
    return (
      <FluxComponent connectToStores={{
        links: store => ({
          links: store.getAll()
        })
      }}>
        <HomeLinksView {...this.props} />
      </FluxComponent>
    );
  }

  componentDidMount () {
    setTimeout(() => {

      const links = this.props.flux.getActions("links");

      // store needs the links
      links.getAll(this.props.activeSession);

    });
  }

}
