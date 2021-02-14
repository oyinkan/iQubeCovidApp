import * as React from 'react';
import { connect } from 'react-redux';
import {loadUsers} from "./../../redux/actions";

class DataComponent extends React.Component {   
    componentDidMount() {       
        this.props.loadUsers();   
    };

    render() {       
        if (this.props.loading) {           
            return <div>Loading</div>       
        }
        if (this.props.error) {           
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>       
        }

        return (           
            <div>               
                {this.props.data.map(data =>                   
                    <div key={data._id}>                       
                        <div>{data.state}</div>                       
                        <div>{data.confirmedCases}</div>                       
                        <div>{data.casesOnAdmission}</div>                       
                        <div>{data.discharged}</div>                       
                        <td>{data.death}</td>                   
                    </div>               
                )}               
            </div>       
        );   
    }
}


const mapStateToProps = state => ({   
    data: state.reduxThunk.data,   
    loading: state.reduxThunk.loading,   
    error: state.reduxThunk.error,
});

const mapDispatchToProps = {loadUsers};

export default connect(mapStateToProps, mapDispatchToProps)(DataComponent);