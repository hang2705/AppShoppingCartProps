import React, { Component } from "react";
import ProductShopping from "../ProductShoping";

export default class ListProductShopping extends Component {
  render() {
    const { mangSanPham,themGioHang } = this.props;
   
    return (
      <div className="container danh-sach-san-pham">
        <div className="row">
          {mangSanPham.map((sanPham, index) => {
            return (
              <div className="col-sm-4" key={index}>
                <ProductShopping  themGioHang={themGioHang} sanPham={sanPham} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
