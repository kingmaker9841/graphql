import React from 'react';
import {graphql} from 'react-apollo';
import {getBookQuery} from '../queries/queries';


function BookDetails(props) {


    let displayBookDetails = ()=>{
        const {book} = props.data;
        if (book){
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p><strong>Genre </strong>: {book.genre} </p>
                    <p><strong>Author</strong>: {book.author.name} </p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map(item=>{
                            return <li key={item.id}> {item.name} </li>
                        })}
                    </ul>
                </div>
            )
        }else{
            return (
                <div>No Book Selected</div>
            )
        }
    }

    return (
        <div>
           {displayBookDetails()}
        </div>
    )
}

export default graphql(getBookQuery, {
    options: (props)=>{
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);
