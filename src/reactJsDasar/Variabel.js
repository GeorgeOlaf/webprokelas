import React from 'react'

// const
// const harga = 3000;
// const harga = 500; --> tidak bisa jika sudah dideklarasikan

//var 
// var harga = 20000
// if(true){
//     var harga = 50000 --> saat menggunakan var nilai yang di input bisa ikut berubah
// }


// let --> saat menggunakan let nilai yang di input tidak akan berubah, kecuali menghapus "let"
let harga = 20000;
if(true){
    harga = 70000;
}


const variabel = () => {
    return (
        <div>
            <h3>Harga = {harga}</h3>
        </div>
    )
}

export default variabel