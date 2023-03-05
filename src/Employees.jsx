import {useState, useEffect}  from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = ({setTeamMemberCount, setSelectedTeam}) => {
    const [employees, setEmployees] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }]);

    const [team, setTeam] = useState("TeamB");

    function handleTeamSelectChange(e) {
        setTeam(e.target.value)
    }

    useEffect(() => {
        setSelectedTeam(team)
    }, [team])

    function handleEmployeeCardClick(e) {
        setEmployees(employees.map(
            (employee) => {
                if(employee.id ===  parseInt(e.currentTarget.id)) {
                    //Toggle teams
                    return (employee.teamName === team)?{...employee, teamName:''}:{...employee, teamName:team}
                } else {
                    //Skip remove/add if id doesn't match
                    return employee 
                }
            }
        ))
    }

    useEffect(() => {
        setTeamMemberCount(employees.filter(employee=>employee.teamName === team).length);
        localStorage.setItem('employeeList', JSON.stringify.apply(employees));
    }, [employees])

    return (
        <main className="container">
            <div className="row justify-content-center text-center mt-3">
                <div className="col-6">
                    <select className="form-select form-select-lg" value={team} onChange={handleTeamSelectChange}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center text-center mt-3">
                <div className="col-10">
                    <div className="card-collection">
                    {
                        employees.map((employee) => (
                                <div key={employee.id} id={employee.id} className={employee.teamName === team? "card m-2 standout":"card m-2"}   style={{cursor:"pointer"}} onClick={handleEmployeeCardClick}>
                                    <img src={employee.gender==="female"?femaleProfile:maleProfile} className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{employee.fullName}</h5>
                                        <p className="card-text"><b>Team:</b> {employee.teamName}</p>
                                        <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                                    </div>
                                </div>
                            )
                        )
                    }
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Employees;