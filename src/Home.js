import React from "react";
import Product from "./Product.js";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://imgix.bustle.com/uploads/image/2019/5/2/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg"
          // src = "data:image/jpeg;base64,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"
          alt="home_image"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Paracetamol 500mg"
            expiry="OCT-2022"
            image="https://www.practostatic.com/practopedia-v2-images/res-750/48303979a4449106d14c48b318a2cf0cc2ed3b291.jpg"
          />
          <Product
            id="2"
            title="Domstal 10mg"
            expiry="JAN-2024"
            image="https://www.internationaldrugmart.com/drug-images/big/otc_domstal_10mg_torrent.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Carzec 6.25mg"
            expiry="FEB-2021"
            image="https://www.practostatic.com/practopedia-v2-images/res-750/5f2ae5d8e5f6f5c9b23b1cf1d7528845340813e81.JPG"
          />
          <Product
            id="4"
            title="Calpol 650mg"
            expiry="SEP-2023"
            image="https://www.practostatic.com/practopedia-v2-images/res-750/114e86a58504efba4c86aed11e52994d71d872ef1.JPG"
          />
          <Product
            id="5"
            title="Cetrizine 10mg"
            expiry="JAN-2023"
            image="https://www.practostatic.com/practopedia-v2-images/res-750/7fe2b6b0281322da5896825d93b2c86d1381234b1.JPG"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Zipcet 5mg"
            expiry="JAN-2021"
            image="https://www.netmeds.com/images/product-v1/600x600/337910/zipcet_5mg_tablet_10_s_0.jpg"
          />
          <Product
            id="7"
            title="Domstal 100mg"
            expiry="MAY-2024"
            image="https://www.internationaldrugmart.com/drug-images/big/otc_domstal_10mg_torrent.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
