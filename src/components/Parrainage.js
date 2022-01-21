import React from "react";
import Aside from "../components/Aside";

class Parrainage extends React.Component {
  render() {
    const mesParrainages = [
      {
        date: "6 mai 2020",
        filleul: "John Doe",
        envoi: "SMS",
        statut: "En attente",
      },
      {
        date: "5 mai 2020",
        filleul: "Edward Teach",
        envoi: "SMS",
        statut: "Validée",
      },
      {
        date: "22 avril 2020",
        filleul: "Olivier Levasseur",
        envoi: "Email",
        statut: "Expirée",
      },
    ];

    return (
      <>
        <div>
          <Aside />
        </div>
        <section className="parrainage">
          <h1>Mes parrainages</h1>
          <div className="banner">
            <h2>Vous aimez le BoatOn Book ? Recommandez-le !</h2>
            <br />
            <div className="banner-ad">
              <div className="left sides">
                <h3>3 mois Gratuits pour vous</h3>
                <p>à chaque filleul s'abonnant*</p>
              </div>
              <div className="right sides">
                <h3>3 mois Gratuits pour vos filleul</h3>
                <p>dès qu'il s'abonne*</p>
              </div>
            </div>
          </div>
          <div className="call-to-action">
            <button>
              <p>J'envoie un sms</p>
            </button>
            <button>
              <p>J'envoie un email</p>
            </button>
            <button>
              <p>Je partage l'offre sur facebook</p>
            </button>
          </div>
          <div className="list-table">
            <h2>Liste de mes parrainage</h2>

            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Filleul</th>
                  <th>Envoi</th>
                  <th>Statut</th>
                  <th>Action</th>                  
                </tr>
                
              </thead>

              {mesParrainages.map((parrainage, index) => {
                return (
                  <tr className="tbody" key={index}>
                    <td>{parrainage.date}</td>
                    <td>{parrainage.filleul}</td>
                    <td>{parrainage.envoi}</td>
                    <td>{parrainage.statut}</td>
                    <td><button className="resend">Renvoyer</button></td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="ad">
            <p className="blue-p-ad">+ 80%</p>
            <div className="bug-div" >des utilisateurs <br/> recommandent BoatOn</div>
          </div>
          <div>
            <p className="bottom" >
              *A noter: vous pouvez parrainer jusqu'à 5 filleuls sur cette page.
              Si vous souhaitez en parrainer davantage, n'hésitez pas à nous
              envoyer un petit mot à paul@boaton.fr !
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Parrainage;
