import React, { Component } from "react";
import phoneData from "../BaiTapGioHang/data/phoneData.json";
import ListProductShopping from "./ListProductShopping";
import ProductSelected from "./ProductSelected";
import ModalShopping from "./Model";

export default class BaiTapGioHang extends Component {
    constructor(props){
        super(props);

      this.state={
          gioHang:[]
      }
    }
   

//    Lấy dl tại component BaiTapGioHang
themGioHang =(sanPhamChon)=>{
// console.log(sanPhamChon);
// B1: Từ sản phẩm tạo ra sp giỏ hàng
let spGioHang = {
    maSP: sanPhamChon.maSP,
    tenSP: sanPhamChon.tenSP,
    giaBan:sanPhamChon.giaBan,
    hinhAnh:sanPhamChon.hinhAnh,
    soLuong:1,
}
// Kiểm tra sanPhamChon có trong giỏ hàng chưa
const gioHangCapNhat =[...this.state.gioHang];
let index= gioHangCapNhat.findIndex(sp=>sp.maSP === spGioHang.maSP);
if(index!==-1){
    // Sản phẩm được click đã có trong this.state.gioHang
    gioHangCapNhat[index].soLuong += 1;

}else{
    // Sản phẩm được click chưa 
    // SetState ở componet lạicó trong this.state.gioHang
    gioHangCapNhat.push(spGioHang);
}
// SetState ở componet lại
this.setState({
    gioHang:gioHangCapNhat,
})
}
//Đặt sự kiện xóa giỏ hàng tại button GioHang
xoaGioHang= (maSP) =>{
  // Tìm trong giỏ hàng có sản phẩm chứa maSP thì click xóa
  /**Cách 1 */
  // const gioHangCapNhat =[...this.state.gioHang];
  // let index = gioHangCapNhat.findIndex(sp =>sp.maSP === maSP);
  // if(index !==-1){
  //   gioHangCapNhat.splice(index,1);
  // }

/**Cách 2:Tìm trong giỏ hàng có sản phẩm chứa maSP thì click xóa */
const gioHangCapNhat =this.state.gioHang.filter(sp=>sp.maSP !==maSP);

  // Cập nhật lại state giỏ hàng và render giao diện
  this.setState({
    gioHang:gioHangCapNhat
  })
}

//Tăng giảm số lượng
tangGiamSoLuong =(maSP,tangGiam)=>{
 const gioHangCapNhat =[...this.state.gioHang];
  let index = gioHangCapNhat.findIndex(sp =>sp.maSP === maSP);
  // Xử lí tăng giảm
  if(tangGiam){
    gioHangCapNhat[index].soLuong +=1;

  }else{
    if(gioHangCapNhat[index].soLuong>1){
      gioHangCapNhat[index].soLuong -=1;
    }
  }
  this.setState({
    gioHang:gioHangCapNhat
  })
}
  render() {
    //   Tính số lượng được bỏ vsof giỏ hàng
      const tongSoLuong = this.state.gioHang.reduce((tsl,sanPhamGioHang,index)=>{
          return tsl += sanPhamGioHang.soLuong;

      },0)
// 
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          
          >
            Giỏ hàng ({tongSoLuong})
          </button>
        </div>
        <ListProductShopping  themGioHang={this.themGioHang} mangSanPham={phoneData}/>
         <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: 1000 }}
          >
                 <ModalShopping tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang}/>
          </div>
        </div>
        <ProductSelected/>
     </section>
    );
  }
}
