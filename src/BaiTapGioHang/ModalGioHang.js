import React, { Component } from "react";

const tangSL = 1;
const giamSL = -1;

export default class ModalGioHang extends Component {
  renderSPMD = () => {
    return this.props.dataSPMD.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.maSP}</td>
          <td>
            <img
              src={sp.hinhAnh}
              style={{ width: "100px", height: "75px" }}
              alt=""
            />
          </td>
          <td>{sp.tenSP}</td>
          <td>
            <button
              className="btn btn-success mx-1"
              onClick={() => {
                this.props.handleTangGiam(sp.maSP, tangSL);
              }}
            >
              +
            </button>
            {sp.soLuong}
            <button
              className="btn btn-danger mx-1"
              onClick={() => {
                this.props.handleTangGiam(sp.maSP, giamSL);
              }}
            >
              -
            </button>
          </td>
          <td>{sp.giaBan.toLocaleString()}</td>
          <td>{(sp.giaBan * sp.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleDelete(sp.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  tongSLGH = () => {
    return this.props.dataSPMD.reduce((tongSl, sp, index) => {
      return (tongSl += sp.soLuong);
    }, 0);
  };

  tongTienGH = () => {
    return this.props.dataSPMD.reduce((tongTien, sp, index) => {
      return (tongTien += sp.soLuong * sp.giaBan);
    }, 0);
  };

  render() {
    return (
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Giỏ hàng ({this.tongSLGH()})
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{ maxWidth: "60vw" }}
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
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
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderSPMD()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4}></td>
                      <td>Tổng tiền</td>
                      <td>{this.tongTienGH().toLocaleString()}</td>
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
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
