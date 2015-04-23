import React from 'react';
import FluxComponent from 'flummox/component';

class Dashboard extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['replays']}>
        <section>
          <p>{this.props.replays}</p>
        </section>
      </FluxComponent>
    );
  }
}

export default Dashboard;