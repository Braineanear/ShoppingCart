const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  const loungewear_titles = [
    "Boho Tie Dye Onesies",
    "Christmas Vibes Pyjama set",
    "When in Doubt Beige Set",
    "When In Doubt Pink Set",
    "The On-Trend Dress In Pink",
    "The On-Trend Dress In Blue",
    "The Aurora Set",
    "Am I Cool Set In Shorts"
  ];

  const loungewear_imgs = [
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/03/SNG10003MLT-Boho-Tie-Dye-Onesies-B-gall.jpg?fit=933%2C1400&ssl=1",
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/11/PJ10006MLT-Christmas-Vibes-Pyjama-set-A-gall.jpg?fit=933%2C1400&ssl=1",
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/ST10014BG-A-Monochromatic-Beige-Set-B-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/ST10013PK-A-Monochromatic-Pink-Set-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/KT10015PK-The-On-Trend-Dress-In-Pink-D-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/KT10016BL-The-On-Trend-Dress-In-Blue-F-gall.jpg?fit=640%2C961&ssl=1",
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/ST10012MT-The-Aurora-Set-A-gall.jpg?fit=933%2C1400&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/ST10011BK-Am-I-Cool-Set-In-Shorts-D-gall.jpg?fit=933%2C1400&ssl=1"  
  ];

  const sportswear_titles = [
    "The Sportive Jumper – Izzy",
    "A Black Leggings With A Twist – IZZY",
    "The Yoga Pants – IZZY",
    "Quick Pace Loose T-shirt in Black – IZZY",
    "Find Your Comfort in Biege – IZZY",
    "All In One Leggings – IZZY"
  ];

  const sportswear_imgs = [
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/18-L81-11-The-Sportive-Hoodie-A-gall.jpg?fit=933%2C1400&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2019/12/S9-L38-11-A-Black-Leggings-With-A-Twist-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2019/12/S9-L32-11-The-Yoga-Pants-D-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2019/05/Quick-Pace-Loose-T-shirt-in-Black-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2019/05/Find-Your-Comfort-in-BiegeB-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2019/12/S9-L34-36-All-In-One-Leggings-A-gall.jpg?fit=933%2C1400&ssl=1"
  ];

  const tops_titles = [
    "A Snowey White Top",
    "Unexpected Backless Top In Black",
    "Unexpected Backless Top In Red",
    "Casual Daytime Top In Pink",
    "Ribbs And Fringes Pullover In Black",
    "Ribbs And Fringes Pullover In Brown",
    "Casual Daytime Top In Black",
    "Ribbs And Fringes Pullover In Pink",
    "The Rufflet Top"
  ];

  const tops_imgs = [
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/10/TOP10029WT-A-Snowey-White-Top-B-gall.jpg?fit=933%2C1400&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/10/TOP10027BK-Unexpected-Backless-Top-In-Black-D-gall.jpg?fit=640%2C961&ssl=1",
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/10/TOP10028RD-Unexpected-Backless-Top-In-Red-D-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2020/10/TOP10026PK-Casual-Daytime-Top-In-Pink-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/10/KT10021BK-Ribbs-And-Fringes-Pullover-In-Black-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/10/KT10019BWN-Ribbs-And-Fringes-Pullover-In-Brown-E-gall.jpg?fit=933%2C1400&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/10/TOP10025BK-Casual-Daytime-Top-In-Black-C-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/10/KT10020PK-Ribbs-And-Fringes-Pullover-In-Pink-B-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2020/03/TOP10024BK-The-Rufflet-Top-B-gall.jpg?fit=640%2C961&ssl=1"
  ];

  const shirts_titles = [
    "A Street Style Corduroy Over Sized Shirt",
    "Be Happy Corduroy In Brown Shirt"
  ];

  const shirts_imgs = [
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2020/03/TOP10019YL-A-Street-Style-Corduroy-Over-Sized-Shirt-A-gall.jpg?fit=933%2C1400&ssl=1",
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/TOP10017BN-Be-Happy-Corduroy-In-Brown-Shirt-A-gall.jpg?fit=640%2C961&ssl=1"
  ];

  const skirts_titles = [
    "The Hilda Skirt In Yellow – Noctiluca",
    "The Summerish Skirt In Olive Green",
    "Give Your Pants A Day Off Skirt – Believe",
    "Print In Snake Skirt",
    "Vintage Chique Skirt",
    "Lit The Night Up Skirt",
    "Just a classic black skirt"
  ];

  const skirts_imgs = [
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2019/07/NOC10003-The-Hilda-Skirt-In-Yellow-D-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2019/12/SUM10075-The-Summerish-Skirt-In-Olive-Green-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2019/05/SUM10040-Give-Your-Pants-A-Day-Off-Skirt-A-gall.jpg?fit=933%2C1400&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2019/05/SK10003-Print-In-Snake-Skirt-A-gallery.jpg?fit=640%2C960&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2019/11/SK10001-Vintage-Chique-Skirt-B-gallery.jpg?fit=640%2C960&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2019/11/SK10003-Lit-The-Night-Up-Skirt-A-gallery.jpg?fit=640%2C960&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2019/05/Just-a-classic-black-skirt-WN10010-B-gallery.jpg?fit=640%2C960&ssl=1"
  ];

  const hoodies_titles = [
    "A Voguish Jacket In Pink",
    "A Voguish Jacket In Blue",
    "Not A Glitch Hoodie",
    "Sweet Dreams Tie Dye Set",
    "Cheer Up Sweat Shirt",
    "The Unusual Hoodie In Beige",
    "For The Cold Times Hangout Hoodie",
    "The Morning Run Hoodie",
    "Lighten Your Fall Pullover In Mint Green",
  ];

  const hoodies_imgs = [
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/10/JKT10012PK-A-Voguish-Jacket-In-Pink-A-thumb.jpg?fit=600%2C900&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2020/10/JKT10013BL-A-Voguish-Jacket-In-Blue-E-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2020/03/HD10011WT-Not-A-Glitch-Hoodie-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/11/ST10016MLT-Sweet-Dreams-Tie-Dye-Set-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2020/11/SWT10001PG-Cheer-Up-Sweat-Shirt-D-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/HD10008WT-The-Unusual-White-Hoodie-E-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/HD10009YL-For-The-Cold-Times-Hangout-Hoodie-F-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/HD10010MLT-The-Morning-Run-Hoodie-E-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/KT10011BL-Lighten-Your-Fall-Pullover-In-Mint-Green-D-gall.jpg?fit=640%2C961&ssl=1",
  ];

  const street_titles = [
    "Lighten Your Fall Pullover",
    "The On-Trend Dress",
    "A Basic Knitwear Pullover With Fringes",
    "The Illusion Set In Pink Tie Dye Print",
    "Its Black Its White Set",
    "The Illusion Set In Black Tie Dye Print",
    "The Illusion Set In Blue Tie Dye Print",
    "Pretty Basic Top In Pink",
    "Pretty Basic Top In Black"
  ];

  const street_imgs = [
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/KT10005PK-Lighten-Your-Fall-Pullover-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/KT10004BG-The-On-Trend-Dress-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/KT10003RD-A-Basic-Knitwear-Pullover-With-Fringes-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/ST10007PK-The-Illusion-Set-In-Pink-Tie-Dye-Print-B-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/ST10004BW-Oppisite-Attracts-Set-A-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/ST10005BK-The-Illusion-Set-In-Black-Tie-Dye-Print-C-gall.jpg?fit=640%2C961&ssl=1",
    "https://i1.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/ST10001BL-The-Illusion-Set-In-Blue-Tie-Dye-Print-B-gall.jpg?fit=640%2C961&ssl=1",
    "https://i0.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/TOP10009PK-Pretty-Basic-Top-In-Pink-B-gall.jpg?fit=640%2C961&ssl=1",
    "https://i2.wp.com/www.dresscodeme.com/wp-content/uploads/2020/07/TOP10006BK-Pretty-Basic-Top-In-Black-D-gall.jpg?fit=640%2C961&ssl=1"
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 100, max: 500 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(shirts_titles, shirts_imgs, "Shirts & Blouses");
  await seedProducts(tops_titles, tops_imgs, "Tops");
  await seedProducts(sportswear_titles, sportswear_imgs, "Sports Wear");
  await seedProducts(loungewear_titles, loungewear_imgs, "Lounge Wear");
  await seedProducts(skirts_titles, skirts_imgs, "Skirts");
  await seedProducts(hoodies_titles, hoodies_imgs, "Sweatshirts & Hoodies");
  await seedProducts(street_titles, street_imgs, "Street Wear");

  await closeDB();
}

seedDB();
