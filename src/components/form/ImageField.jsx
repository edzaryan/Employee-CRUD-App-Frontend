import {useRef, useState} from "react";

export default function ImageField() {
  const [imageBase64, setImageBase64] = useState('')
  const fileInput = useRef(null);

  let imgStyle = {
    width: '150px',
    height: '207px',
    backgroundColor: "#a8a8a8",
    backgroundImage: imageBase64 && `url(${ imageBase64 })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

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

  return (
    <>
      <div className="h215 bg-scd mg10-b rad3" style={ imgStyle }></div>
      <input hidden type="file" accept=".jpg,.jpeg,.png" onChange={ handleChange } ref={ fileInput } />
      <div className="flex">
        {
          imageBase64 ?
            <>
              <button className="fl1 btn-light mg5-r" onClick={ () => fileInput.current.click() }>
                <span className="material-symbols-outlined">upload</span>
              </button>
              <button className="fl1 btn-danger" onClick={ () => { setImageBase64('') }}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </> :
            <button onClick={ () => fileInput.current.click() } className="fl1 btn-light">Upload</button>
        }
      </div>
    </>
  )
}