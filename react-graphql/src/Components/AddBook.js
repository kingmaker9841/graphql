import React, {useState, useEffect} from 'react';
import {graphql} from 'react-apollo';
import compose from 'lodash.flowright';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries';

function AddBook(props) {
    
    let [bookName, setBookName] = useState('');
    let [genre, setGenre] = useState('');
    let [author, setAuthor] = useState('');

    const handleBookName = (e)=>{
        setBookName(e);
    }
    const handleGenre = (e)=> {
        setGenre(e);
    }
    const handleAuthor = (e)=>{
        setAuthor(e);
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(bookName, genre, author);
        props.addBookMutation({
            variables: {
                name: bookName,
                genre: genre,
                authorId: author
            },
            refetchQueries: [{
                query: getBooksQuery
            }]
        })
    }


    let display = ()=>{
        let data = props.getAuthorsQuery;
        if (data.loading){
            return (<option disabled>Loading Authors...</option>);
        }else{
            return data.authors.map(author=>{
                return (<option key={author.id} value={author.id}> {author.name} </option>)
            })
        }
        
    }
    return (
       <form id="add-book" onSubmit={(e)=> onSubmitHandler(e)}>
           <div className="field">
               <label htmlFor="bookname">Book Name:</label>
               <input type="text" id="bookname" value={bookName} onChange={(e)=> handleBookName(e.target.value)}/>
           </div>
           <div className="field">
               <label htmlFor="genre">Genre:</label>
               <input type="text" id="genre" value={genre} onChange={(e)=> handleGenre(e.target.value)} />
           </div>
           <div className="field">
               <label htmlFor="author">Author:</label>
               <select id="author" value={author} onChange={(e)=> handleAuthor(e.target.value)}>
                   <option>Select Author</option>
                   {display()}
               </select>
           </div>
           <button>+</button>
       </form>
    )
}

export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);
