function Footer() {
    const today = new Date();

    return (
        <footer className="container">
            <div className="row justify-content-center text-center mt-3">
                <div className="col-10">
                    <h5>Team Member Allocation App - {today.getFullYear()}</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer