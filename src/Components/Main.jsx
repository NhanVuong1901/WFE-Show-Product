//Đây là component mặc định (default export)

//Mỗi file chỉ có 1 default export, Mỗi file chỉ có 1 default export

export default function SPKhuyenMai() {
  return <h2>Sản phẩm khuyến mãi</h2>;
}

//Đây là named export, có thể có nhiều named export trong 1 file

//Khi import phải dùng dấu ngoặc nhọn {}

export function SPBanChay() {
  return <h2>Sản phẩm bán chạy</h2>;
}

//Đây là named export

export function SPHot() {
  return <h2>Sản phẩm Hot</h2>;
}
