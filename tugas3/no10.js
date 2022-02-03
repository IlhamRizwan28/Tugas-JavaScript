const nama = [
    {Nama: `anpar`, Kelas: `XI RPL 1`},
    {Nama: `Pradipta`, Kelas: `XI RPL 1`},
    {Nama: `Ilham`, Kelas: `XI RPL 2`},
    {Nama: `Dayon`, Kelas: `XI RPL 2`},
    {Nama: `Arpi`, Kelas: `XI RPL 1`}
]

const filter = nama.filter(ganti => {
    const wrappinf = {}
    return wrappinf, ganti.Kelas == `XI RPL 1`;
})
console.log(filter);