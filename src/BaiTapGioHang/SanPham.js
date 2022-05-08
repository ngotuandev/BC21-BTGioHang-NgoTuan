import React, { Component } from "react";

export default class SanPham extends Component {
  renderSP = () => {
    return this.props.dataSP.map((sp, index) => {
      return (
        <div className="card col-4" key={index}>
          <img
            className="card-img-top"
            src={sp.hinhAnh}
            alt=""
            style={{ width: "350px", height: "300px" }}
          />
          <div className="card-body">
            <h4 className="card-title">{sp.tenSP}</h4>
            <p className="card-text">{sp.giaBan.toLocaleString()}</p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.handleDetail(sp);
                }}
              >
                Xem chi tiết
              </button>
              <button
                className="btn btn-primary ml-3"
                onClick={() => {
                  this.props.handleThemGioHang(sp);
                }}
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <>{this.renderSP()}</>;
  }
}
