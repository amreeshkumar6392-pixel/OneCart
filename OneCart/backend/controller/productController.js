import uploadOnCloudinary from "../config/cloudinary.js"
import Product from "../model/productModel.js"


// export const addProduct = async (req,res) => {
//   try {

//         console.log("ADD PRODUCT API CALLED");
//      const {
//       name,
//       description,
//       price,
//       category,
//       subcategory,
//       sizes,
//       bestSeller,
//     } = req.body

//     const image1 = await uploadOnCloudinary(req.files.image1[0].path)
//     const image2 = await uploadOnCloudinary(req.files.image2[0].path)
//     const image3 = await uploadOnCloudinary(req.files.image3[0].path)
//     const image4 = await uploadOnCloudinary(req.files.image4[0].path)

//     const productData = {
//        name,
//       description,
//       price : Number(price),
//       category,
//       subcategory,
//       sizes:JSON.parse(sizes),
//        bestSeller: bestSeller === "true",
//       date : Date.now(),
//       image1,
//       image2,
//       image3,
//       image4

//     }

//     const product = await Product.create(productData)
     
//     return res.status(200).json(product)

    
//   } catch (error) {
//      console.log("addProduct Error")
//     return res.status(500).json({message:`addProduct error${error}`})
//   }
  
// }



export const addProduct = async (req, res) => {
  try {

    console.log("ADD PRODUCT API CALLED");

    const {
      name,
      description,
      price,
      category,
      subcategory,
      sizes,
      bestSeller,
    } = req.body;

    console.log("Received bestSeller:", bestSeller);
    console.log("Type:", typeof bestSeller);

    const image1 = await uploadOnCloudinary(req.files.image1[0].path);
    const image2 = await uploadOnCloudinary(req.files.image2[0].path);
    const image3 = await uploadOnCloudinary(req.files.image3[0].path);
    const image4 = await uploadOnCloudinary(req.files.image4[0].path);

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subcategory,
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller === "true",
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };

    console.log("Product data:", productData);

    const product = await Product.create(productData);

    return res.status(200).json(product);

  } catch (error) {
    console.log("addProduct Error:", error);
    return res.status(500).json({
      message: `addProduct error ${error}`
    });
  }
};






// List All Products
export const listProduct = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      success: true,
      products,
    });

  } catch (error) {
    console.log("listProduct Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json(product);
  } catch (error) {
    console.log("removeProduct Error:", error);
    res.status(500).json({message:`RemoveProduct error ${error}`});
  }
};