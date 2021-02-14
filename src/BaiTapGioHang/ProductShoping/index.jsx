import React, { Component } from 'react'

export default class ProductShopping extends Component {
    render() {
        const {sanPham,themGioHang}= this.props;
        return (
            <div className="card">
            <img className="card-img-top" src={sanPham.hinhAnh} alt="true" />
            <div className="card-body">
              <h4 className="card-title">{sanPham.tenSP}</h4>
              <button className="btn btn-success">Chi tiết</button>
              <button onClick={()=>{themGioHang(sanPham)}} className="btn btn-danger" >Thêm giỏ hàng</button>
            </div>
          </div>
        )
    }
}
