import React from 'react';
import { Link } from 'react-router';


class ApplicationNavbar extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul className="nav">
            <li>
              <Link to="replay-index">
                Replays
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default ApplicationNavbar;
