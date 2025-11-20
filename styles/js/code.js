// 1. XỬ LÝ CHỨC NĂNG ẨN DANH
const anonymousCheckbox = document.getElementById("isAnonymous");
const personalInfoSection = document.getElementById("personalInfoSection");
const personalInputs = personalInfoSection.querySelectorAll("input"); // Lấy tất cả ô input trong vùng cá nhân

anonymousCheckbox.addEventListener("change", function () {
  if (this.checked) {
    // Nếu tick chọn: Thêm class làm mờ + disable các ô input
    personalInfoSection.classList.add("disabled-section");
    personalInputs.forEach((input) => (input.disabled = true));
  } else {
    // Nếu bỏ tick: Bỏ class làm mờ + enable lại input
    personalInfoSection.classList.remove("disabled-section");
    personalInputs.forEach((input) => (input.disabled = false));
  }
});

// 2. XỬ LÝ HIỂN THỊ TÊN FILE KHI UPLOAD
const fileInput = document.getElementById("fileInput");
const fileLabel = document.getElementById("fileLabel");

fileInput.addEventListener("change", function () {
  if (this.files && this.files.length > 0) {
    fileLabel.textContent = `Đã chọn ${this.files.length} tệp`;
    fileLabel.style.color = "#3b82f6"; // Đổi màu chữ thành xanh
    fileLabel.style.fontWeight = "bold";
  } else {
    fileLabel.textContent = "Nhấn để chọn tệp";
    fileLabel.style.color = "#64748b";
  }
});

// 3. XỬ LÝ GỬI FORM (SUBMIT)
const form = document.getElementById("crimeForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn trang web load lại (mặc định của form)

  // Lấy dữ liệu từ form
  const data = {
    loai: document.getElementById("incidentType").value,
    ngay: document.getElementById("date").value,
    diaChi: document.getElementById("address").value,
    anDanh: anonymousCheckbox.checked,
    // Nếu ẩn danh thì để trống thông tin cá nhân
    hoTen: anonymousCheckbox.checked
      ? "Ẩn danh"
      : document.getElementById("fullname").value,
    moTa: document.getElementById("description").value,
  };

  // Hiển thị thông báo (Giả lập gửi thành công)
  if (data.anDanh) {
    alert("Đã gửi báo cáo ẨN DANH thành công!\nCảm ơn sự dũng cảm của bạn.");
  } else {
    alert(
      `Cảm ơn công dân ${data.hoTen} đã gửi báo cáo!\nChúng tôi sẽ liên hệ sớm nhất.`
    );
  }

  console.log("Dữ liệu gửi lên server:", data);
});

// 4. CHỨC NĂNG RESET FORM (Nút Xóa)
function resetForm() {
  if (confirm("Bạn có chắc muốn xóa hết thông tin vừa nhập không?")) {
    form.reset();
    // Reset thủ công trạng thái ẩn danh về mặc định
    personalInfoSection.classList.remove("disabled-section");
    personalInputs.forEach((input) => (input.disabled = false));
    fileLabel.textContent = "Nhấn để chọn tệp";
    fileLabel.style.color = "#64748b";
  }
}
