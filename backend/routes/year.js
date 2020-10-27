const express = require('express');
const router = express.Router();

//routes

// router.get('/this_month', (req, res) =>{
//     res.json({
//         status: 200,
//         message: 'hello world'
//     })
// })

router.get('/', (req, res) =>{
    let data = [
        {name: 'Jan', id:0, lawyer: ['Esq. Adeniji', 'Esq. Umar'], active: 2, closed: 4, new:7},
        {name: 'Feb', id:1, lawyer: ['Esq. Alamu', 'Esq. Ebuka'], active: 2, closed: 0, new: 3},
        {name: 'Mar', id:2, lawyer: 'Esq. Nelson', active: 3, closed: 2, new: 4},
        {name: 'Apr', id:3, lawyer: ['Esq. Adeniji', 'Esq. Ebunoluwa', 'Esq. Rachel'], active: 5, closed: 1, new: 2},
        {name: 'May', id:4, lawyer: 'Esq. Umar', active: 3, closed: 2, new: 1},
        {name: 'Jun', id:5, lawyer: ['Esq. Alamu', 'Esq. Falana', "Esq. Seun", 'Esq. Segun'], active: 8, closed: 1, new: 3},
        {name: 'Jul', id:6, lawyer: 'Esq. Umar', active: 2, closed: 1, new: 2},
        {name: 'Aug', id:7, lawyer: 'Esq. Falana', active: 1, closed: 3, new: 4},
        {name: 'Sep', id:8, lawyer: ['Esq. Shola', 'Esq. Adeniji', 'Esq. Alamu'], active: 6, closed: 2, new: 3},
        {name: 'Oct', id:9, lawyer: 'Esq. Beatrice', active: 2, closed: 2, new: 2},
        {name: 'Nov', id:10, lawyer: 'Esq. Temilade', active: 3, closed: 0, new: 5},
        {name: 'Dec', id:11, lawyer: ['Esq. Pam', 'Esq. Seun', 'Esq. Nelson', 'Esq. Falana'], active: 7, closed: 2, new: 3}
    ]
    res.status(200).json(data)
})


module.exports = router;