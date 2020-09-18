import {gql} from 'apollo-boost';

const getBooksQuery = gql`
{
    books {
        name
        id
        genre
    }
}
`;

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook (name: $name, genre: $genre, authorId: $authorId ){
            name
            id
        }
    }
`;

const getBookQuery = gql`
    query ($id: ID) {
        book (id : $id){
            name
            genre
            id
            author {
                name
                age
                books {
                    name
                    genre
                    id
                }
            }
        }
    }
`;

export {getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery};