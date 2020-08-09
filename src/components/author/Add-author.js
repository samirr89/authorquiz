import React from 'react';
import './../../style/Addauthorform.css';
import {connect} from 'react-redux';
import * as authorAction from '../../redux/actions/authorActions';
import {withRouter} from 'react-router-dom';
import AuthorForm from './Author-form'


function AddAuthor ({onAddAuthor}) {
        return (
            <div className="AddAuthorForm">
                <h1>Add Author</h1>
                <AuthorForm onAddAuthor={onAddAuthor}/>

            </div>
        )

    
}

function mapStateToProps(state) {
    return { author: state.author }
}

function mapDispatchToProps(dispatch,props) {
    return {
        onAddAuthor: (author) => {
            dispatch(authorAction.createAuthor(author));
            props.history.push('/')

        } 
    }
}

 export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(AddAuthor));