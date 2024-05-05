import BookEdit from "./BookEdit";
import { useContext, useState } from "react";
import './BookShow.css'
import BookContext from '../context/book'
const BookShow = ({ book }) => {
  const { onEdit, onDelete } = useContext(BookContext)
  const image = `https://picsum.photos/seed/${book.id}picsum/200/300`
  const [isEdit, setIsEdit] = useState(false)
  const handleEdit = (id, term) => {
    onEdit(id, term)
    setIsEdit(false)
  }
  const handleCancel = () => {
    setIsEdit(false)
  }
  return (
    <div className="item">
      <div className="image">

        <img src={image} alt="" />
      </div>
      {!isEdit && (
        <>
          <h2>{book.title}</h2>
          <p>{book.des}</p>
        </>
      )}
      {isEdit && <BookEdit book={book} onEdit={handleEdit} onCancel={handleCancel}/>}
      {!isEdit && (

        <>
          <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </>
      )}
    </div>
  )
}

export default BookShow;