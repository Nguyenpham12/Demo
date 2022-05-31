import React from "react";
import { Link } from "react-router-dom";
    
function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="slider">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img id="mid" src="https://soict.hust.edu.vn/wp-content/uploads/Slide-show-website-2.png" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/t-1.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img id="mid" src="https://soict.hust.edu.vn/wp-content/uploads/SoICT-Talk-5.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img id="mid" src="https://soict.hust.edu.vn/wp-content/uploads/Ảnh-chung.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Four slide label</h5>
                                <p>Some representative placeholder content for the Four slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div style={{ height: "7px" }} class="underline"></div>
            <h2 style={{ textalign: "center", marginTop: "30px", marginBottom: "30px" }}>TIN MỚI NHẤT</h2>
            <div id="newfeed">
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/BKAI-NAVER-Challenge-2022-02.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">VÒNG CHUNG KẾT BKAI-NAVER CHALLENGE 2022</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">BKAI-NAVER Challenge 2022 là hoạt động thuộc dự án hợp tác nghiên cứu AI giữa Trung tâm BKAI, Trường CNTT&amp;TT và Tập...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/05-Hoi-truong.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">INNOVATION DAY VÀ CUỘC THI SÁNG TẠO Ý TƯỞNG SINH VIÊN CREATIVE IDEA CHALLENGE 2022</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">Ngày 14/05/2022, Innovation Day 2022 đã diễn ra thành công với rất nhiều hoạt động, trải nghiệm thú vị, bao gồm: Tọa...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/HT-SV-Ng-Van-Quyen-cover-1.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&amp;TT, Đại học Bách khoa Hà Nội. Hoàn cảnh gia...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/DAT01879.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">️TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG &#8211; NHIỆM KỲ 2022-2024</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">️Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự đồng ý của Đoàn thanh niên Trường Đại...</p>
                    </div>
                </div>
            </div>
            <div class="card text-center">
                <div id="gachsukien" class="card-header">
                    <Link id="sukien" to="/about">Xem thêm tin tức</Link>
                </div>
                <div id="bg" class="card-body">
                    <h2 style={{ color: "white", textalign: "center", marginTop: "30px", marginBottom: "30px" }} class="card-title">Sự kiện mới nhất</h2>
                    <div id="newfeed">
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/SoICT-Talk-5.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 id="left">SoICT’s Talk – Episode 5: Vào Bách khoa để làm việc KHÓ!!!</h5>
                                <div id="lefttext" class="eventtime">
                                    <span>Thời gian:</span>
                                    <span> 9:00 AM - 25/10/2020</span>
                                </div>
                                <div id="lefttext" class="location-event">
                                    <span>Địa điểm:</span>
                                    <span> Hội trường C2</span>
                                </div>
                            </div>
                        </div>
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Cover-event-final-UPDATE.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 id="left">SoICT – IBM Hackathon 2020</h5>
                                <div id="lefttext" class="eventtime">
                                    <span>Thời gian:</span>
                                    <span> 5:00 PM - 26/06/2020</span>
                                </div>
                                <div id="lefttext" class="location-event">
                                    <span>Địa điểm:</span>
                                    <span> Tòa nhà B1</span>
                                </div>
                            </div>
                        </div>
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Cover-event-final.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 id="left">Ngày Hội Định Hướng Và Đổi Mới Sáng Tạo 2020</h5>
                                <div id="lefttext" class="eventtime">
                                    <span>Thời gian:</span>
                                    <span> 7:30 AM - 13/06/2020</span>
                                </div>
                                <div id="lefttext" class="location-event">
                                    <span>Địa điểm:</span>
                                    <span> Trường Đại học Bách khoa Hà Nội</span>
                                </div>
                            </div>
                        </div>
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Cover-event-fb-final-of-final.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 id="left">Tư vấn Tuyển sinh Đại học 2020 – Các ngành thuộc lĩnh vực CNTT</h5>
                                <div id="lefttext" class="eventtime">
                                    <span>Thời gian:</span>
                                    <span> 9:00 AM - 30/04/2020</span>
                                </div>
                                <div id="lefttext" class="location-event">
                                    <span>Địa điểm:</span>
                                    <span> Livestream trên fanpage Viện</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="gachsukien" class="card-footer text-muted">
                    <p id="sukien">Xem thêm sự kiện</p>
                </div>
            </div>
            <h2 style={{ textalign: "center", marginTop: "30px", marginBottom: "30px" }}>ĐÀO TẠO - TUYỂN SINH</h2>
            <div>
                <div class="container-fluid" style={{ textalign: "center", width: "915px" }}>
                    <p>Năm 2020, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS – Vương quốc Anh) đã đánh giá và xếp chất lượng đào tạo và nghiên cứu của ĐHBK Hà Nội trong các lĩnh vực mà Trường đang đảm nhận thuộc nhóm hạng từ 451 đến 500 trên toàn Thế giới, tiếp tục giữ vị trí số 1 tại Việt Nam.</p>
                </div>
            </div>
            <div>
                <div class="container-fluid">
                    <div className=" container-md flexoday" style={{width: "60%"}}>
                        <div class="card mb-3">
                            <div  class="row g-0">
                                <div  class="col-md-4">
                                <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/152127_1-400x267.jpg" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div id="left" class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">CHƯƠNG TRÌNH ĐÀO TẠO</h5>
                                    <p class="card-text">Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng cao thuộc 3 hệ đại học, ThS và TS; trong đó, có chương trình được thị trường lao động quốc tế đón nhận với hơn 60% sinh viên tốt nghiệp làm việc ở nước ngoài. Các chương trình đào tạo thuộc vào 3 nhóm ngành chính: Khoa học Máy tính, Kỹ thuật Máy tính, và Khoa học Dữ liệu và Trí tuệ Nhân tạo…</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img style={{width:"300"}} src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/IMG_8268_2-001-400x268.jpg" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div id="left" class="card-body">
                                    <h5 class="card-title">KIẾN TẠO TƯƠNG LAI VỚI SoICT</h5>
                                    <p class="card-text">Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới nước nhà, và ngày càng chứng minh được chất lượng trên trường Quốc tế. Trong làn sóng Chuyển đổi số, lựa chọn phát triển tương lai với SoICT sẽ đem lại cho các bạn cơ hội trở thành các chuyên gia công nghệ, có khả năng làm chủ và dẫn dắt sự phát triển KHCN nước nhà… </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card text-center">
                    <div id="bg2" class="card-body">
                        <h2 style={{ color: "white", textalign: "center", marginTop: "30px", marginBottom: "30px" }} class="card-title">HỢP TÁC ĐỐI NGOẠI</h2>
                        <div class="container-fluid" style={{color:"white",textalign: "center", width: "915px" }}>
                            <p class="card-text">Trường CNTT&TT luôn coi trọng các hoạt động hợp tác quốc tế và hợp tác doanh nghiệp để nâng cao chất lượng các hoạt giảng dạy, nghiên cứu và chuyển giao công nghệ.</p>
                        </div>
                        <div class="container-fluid">
                    <div className=" container-md flexoday1" style={{width: "80%"}}>
                        <div class="card mb-3">
                            <div  class="row g-0">
                                <div  class="col-md-4">
                                <img style={{width:"300px"}} src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/Screen-Shot-2019-05-02-at-1.51.23-PM-400x318.png" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div id="left" class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">CÁC TRƯỜNG ĐỐI TÁC</h5>
                                    <p class="card-text">Trường CNTT&TT có quan hệ hợp tác với nhiều trường đại học và viện nghiên cứu uy tín trên Thế giới. Thông qua hợp tác, sinh viên của Trường có cơ hội học tập, nghiên cứu tại các trường đối tác thông qua các học bổng trao đổi sinh viên, cũng như các dự án hợp tác nghiên cứu. Trường hợp tác với các đại học lớn ở Châu Âu, Nhật Bản… để cung cấp cho sinh viên các chương trình đào tạo song bằng (double degree), một hình thức “du học” kinh tế và hiệu quả… (xem tiếp)</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img style={{width:"300px"}} src="https://soict.hust.edu.vn/wp-content/uploads/DJI_0030-fixed2-mini-20190727T100030844048.jpg" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div id="left" class="card-body">
                                    <h5 class="card-title">DOANH NGHIỆP ĐỐI TÁC</h5>
                                    <p class="card-text">Đào tạo và nghiên cứu rất cần sự hợp tác thực chất với cộng đồng doanh nghiệp. Trường hiện đang duy trì hợp tác với mạng lưới gồm hơn 130 doanh nghiệp CNTT trong và ngoài nước, trong đó có thể kể tới HEDSPI Supporting Partner Network (HEDSPI-SPN), mạng lưới hỗ trợ sinh viên tăng cường ngoại ngữ, phát triển kỹ năng mềm, cũng như làm quen với văn hóa DN để gia tăng sức cạnh tranh trong thị trường lao động quốc tế… (xem tiếp)</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <h2 style={{ textalign: "center", marginTop: "30px", marginBottom: "30px" }}>CỰU SINH VIÊN</h2>
            <div id="newfeed">
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/205feec3d18738d96196.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">Hoàng Việt Anh – Chỉ có một tình yêu duy nhất</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">Gia nhập FPT năm 1993, từ khi còn là sinh viên năm 3 khoa CNTT ĐH Bách...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/Lu-Thanh-Long.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">Lữ Thành Long – Thủ lĩnh công nghệ</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">Nhắc đến ngôi trường đã gắn bó suốt 5 năm học đại học, doanh nhân Lữ Thành...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu--400x267.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">Nguyễn Hà Đông – Cha đẻ Flappy Bird “náo loạn” Thế giới</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">Tạp chí công nghệ Cnet của Mỹ công bố danh sách 25 ứng dụng có ảnh hưởng...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/hungtran-400x250.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">️THùng Trần – Tấm gương khởi nghiệp người Việt tại Silicon Valley</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">️“Gãi đúng chỗ ngứa” của người dùng Trần Việt Hùng là cựu nghiên cứu sinh Quỹ Giáo...</p>
                    </div>
                </div>
            </div>
            <div class="card text-center">
                    <div id="bg3" class="card-body">
                        <h2 style={{textalign: "center", marginTop: "30px", marginBottom: "30px" }} class="card-title">VỀ CHÚNG TÔI</h2>
                        <div class="container-fluid">
                        <div id="flex" className=" container-md flexoday1" style={{width: "80%"}}>
                            <p>QS ranking 2022<br></br>
                            <h1>401 – 450<br></br></h1>trên Thế giới trong nhóm ngành <br></br> Khoa học Máy tính và Hệ thống Thông tin</p>
                            <p>Sinh viên thuộc TOP<br></br>
                            <h1>1%0<br></br></h1>điểm cao nhất Khối A <br></br>Toàn quốc mùa Tuyển sinh 2019 </p>
                            <p>Sinh viên<br></br>
                            <h1>4.000+</h1></p>
                            <p>Chương trình đào tạo<br></br>
                            <h1>17+<br></br></h1>thuộc các hệ đào tạo <br></br> cử nhân, kỹ sư, thạc sỹ khoa học, tiến sỹ </p>
                            <p>Đối tác<br></br>
                            <h1>200+<br></br></h1>các trường đại học, viện nghiên cứu<br></br> , tập đoàn, công ty trong nước và quốc tế </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card text-center">
                    <div id="bg4" class="card-body">
                    Copyright © Trường Công nghệ Thông tin và Truyền thông
                    </div>  
            </div>
        </>
    )
}

export default Home;
