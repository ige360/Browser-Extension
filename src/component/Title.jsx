import React from "react";
import "./Title.css"

function Title() {
    return (
              <div className="title-container">
                <h2>Extension List</h2>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Inactive</button>
                </div>
             </div>
    )
}

export default Title;