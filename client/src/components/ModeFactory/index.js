import React from 'react';
import connect from "react-redux/es/connect/connect";
import TableMode from "../TableMode";
import ScrollMode from "../ScrollMode";

const ModeFactory = (props)=> {
    console.log(props);
    if (props.mode === "scroll") {
        return <ScrollMode {...props}/>
    } else {
        return <TableMode {...props}/>
    }
} ;
const mapStateToProps = state => {
    return {
        mode: state.mode,
    };
};

export default connect(mapStateToProps, null)(ModeFactory);