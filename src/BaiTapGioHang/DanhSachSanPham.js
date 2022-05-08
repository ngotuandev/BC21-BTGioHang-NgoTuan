import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  render() {
    return (
      <div className="row">
        <SanPham
          dataSP={this.props.dataSP}
          handleDetail={this.props.handleDetail}
          handleThemGioHang={this.props.handleThemGioHang}
        />
      </div>
    );
  }
}
