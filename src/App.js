import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import {useState}  from 'react';

function App() {
  const [teamMemberCount, setTeamMemberCount] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState('');
  return (
    <div className="App">
      <Header 
        selectedTeam={selectedTeam}
        teamMemberCount={teamMemberCount}
      />
      <Employees 
        setTeamMemberCount={setTeamMemberCount} 
        setSelectedTeam={setSelectedTeam}
      />
      <Footer />
    </div>
  );
}

export default App;
