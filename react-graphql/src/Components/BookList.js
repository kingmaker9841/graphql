import React, {useState} from 'react';
import './BookList.css';
import {graphql} from 'react-apollo';
import {getBookQuery, getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

function BookList(props) {

    let [bookId, setBookId] = useState(null);

let handleBookClick = (e, id)=>{
    console.log(id);
    setBookId(id);
}

let displayBooks = ()=>{
    let data = props.data;
    if (data.loading){
        return <div><strong><h1>Book Loading...</h1></strong></div>
    }else{
       return data.books.map(book=>{
            return (<li key={book.id} onClick={(e)=> handleBookClick(e, book.id)} > {book.name} </li>)
        })
    }
}
    console.log(props);
    return (
        <div>
            <ul id="book-list">
                {displayBooks()}
            </ul>
            <BookDetails bookId={bookId} />
        </div>
    )
}

export default graphql(getBooksQuery)(BookList);