import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./billingCyclesActions";
import {reduxForm, Field } from "redux-form";
import labelAndInput from "../common/form/labelAndInput";
import CrediList from "./crediList";

class BillingCycleForm extends Component{
    render(){
        const {handleSubmit, readOnly} = this.props
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndInput} readOnly={readOnly}
                        label="Nome" cols="12 4" placeholder="Informe o nome"/>

                    <Field name="month" component={labelAndInput} 
                        readOnly={readOnly} type="number" 
                        label="Mês" cols="12 4" placeholder="Informe o mês"/>

                    <Field name="year" component={labelAndInput} 
                        readOnly={readOnly} type="number"
                        label="Ano" cols="12 4" placeholder="Informe o ano"/> 

                    <CrediList cols="12 6" />

                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default"
                        onClick={this.props.init}>
                            Cancelar
                        </button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false}) (BillingCycleForm)

function mapDispatchToProps(dispatch){
    return(
        bindActionCreators({init}, dispatch)
    );
}

export default connect(null, mapDispatchToProps)(BillingCycleForm)