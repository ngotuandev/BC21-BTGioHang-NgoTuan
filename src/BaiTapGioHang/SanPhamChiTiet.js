import React, { Component } from "react";

export default class SanPhamChiTiet extends Component {
  render() {
    let {
      hinhAnh,
      tenSP,
      manHinh,
      cameraTruoc,
      heDieuHanh,
      cameraSau,
      ram,
      rom,
    } = this.props.dataSPCT;
    return (
      <div className="row">
        <div className="col-5">
          <h2>{tenSP}</h2>
          <img
            src={hinhAnh}
            alt=""
            style={{ width: "400px", height: "450px" }}
          />
        </div>
        <div className="col-7">
          <h2>Thông Số Kỹ Thuật</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
