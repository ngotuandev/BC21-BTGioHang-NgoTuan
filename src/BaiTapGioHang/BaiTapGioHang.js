import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalGioHang from "./ModalGioHang";
import SanPhamChiTiet from "./SanPhamChiTiet";
import { dataSP } from "./dataSanPham";

export default class BaiTapGioHang extends Component {
  state = {
    dataSP: dataSP,
    dataSPCT: dataSP[0], //* data sản phẩm chi tiết
    dataSPMD: [], //* data sản phẩm modal
  };

  //* sự kiện click button xem chi tiết
  handleDetail = (sp) => {
    this.setState({
      dataSPCT: sp,
    });
  };

  //* sự kiện button thêm giỏ hàng
  handleThemGioHang = (sp) => {
    let dataUpdate = [...this.state.dataSPMD];
    let index = this.state.dataSPMD.findIndex((spGH) => spGH.maSP === sp.maSP);
    let dataNew = { ...sp, soLuong: 1 };
    if (index !== -1) {
      dataUpdate[index].soLuong += 1;
    } else {
      dataUpdate.push(dataNew);
    }

    this.setState({
      dataSPMD: dataUpdate,
    });
  };

  //* sự kiện button xóa trong modal
  handleDelete = (maSP) => {
    let dataUpdate = [...this.state.dataSPMD];
    let index = this.state.dataSPMD.findIndex((spGH) => spGH.maSP === maSP);
    if (index !== -1) {
      dataUpdate.splice(index, 1);
    }
    this.setState({
      dataSPMD: dataUpdate,
    });
  };

  //* sự kiện tăng giảm số lượng trong modal
  handleTangGiam = (maSP, giaTri) => {
    let dataUpdate = [...this.state.dataSPMD];
    let index = this.state.dataSPMD.findIndex((spGH) => spGH.maSP === maSP);
    if (index !== -1) {
      dataUpdate[index].soLuong = dataUpdate[index].soLuong + giaTri;
      //* Nếu số lượng ===0 thì xóa luôn phần tử
      dataUpdate[index].soLuong === 0 && dataUpdate.splice(index, 1);
    }
    this.setState({
      dataSPMD: dataUpdate,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-primary mb-5">Bài tập Giỏ Hàng</h1>
        <ModalGioHang
          dataSPMD={this.state.dataSPMD}
          handleDelete={this.handleDelete}
          handleTangGiam={this.handleTangGiam}
        />{" "}
        <br />
        <DanhSachSanPham
          dataSP={this.state.dataSP}
          handleDetail={this.handleDetail}
          handleThemGioHang={this.handleThemGioHang}
        />{" "}
        <br />
        <SanPhamChiTiet dataSPCT={this.state.dataSPCT} />
      </div>
    );
  }
}
