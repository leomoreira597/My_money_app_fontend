import React, {Component} from "react";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";
import {connect} from "react-redux";

class DashBoard extends Component{
    render(){
        const {credit, debt} = this.props.summary
        return(
            <div>
                <ContentHeader title="DashBoard" small="Versão 1.0"/>
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank"
                            value={`R$ ${credit}`} text="Total de créditos"/>
                        <ValueBox cols="12 4" color="red" icon="credit-card"
                            value={`R$ ${debt}`} text="Total de débtos"/>
                        <ValueBox cols="12 4" color="blue" icon="money"
                            value={`R$ ${credit - debt}`} text="Valor Consolidado"/>    
                    </Row>
                </Content>
            </div>
        );
    }
}

function mapStateToProps(state){
    return({
        summary: state.dashBoard.summary
    });
}

export default connect(mapStateToProps) (DashBoard)