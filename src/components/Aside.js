import React from "react";

class Aside extends React.Component {
  render() {
    return (
      <div>
        <ul className="aside">
          <li className="link">Mes informations personnelles</li>
          <hr />
          <li className="link">Mes informations de virement</li>
          <hr />
          <li className="link">Mon bateau</li>
          <hr />
          <li className="link">Mes emplacements</li>
          <hr />
          <li className="link">Mes demandes</li>
          <hr />
          <li className="link">Mes messages</li>
          <hr />
          <li className="link">Mes parrainages</li>
        </ul>
      </div>
    );
  }
}

export default Aside;
