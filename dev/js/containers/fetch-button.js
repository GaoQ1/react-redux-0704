import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchData} from '../actions/fetch';

require('../../scss/style.scss');

class FetchButton extends Component {
    render() {
        return (
            <div class='btn' onClick={() => this.props.fetchData()}>点击获取异步获取数据</div>
        );
    }

}

function mapStateToProps(state) {
    return {
        users: state.fetchDataDemo
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
      fetchData: fetchData
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FetchButton);
