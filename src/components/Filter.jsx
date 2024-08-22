import './Filter.scss';

function Filter() {

    return (
    <>
        <div className="filters">
            <div>
                <p>Filter by state</p>
                <div className="badges">
                    <div className="badge selected">
                        To-Do
                    </div>
                    <div className="badge">
                        Done
                    </div>
                    <span className="clear">
                        x clear
                    </span>
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default Filter