import React from 'react';



// Show completed items. You can click to undo complete or delete them as well.

const CompletedItems = ({ todos }) => {
    
    // console.log(todos);


    return(

        <div className="col-lg-6">

            <h3>Completed</h3>

            <ul className="list-group">
                
                {

                    todos.map( (todo, id) => {

                        return(

                            <li className="list-group-item" key={ id } >
                                { todo[0] }
                            </li>

                        );

                    })

                }

            </ul>

        </div>

    );

}

export default CompletedItems;