import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div>
      <div className="display">
        <nav className="menu">
          <div className="heading-mobile">
            <div>Mr. GAPONOV</div>
          </div>
          <ul>
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
        <nav className="mobile-nav">
          <div className="heading-mobile">
            <div>Mr. GAPONOV</div>
          </div>
          <button onClick={() => setShowMobileNav(!showMobileNav)}>=</button>
          <div
            className={`mobile-nav-content ${showMobileNav ? "visible" : ""}`}
          >
            <a>Home</a>
            <a>About</a>
            <a>Galery</a>
            <a>Contact</a>
          </div>
        </nav>

        <div className="judul-mobile">
          <div className="heading-mobile">INTERIOR IN</div>
          <div className="subjudul1-mobile">YOUR HOUSE</div>
          <div className="heading-mobile">
            <button className="btn-more-mobile">More</button>
          </div>
        </div>
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
      </div>
      <div className="container-about">
        <div className="header-about">
          <div className="subheader-about">ABOUT COMPANY</div>
          <div className="subheader1-about">SOME HISTORY</div>
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
          <div className="subheader-about">SERVICES</div>
          <div className="subheader1-about">WE DO IT</div>
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
          <div className="subheader-about">NEWS</div>
          <div className="subheader1-about">LATEST EVENT</div>
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
          <Image src="/furniture9.jpeg" width="600" height="550" />
        </div>
      </div>

      <div className="sign-up">
        <div className="header-sign">
          <div className="subheader-about">SIGN ABOUT COMPANY</div>
          <div className="subheader1-about">
            YOU WILL RECEIVE NOTIFICATIONS NEW COMPANY
          </div>
          <div className="subheader-sign3">
            <input placeholder="E-mail" />
            <button className="subs-btn-sign">SUBSCRIBE</button>
          </div>
        </div>
        <div className="container-sign">
          <div className="subsign">
            <Image src="/furniture7.jpg" width="300" height="300" />

            <Image src="/furniture6.jpg" width="300" height="300" />

            <Image src="/furniture2.jpg" width="300" height="300" />

            <Image src="/furniture8.jpeg" width="300" height="300" />

            <Image src="/furniture10.jpeg" width="300" height="300" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="content1-footer">
          <div className="judul-footer">Mr. GAPONOV</div>
          <div>
            Far concluded not his something extremity. Want four we face an he
            gate. On he of played he ladies answer little though nature.
            Blessing oh do pleasure as so formerly. Took four spot soon led size
            you.
          </div>
        </div>
        <div className="content2-footer">
          <div className="judul-footer">USEFUL LINK</div>
          <p>
            <div>Vacancy</div>
            <div>Contact</div>
            <div>Gallery</div>
          </p>
        </div>
        <div className="content3-footer">
          <div className="judul-footer">CONTACT</div>
          <div>
            <div>Address : pr-t Tekstilshikov, d. 17, office 3</div>
            <div>Number : 8 (800) 987-65-43</div>
            <div>E-mai/ : Interior_life@yandex.ru</div>
          </div>
        </div>
      </div>
    </div>
  );
}
