import React from "react";
import { Link } from "react-router-dom";

function Tintuc (){
    return(
        <>
    <div id="news_main" className="container">
    <div class="sidenav" >
        <span><span><Link to="/">Trang chủ</Link> » <span><Link to="/Tintuc">Tin tức</Link></span></span></span>  <br></br> <br></br>       
        <strong style={{fontSize:'24px'}}>Tin tức – Sự kiện</strong> <br></br> <br></br>
            <Link to="/tin-tuc" style={{textDecoration: 'none', marginRight:'130px'}}>Tin tức</Link> <hr ></hr>
            <Link to="#"style={{textDecoration: 'none', marginRight:'112px'}}>- Thông báo</Link><hr></hr>
            <Link to="#"style={{textDecoration: 'none', marginRight:'140px'}}>- Tin bài</Link><hr></hr>
            <Link to="#"style={{textDecoration: 'none', marginRight:'130px'}}>Sự kiện</Link><hr></hr>
            <Link to="#"style={{textDecoration: 'none', marginLeft:'-57px'}}>- Sự kiện sắp diễn ra</Link><hr></hr>
            <Link to="#"style={{textDecoration: 'none', marginLeft:'-63px'}}>- Sự kiện đã diễn ra</Link><hr></hr>
            <Link to="#"style={{textDecoration: 'none', marginRight:'100px'}}>SoICT Talks</Link>
        </div>

        <div>
            <img id="img_top_news" src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/a.jpg" ></img>
            <div id="news_contents">
                <div>
                    <img id="img_1" src="https://soict.hust.edu.vn/wp-content/uploads/HoiThaoVinBigdata.jpg"></img> <br></br>
                    <Link to="#"style={{textDecoration: 'none'}}>Hội thảo: Giới thiệu Chương trình Đào tạo Kỹ<br></br> sư AI Vingroup Cơ hội Đào tạo, việc làm và<br></br> trải nghiệm môi trường làm việc chuyên<br></br> nghiệp<br></br></Link>

                </div>
                <div>
                    <img id="img_1" src="https://soict.hust.edu.vn/wp-content/uploads/SVNCKH2021.png"></img> <br></br>
                    <Link to="#"style={{textDecoration: 'none'}}>HỘI NGHỊ SINH VIÊN NGHIÊN CỨU KHOA<br></br> HỌC 2021-2022</Link>
                </div>
                
            </div>
        </div>
        
        

    </div>
    
   
        

    </>
    )
}


export default Tintuc



