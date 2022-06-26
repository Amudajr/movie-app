import React from "react";

const SearchBox = (props) => {


    return(
        <div>
            <input type="text" 
            value={props.value} 
            onChange={(event) => props.setsearchValue(event.target.value)} 
            placeholder="Find Movies" />
        </div>
    );

};

export default SearchBox;