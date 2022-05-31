import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return(
    
    <div className="head">
        <div class="lls">
            <nav class="navbar bg-white">
                <div class="container-fluid">
                <div class="navbar-brand"> 
                <Link to = "/">
                 <img id = "iconpage"src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" alt=""></img>
                </Link>
                
                    <div class="text-page">
                        <strong>
                        ĐẠI HỌC BÁCH KHOA HÀ NỘI <br></br>
                        TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                        </strong>
                    </div>
                </div>
            
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search... "/>
                </form>
                </div>
            </nav>
        </div>
        
        <div class="nothing">
            <p></p>
        </div> 

        <div >
        <ul>
        <li>
            <a href="#">Giới thiệu &#9662;</a>
            <ul class="dropdown">
                <li><Link to="/">Thông tin chung</Link></li>
                <li><a href="#">Triết lý giáo dục</a></li>
                <li><a href="#">Cơ cấu tổ chức</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Khoa-Trung tâm &#9662;</a>
            <ul class="dropdown">
                <li><a href="#">Khoa</a></li>
                <li><a href="#">Khoa học máy tính</a></li>
                <li><a href="#">Kỹ thuật máy tính</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Đào tạo &#9662;</a>
            <ul class="dropdown">
                <li><a href="#">Giới thiệu chung</a></li>
                <li><a href="#">Hệ đại học</a></li>
                <li><a href="#">Hệ thạc sĩ</a></li>
                <li><a href="#">Hệ tiến sĩ</a></li>
                <li><a href="#">Đào tạo Chứng chỉ</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Nghiên cứu &#9662;</a>
            <ul class="dropdown">
                <li><a href="#">Giới thiệu chung</a></li>
                <li><a href="#">Các phòng thí nghiệm</a></li>
                <li><a href="#">Đề tài dự án</a></li>
                <li><a href="#">Công bố khoa học</a></li>
                <li><a href="#">Tìm chuyên gia</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Tuyển sinh &#9662;</a>
            <ul class="dropdown">
                <li><a href="#">Kiến tạo Tương lai với SoICT</a></li>
                <li><a href="#">Tuyển sinh 2022!</a></li>
                <li><a href="#">Điểm chuẩn tham khao</a></li>
                <li><a href="#">Tuyển sinh Đào tạo Ngắn hạn</a></li>
                <li><a href="#">Hỏi đáp về tuyển sinh</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Sinh viên &#9662;</a>
            <ul class="dropdown">
                <li><a href="#">Hỏi đáp về tuyển sinh</a></li>
                <li><a href="#">Cố vấn học tập</a></li>
                <li><a href="#">Hoạt động sinh viên nghiên cứu khoa học</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Hoạt động đối ngoại &#9662;</a>
            <ul class="dropdown">
                <li><a href="#">Giới thiệu chung</a></li>
                <li><a href="#">Hợp tác với Khối Hàn lâm</a></li>
                <li><a href="#">Hợp tác với Khối Doanh nghiệp</a></li>
                
            </ul>
        </li>
        <li>
            <a href="#">Cựu sinh viên &#9662;</a>
            <ul class="dropdown">
                <li><a href="#">Giới thiệu chung</a></li>
                <li><a href="#">Tấm gương Cựu Sinh viên</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Tin tức-Sự kiện &#9662;</a>
            <ul class="dropdown">
                <li>
                    <Link to="/Tintuc">Tin tức</Link>
                </li>
                
                
                <li><a href="#">Thông báo</a></li>
                <li><a href="#">Tin bài</a></li> 
                <li><a href="#">SoICT Talks</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Tuyển dụng &#9662;</a>
            <ul class="dropdown">
                <li><a href="#">Việc làm tại SoICT</a></li>
                <li><a href="#">Việc làm cho Sinh viên</a></li>
            </ul>
        </li>
        </ul>

        </div>
        
    </div>
    
)
}

export default Header