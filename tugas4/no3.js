function array(Nama){
    const hasil = Nama.map(el => {
        const arrayBaru = ""
        return el += arrayBaru
    })
    const potong = hasil[3].split(',')
    hasil.pop()
    console.log(hasil ,potong.join(' '));

}
array(['hallo','nama','saya',['ilham','rizwan', ['kelas',['11',['rpl', '1']]]]])