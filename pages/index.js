import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // let btn = document.querySelector("#btn");
  // let sidebar = document.querySelector(".sidebar");
  // let searchBtn = document.querySelector(".bx-search");

  // btn.onclick = function () {
  //   sidebar.classList.toggle("active");
  // };
  // searchBtn.onclick = function () {
  //   sidebar.classList.toggle("active");
  // };
  // btn.onclick = function () {
  //   sidebar.classList.toggle("active");
  // };
  return (
    <div>
      {/* <link
        href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
        rel="stylesheet"
      ></link> */}
      <div className="display">
        {/* <div className="sidebar">
          <div className="logo_content">
            <div className="logo">
              <i class="bx bxs-building-house"></i>
              <div className="logo_name">Mr. GAPONOV</div>
            </div>
            <i class="bx bx-menu-alt-left" id="btn"></i>
          </div>
          <ul className="nav_list">
            <li>
              <i class="bx bx-search"></i>
              <input type="text" placeholder="Search..." />
              <span className="tooltip">Search</span>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-grid-alt"></i>
                <span className="links_name">Dashboard</span>
              </a>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-grid-alt"></i>
                <span className="links_name">Main</span>
              </a>
              <span className="tooltip">Main</span>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-images"></i>
                <span className="links_name">Gallery</span>
              </a>
              <span className="tooltip">Gallery</span>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-info-circle"></i>
                <span className="links_name">About</span>
              </a>
              <span className="tooltip">About</span>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-contact"></i>
                <span className="links_name">Contact</span>
              </a>
              <span className="tooltip">Contact</span>
            </li>
          </ul>
          <div className="profile_content"></div>
        </div> */}
        <nav className="menu">
          <div className="heading">
            <div>Mr. GAPONOV</div>
          </div>
          <ul className="hero">
            <li className="button-navbar">
              <a href="">MAIN</a>
            </li>
            <li className="button-navbar">
              <a href="">GALLERY</a>
            </li>
            <li className="button-navbar">
              <a href="">ABOUT</a>
            </li>
            <li className="button-navbar">
              <a href="">CONTACT</a>
            </li>
          </ul>
          <div className="item">8 (800) 987-65-43</div>
        </nav>

        <nav className="menu-mobile">
          <div className="heading-mobile">
            <div>Mr. GAPONOV</div>
          </div>
          <div className="heading-mobile">8 (800) 987-65-43</div>
        </nav>
        <div className="judul-mobile">
          <div className="heading-mobile">INTERIOR IN</div>
          <div className="subjudul1-mobile">YOUR HOUSE</div>
          <div className="heading-mobile">
            <button className="btn-more-mobile">More</button>
          </div>
        </div>

        {/* <div>
          <div>
            <div className="desc1">
              <div className="judul">
                <div>INTERIOR IN</div>
                <div className="dis-p">YOUR HOUSE</div>
              </div>
              <div className="dis-judul2">
                <p>CHOOSE FOR YOURSELF SOMETHING NEW</p>
              </div>
              <div>
                <button className="btn-more">More</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="container-about">
        <div className="header-about">
          <div>ABOUT COMPANY</div>
          <div>SOME HISTORY</div>
          <div></div>
        </div>
        <div className="content1-about">
          <div className="judul-content-about">— 1920</div>
          <div>
            Amet et delectus accommodare his consul copiosae legendos at vix ad
            putent delectus delicata usu. Vidit dissentiet eos cu eum an brute
            copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei
            iisque mentitum moderatius cu.
          </div>
        </div>
        <div className="content2-about">
          <div className="judul-content-about">— 1986</div>
          <div>
            Amet et delectus accommodare his consul copiosae legendos at vix ad
            putent delectus delicata usu. Vidit dissentiet eos cu eum an brute
            copiosae hendrerit. Eos erant dolorum an. Per facer affert ut.
          </div>
          <div className="display-more-about">
            <button className="more-about">More</button>
          </div>
        </div>
        <div className="img-about">
          <Image src="/furniture3.jpg" width="400" height="400" />
        </div>
      </div>
      <div className="container-services">
        <div className="header-services">
          <div>SERVICES</div>
          <div>WE DO IT</div>
        </div>
        <div className="img1-services">
          <Image src="/furniture5.jpeg" width="310" height="280" />
        </div>
        <div className="img2-services">
          <Image src="/furniture2.jpg" width="310" height="280" />
        </div>
        <div className="img3-services">
          <Image src="/furniture4.jpeg" width="310" height="280" />
        </div>
      </div>
      <div className="container-news">
        <div className="header-news">
          <div>NEWS</div>
          <div>LATEST EVENT</div>
        </div>
        <div className="content1-news">
          <div className="judul-news">IN A NUMBER OF RECENT JUDICAL</div>
          <div className="subjudul-news">12.09.2018</div>
          <div>
            Is we miles ready he might going. Own books built put civil fully
            blind fanny. Projection appearance of admiration no. As he totally
            cousins warrant besides ashamed do. Therefore by applauded acuteness
            sup-ported affection it. Except had sex limits county enough the
            figure former add. Do sang my he next mr soon.
          </div>
          <div className="more-news">
            <a href="">More</a>
          </div>
        </div>
        <div className="content2-news">
          <div className="judul-news">SPECIAL EDITION</div>
          <div className="subjudul-news">12.09.2019</div>
          <div>
            Admiration we surrounded possession he. Remarkably did increasing
            pccasional too its difficulty far especially. Known tiled but sorry
            joy balls. Bed sudden manner indeed fat now feebly. Therefore by
            applaude acuteness supported affection it.
          </div>
          <div className="more-news">
            <a href="">More</a>
          </div>
        </div>
        <div className="img-news">
          <Image src="/furniture9.jpeg" width="560" height="400" />
        </div>
      </div>
      <div className="container-sign">
        <div className="header-sign">
          <div>SIGN UP FOR COMPANY NEWS</div>
          <div>YOU WILL RECEIVE NOTIFICATIONS NEW COMPANY</div>
          <div className="subheader-sign">
            <input placeholder="E-mail"></input>
            <button className="subs-btn-sign">SUBSCRIBE</button>
          </div>
        </div>

        <div className="box1-sign">
          <Image
            style="img1-sign"
            src="/furniture7.jpg"
            width="120"
            height="100"
          />
        </div>
        <div className="box2-sign">
          <Image
            style="img2-sign"
            src="/furniture6.jpg"
            width="120"
            height="100"
          />
        </div>
        <div className="box3-sign">
          <Image
            style="img3-sign"
            src="/furniture2.jpg"
            width="120"
            height="100"
          />
        </div>
        <div className="box4-sign">
          <Image
            style="img4-sign"
            src="/furniture8.jpeg"
            width="120"
            height="100"
          />
        </div>
        <div className="box5-sign">
          <Image
            style="img5-sign"
            src="/furniture10.jpeg"
            width="120"
            height="100"
          />
        </div>
      </div> */}
    </div>
  );
}
