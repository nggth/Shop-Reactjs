import React, { Component } from 'react';
import {
    FaCopyright,
    FaFacebook,
    FaInstagram,
    FaFacebookMessenger
} from 'react-icons/fa';

export default class Footer extends Component {
    state = {
        footer:[
            { icon: <FaCopyright/> },
            { icon: <FaFacebook/> },
            { icon: <FaInstagram/> },
            { icon: <FaFacebookMessenger/> }
        ]
    }

    render() {
        return (
            <section className="footer" >
              <div class="form-group text-footer">
                <span style={{fontSize:'16px'}}>Đăng kí để nhận ưu đãi mới nhất</span>
                <span style={{fontSize:'14px'}}>
                <label>Email: <input type="text"/></label>
                </span>
                <span style={{fontSize:'10px'}}>CSKH 090292929 | MUA HÀNG 0921234567 | wecare@Cecilia.vn</span>
              </div>
               <div className="footer-center">
                   {this.state.footer.map((item, index) => {
                       return <article key={index} className="footer">
                           <span>{item.icon} </span>
                       </article>
                   })}
               </div>
            </section>
        );
    }
}
