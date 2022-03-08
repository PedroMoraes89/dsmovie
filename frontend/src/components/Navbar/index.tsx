import {ReactComponent as GitHubLogo} from "assets/img/GitHubLogo.svg";
import './style.css'; 
function Navbar() {
    return (
        <header>
          <nav className="container">
            <div className="dsmovie-nav-content">
              <h1>DSMovie</h1>
              <a href="https://github.com/PedroMoraes89" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-content">
                  <GitHubLogo />
                  <p className="dsmovie-contact-link">/PedroMoraes89</p>
                </div>
              </a>
            </div>
          </nav>
        </header>
    );
}
export default Navbar