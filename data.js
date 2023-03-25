const  sarees = async(req,res)=>{
    res.status(200).json(Categories)
}

const Categories = [
    Sarees={ 
        title:"Sarees",
        Image:"",
        data:{
            Sarees:[
                {
                    title:"sarees",
                    Image:[],
                    sellingPrice:"2624",
                    disPrice:"975",
                    disPrsent:"62%",
                    soldBy:"SHOPPEEN",
                    COD:"Available",
                    Status:"In-Stock",
                    quantity:"1",
                    Size:[
                        'S','M','L','XL','XXL'
                    ],
                    ProductDetails:{
                        productCode:"SHSJMFPA16",
                        idealFor:"Women",
                        packOf:"1",
                        occasion:"Festive,Party wear",
                        fabric:"Satin"
                    }
                },

                {
                    title:"sarees",
                    Image:[],
                    sellingPrice:"2799",
                    disPrice:"1100",
                    disPrsent:"60%",
                    soldBy:"SHOPPEEN",
                    COD:"Available",
                    Status:"In-Stock",
                    quantity:"1",
                    Size:[
                        'S','M','L','XL','XXL'
                    ],
                    ProductDetails:{
                        productCode:"SHSLSKC77721A29",
                        idealFor:"Women",
                        packOf:"1",
                        occasion:"Festive,Party wear",
                        fabric:"Cotton"
                    }
                },

                {
                    title:"sarees",
                    Image:[],
                    sellingPrice:"2499",
                    disPrice:"1245",
                    disPrsent:"50%",
                    soldBy:"SHOPPEEN",
                    COD:"Available",
                    Status:"In-Stock",
                    quantity:"1",
                    Size:[
                        'S','M','L','XL','XXL'
                    ],
                    ProductDetails:{
                        productCode:"SHSLSANU78781A30",
                        idealFor:"Women",
                        packOf:"1",
                        occasion:"Function Wear",
                        fabric:"Cotton"
                    }
                },

                {
                    title:"sarees",
                    Image:[],
                    sellingPrice:"2628",
                    disPrice:"1456",
                    disPrsent:"44%",
                    soldBy:"SHOPPEEN",
                    COD:"Available",
                    Status:"In-Stock",
                    quantity:"1",
                    Size:[
                        'S','M','L','XL','XXL'
                    ],
                    ProductDetails:{
                        productCode:"SHSLSVIC77201A01",
                        idealFor:"Women",
                        packOf:"1",
                        occasion:"Festive, Party wear",
                        fabric:"Satin chiffon"
                    }
                },
                
                
                
            ]
        }
}
]

module.exports = {
    sarees
}