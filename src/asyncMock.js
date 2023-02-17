const products = [
    { 
        id: '1', 
        name: 'Vinilo Coldplay/ Music Of The Spheres 1Lp', 
        price: 16000, 
        category: 'Vinilos', 
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_113651323_707264_1?wid=1500&hei=1500&qlt=70', 
        stock: 15, 
        description:''
    },
    { id: '2', name: 'Vinilo Green Day/ American Idiot 2Lp + MAGAZINE', price: 15499, category: 'Vinilos', img:'https://falabella.scene7.com/is/image/Falabella/gsc_113384651_624918_1?wid=1500&hei=1500&qlt=70', stock:15, description:''},
    
    { id: '3', name: 'Vinilo Iron Maiden/ Killers 1Lp + MAGAZINE', price: 15499, category: 'Vinilos', img:'https://falabella.scene7.com/is/image/Falabella/gsc_113393110_624922_1?wid=1500&hei=1500&qlt=70', stock:15, description:''},

    { id: '4', name: 'MADONNA - TRUE BLUE VINILO 1Lp + MAGAZINE', price: 15499, category: 'Vinilos', img:'https://falabella.scene7.com/is/image/Falabella/gsc_114347532_976355_1?wid=1400&hei=1400&qlt=60', stock:15, description:''},

    { id: '5', name: 'Tornamesa Audio-technica AT-LP60X Negro', price: 132000, category: 'Tornamesas', img:'https://falabella.scene7.com/is/image/Falabella/gsc_112871584_442689_1?wid=1500&hei=1500&qlt=70', stock: 5, description:''},
    
    { id: '6', name: 'Tornamesa con USB Audiotechnica AT-LP120XUSB-BK', price: 232000, category: 'Tornamesas', img:'https://falabella.scene7.com/is/image/Falabella/gsc_113545163_668203_1?wid=1500&hei=1500&qlt=70', stock: 5, description:''},

    { id: '7', name: 'Monitores de estudio Mackie CR4-X Par', price: 132000, category: 'Monitores Estudio', img:'https://falabella.scene7.com/is/image/Falabella/gsc_113541859_667745_1?wid=1500&hei=1500&qlt=70', stock: 5, description:''},

    { id: '8', name: 'Monitores de Estudio PreSonus Eris E35', price: 132000, category: 'Monitores Estudio', img:'https://falabella.scene7.com/is/image/Falabella/gsc_114598969_1039094_1?wid=1500&hei=1500&qlt=70', stock:20, description:''}

    
    
]


export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 50)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 50)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 50)
    })
}