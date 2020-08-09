import React from 'react';
class AuthorForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
           author:{
            name:'',
            imageUrl:'',
            books:[],
            bookTemp:''
           }
        }
        this.onFieldChange=this.onFieldChange.bind(this); 
    }

    //In arrow funcs the 'this' keyword works like i want it So dont need to bind explicitly in constructor //
    onAddBook=event=>{
        event.preventDefault();
        const author={
            ...this.state.author,  books: this.state.author.books.concat([this.state.author.bookTemp]),
            bookTemp: ''
        }
        this.setState({
           author
        })
      
    }
    onSubmitHandler=(event)=>{
      event.preventDefault();
      this.props.onAddAuthor(this.state)
      
    }
    onFieldChange(event){
        const author= Object.assign({},
            this.state.author, {[event.target.name]:event.target.value}
        )
        this.setState({
            author
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <div className="AddAuthorForm_input">
                    <label htmlFor='name'>Name</label>
                    <input type="text" onChange={this.onFieldChange} value={this.state.author.name} name="name" />
                </div>
                <div className="AddAuthorForm_input">
                    <label htmlFor='imageUrl'>Image Url</label>
                    <input type="text" onChange={this.onFieldChange} value={this.state.author.imageUrl} name="imageUrl" />
                </div>
                <div className="AddAuthorForm_input">
                    {this.state.author.books.map((book) => <p key={book}>{book}</p>)}
                    <label htmlFor='imageUrl'>Books</label>
                    <input type="text" onChange={this.onFieldChange} value={this.state.author.bookTemp} name="bookTemp" />
                    <input onClick={this.onAddBook} type="button" value="+" name="book" />
                </div>
                <input type="submit" value="Add" name="Add" />
            </form>
        )
    }

}

export default AuthorForm;