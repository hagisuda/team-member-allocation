function Header({selectedTeam, teamMemberCount}) {
    return (
        <header className="container">
            <div className="row justify-content-center text-center mt-3">
                <div className="col-10">
                    <h1>Team Member Allcation</h1>
                    <h3>{selectedTeam} has {teamMemberCount} members</h3>
                </div>
            </div>
        </header>
    )
}

export default Header;