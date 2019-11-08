export class SystemConstants {
    public static CURRENT_USER = "CURRENT_USER";
    public static BASE_API = "http://localhost:5000";

    public static SYSTEM_ERROR_MSG = "Có lỗi kết nối đến máy chủ";
    public static CONFIRM_DELETE_MSG = "Bạn có chắc chắn muốn xóa bản ghi?";
    public static LOGIN_AGAIN_MSG = "Phiên bản làm việc đã kết thúc. Vui lòng đăng nhập lại";
    public static CREATE_OK_MSG = "Thêm mới thành công";
    public static UPDATE_OK_MSG = "Cập nhật thành công";
    public static DELETE_OK_MSG = "Xóa thành công";

    // api
    public static LOGIN_API = "/api/account/login";

    // url
    public static LOGIN_URL = "/login";
    public static HOME_URL = "/main/home/index";
    public static USER_URL = "/main/user/index";
}