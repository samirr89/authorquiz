import React from 'react';
import Hero from './Hero'
import Turn from './Turn'
import Continue from './Continue';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as authorAction from '../../redux/actions/authorActions';
class Author extends React.Component {
  render(){
    return (
        <div>
            <Hero />
            <Turn {...this.props.turnData} onAnswerSelected={this.props.onAnswerSelected} highlight={this.props.highlight} />
            <Continue show={this.props.highlight==='correct'} onContinue={this.props.onContinue} />
            <p className="add-author-btn"><Link className="btn btn-outline-success" to="/add_author">Add an Author</Link></p>
        </div>

    )
  }
    
}

function mapStateToProps(state){
 return {
    turnData:state.author.turnData,
    highlight:state.author.highlight
 }
}
function mapDispatchToProps(dispatch){
 return {
    onAnswerSelected:(answer)=>{
        dispatch(authorAction.onAnswerSelected(answer))
    },
    onContinue:()=>{
        dispatch(authorAction.continueQuiz({}))
    }
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Author);