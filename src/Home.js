import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={800}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood mix Stand Mixer for Baking,
          Stylish Kitchen mixer with K-beater, Dough Hook and Whisk,
          5 Litre Glass Bowl"
            price={7999}
            rating={4}
            image="https://www.zippytom.com/pub/media/catalog/product/cache/94bf093be1747e2eb18d2b072ecf6ca6/0/2/02_1_3.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903859"
            title="Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black"
            price={12000}
            rating={3}
            image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWK4wVOiKOPmhX4wSIBH20sma7UuVXn48gA&usqp=CAU`}
          />
          <Product
            id="383478874"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={3500}
            rating={5}
            image="https://www.reliancedigital.in/medias/Amazon-B07P9B3W1G-Computer-Speakers-491600506-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzk0Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDYxL2hhMi85MjE2NjYzOTc4MDE0LmpwZ3xjN2UyOTIyOTA0ZjAyZGEyYmMxMjcwNzIxNGNhMDUwN2E3MzU3ODg5YmRhN2M0NGU3YjQ5ZjRmNDA1NjZiZWZj"
          />
          <Product
            title="New Apple iPad Pro (12.9-inch,Wi-Fi,128GB)-Silver(4th Generation)"
            price={71900}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="9988776633"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor-Super Ultra Wide Dual WQHD 5120 x 1440"
            price={183000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
