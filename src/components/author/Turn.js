import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types'
function highlightToBgColor(highLight){
    const mapping={
        'none':'',
        'correct':'green',
        'wrong':'red'
    }

    return mapping[highLight]
}
const Turn=({author,books,highlight,onAnswerSelected})=>{
    return (
        <div className="row turn" style={{backgroundColor:highlightToBgColor(highlight)}}>
           <div className="col-4 offset-1">
                <img  src={'images/authors/'+author.imageUrl+'.jpg'} className="authorimage" alt="Author"/>
           </div>
           <div  className="col-6">
               {books.map((title)=><Book onClick={onAnswerSelected} key={title} title={title}/>)}
        </div>
        </div>
    )
}

Turn.propTypes={
    author:PropTypes.shape({
        name:PropTypes.string.isRequired,
        imageUrl:PropTypes.string.isRequired,
        books:PropTypes.arrayOf(PropTypes.string),
        imageSource:PropTypes.string.isRequired
    }),
    books:PropTypes.arrayOf(PropTypes.string),
    highlight:PropTypes.string,
    onAnswerSelected:PropTypes.func
}

 export default Turn;