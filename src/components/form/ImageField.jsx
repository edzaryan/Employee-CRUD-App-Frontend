import { useRef, useState } from "react";
import RemoveDialog from "./RemoveDialog";

export default function ImageField({ id, imageUrl }) {
  const [imageBase64, setImageBase64] = useState(imageUrl)
  const [isDialogOpened, setDialogOpened] = useState(false)
  const fileInput = useRef(null);

  const handleChange = e => {
    const file = e.currentTarget.files[0]

    file && toBase64(file)
      .then(base64Representation => setImageBase64(base64Representation))
      .catch(err => console.log(err))

    e.target.value = ''
  }

  const toBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  const handleDelete = () => {
    setDialogOpened(false)
    setImageBase64('')

    // axios
    //   .delete(`/employee/${id}/image`)
    //   .then(() => {
    //     setRemoveDialogOpened(false)
    //     setImageBase64('')
    //   })
    //   .catch(err => console.log(err.message()))
  }

  return (
    <>
      <div
        className="h215 bg-scd mg10-b rad3 imgStyle"
        style={{
          backgroundImage: imageBase64 && `url(${ imageBase64 })`,
          width: "150px",
          height: "207px"
      }}></div>
      <input hidden type="file" accept=".jpg,.jpeg,.png" onChange={ handleChange } ref={ fileInput } />
      <div className="flex">
        {
          imageBase64 ?
            <>
              <button className="fl1 btn-light mg5-r" onClick={ () => fileInput.current.click() }>
                <span className="material-symbols-outlined">upload</span>
              </button>
              <button className="fl1 btn-danger" onClick={ () => setDialogOpened(true) }>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </> :
            <button onClick={ () => fileInput.current.click() } className="fl1 btn-light">Upload</button>
        }
      </div>
      {
        isDialogOpened && <RemoveDialog
                              name="image"
                              type="Image"
                              setDialogOpened={ setDialogOpened }
                              handleDelete={ handleDelete } />
      }
    </>
  )
}