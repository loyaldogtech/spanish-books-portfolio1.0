function BookCard(props) {
    return (
            <div className="bg-light border p-4 m-2">
                <h3>{props.book.title}</h3>
                <p>{props.book.author}</p>
                <p>{props.book.description}</p>
            </div>
        ) 
     }


export default BookCard;