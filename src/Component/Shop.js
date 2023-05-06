import React, { Fragment } from "react";
import Prop from "./Props";
class Shop extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            {data.length > 0
              ? data.map((item) => {
                  console.log("---item", item);
                  return (
                    <div className="col" key={item.id}>
                      <Prop
                        title={item.title}
                        pic={item.image}
                        text={item.category}
                        link="https://www.flipkart.com/lenovo-ideapad-slim-3-intel-core-i3-11th-gen-8-gb-256-gb-ssd-windows-11-home-15itl05-thin-light-laptop/p/itm409e7356d6162?pid=COMGN29YGMXF5DNH&lid=LSTCOMGN29YGMXF5DNHZKTYJV&marketplace=FLIPKART&q=lenovo+laptop&store=6bo%2Fb5g&spotlightTagId=FkPickId_6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&fm=search-autosuggest&iid=24395b45-79c7-4f50-b480-b7d2c8d062fd.COMGN29YGMXF5DNH.SEARCH&ppt=sp&ppn=sp&ssid=dnnc57wdxs0000001683113382815&qH=86f3cf6b571c1490"
                        price={item.price}
                        rating={item.rating.rate}
                      />
                    </div>
                  );
                })
              : "loading..."}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Shop;
