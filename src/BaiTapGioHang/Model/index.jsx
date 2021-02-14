import React, { Component } from 'react'

export default class ModalShopping extends Component {
    render() {
        const {gioHang,xoaGioHang,tangGiamSoLuong}= this.props;//Lấy dl gioHang từ BaiTapGioHang
        return (
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>tên sản phẩm</th>
                      <th>hình ảnh</th>
                      <th>số lượng</th>
                      <th>đơn giá</th>
                      <th>thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                      {gioHang.map((sanPhamGioHang,index)=>{
                          return (
                          <tr key={index}>
                              <td>
                                  {sanPhamGioHang.maSP}
                              </td>
                              <td>
                                  {sanPhamGioHang.tenSP}
                              </td>
                              <td>
                                  <img src={sanPhamGioHang.hinhAnh} width={50} height={60}></img>
                              </td>
                              <td>
                                 <button className="btn btn-primary"onClick={()=>tangGiamSoLuong(sanPhamGioHang.maSP,true)}>+</button>
                                  {sanPhamGioHang.soLuong}
                                 <button className="btn btn-primary"onClick={()=>tangGiamSoLuong(sanPhamGioHang.maSP,false)}>-</button>
                              </td>
                              <td>
                                  {sanPhamGioHang.giaBan}
                              </td>
                              <td>
                                  {sanPhamGioHang.soLuong*sanPhamGioHang.giaBan}
                              </td>
                              <td>
                                <button onClick={()=>xoaGioHang(sanPhamGioHang.maSP)}  className="btn btn-danger"> Xóa </button>
                               </td>
                               
                          </tr>)
                      })}
                  </tbody>
                  <tfoot>
                      <tr>
                        <td colSpan="5"></td>
                        <td>Tổng tiền</td>
                        <td>{this.props.gioHang.reduce((tongTien,spGioHang,index)=>{return tongTien +=spGioHang.soLuong *spGioHang.giaBan},0)}</td>
                      </tr>
                  </tfoot>
                 </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
           
          
        )
    }
}

