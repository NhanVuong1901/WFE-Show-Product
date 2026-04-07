import { useEffect, useState } from "react";

export default function ShowProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        ten: "Tai nghe",
        hinh: "/img/1.png",
        mota: "mô tả 0123456",
        gia: 1000,
      },
      {
        id: 2,
        ten: "Điện thoại",
        hinh: "/img/2.png",
        mota: "mô tả 0123456",
        gia: 2000,
      },
      {
        id: 3,
        ten: "Laptop",
        hinh: "/img/3.png",
        mota: "mô tả 0123456",
        gia: 3000,
      },
      {
        id: 4,
        ten: "Đồng hồ",
        hinh: "/img/4.png",
        mota: "mô tả 0123456",
        gia: 4000,
      },
    ];

    setProducts(data);
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
            <div className="card product-card shadow-sm">
              {/* IMAGE */}
              <div className="img-wrapper">
                <img src={item.hinh} alt={item.ten} />
              </div>

              {/* CONTENT */}
              <div className="card-body">
                <h6 className="fw-bold">{item.ten}</h6>
                <p className="text-muted small mb-2">{item.mota}</p>

                <div className="text-danger fw-bold mb-2">
                  {item.gia.toLocaleString("vi-VN")} VND
                </div>

                <button className="btn btn-primary btn-sm">Xem chi tiết</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
