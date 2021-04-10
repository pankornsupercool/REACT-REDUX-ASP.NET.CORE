import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions/dCandidate";

const DCandidates = (props) => {
    return ( 
        <div>
            From DCandidates
        </div>
     );
}
const mapStateToProps = state =>({
    dCandidateList: state.dCandidate.list
}) 

const mapActionToProps ={
    fetchAllDCandidates: actions.fetchAll
}


export default connect(mapStateToProps)(DCandidates);