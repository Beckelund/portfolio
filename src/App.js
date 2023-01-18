import './App.css';

//Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

//Mui Components
//Link
import Link from '@mui/material/Link';


function App() {

  const cardStyle = {
    boxShadow: '0 2rem 4rem 0 rgba(0,0,0,0.2)',
  }


  return (
    <div className="App">
      <header className="App-header">

        <div className="nameDisplay">
          <p className="name">Johan Bäcklund</p>
        </div>
        <div className="card" style={cardStyle}>
          <p className="title">
            This page is currently <br></br>under construction.
          </p>

          <div className="iconBox">
            <div className="icon">
              <Link href="https://www.linkedin.com/in/johan-b%C3%A4cklund/" rel="noopener noreferrer" color="inherit"  target="_blank">
                <LinkedInIcon sx={{fontSize: 80, color: "rgb(253, 246, 229);"}}></LinkedInIcon>
              </Link>
            </div>
            <div className="icon">
              <Link href="https://github.com/Beckelund" rel="noopener noreferrer" color="inherit"  target="_blank">
                <GitHubIcon sx={{fontSize: 80, color: "rgb(253, 246, 229);"}}></GitHubIcon>
              </Link>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;