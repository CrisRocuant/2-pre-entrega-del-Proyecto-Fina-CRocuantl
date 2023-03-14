export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        title: data.title,
        description: data.description,
        image: data.image,
        price: data.price,
        cateogory: data.category,
        stock: data.stock
    }

    return productAdapted
}