import React, {Component} from "react";
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import {getList, showUpdate} from "./billingCyclesActions" 

class BillingCycleList extends Component{

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(bc)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        list: state.billingCycle.list
    }
}

function mapDispatchToProps(dispatch){
    return(
        bindActionCreators({getList, showUpdate}, dispatch)
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (BillingCycleList)