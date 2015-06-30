import React from 'react';
import { Link } from 'react-router';


export default class ApplicationNavbar extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul className="nav">
            <li>
              <Link to="replays">
                Replays
              </Link>
            </li>
            <li>
              <Link to="links">
                Links
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
