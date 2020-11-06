// import React, { Component } from 'react';
// import Title from './Title';
// import {
//     FcApproval,
//     FcGlobe,
//     FcOnlineSupport,
//     FcAutomotive
// } from 'react-icons/fc';

// export default class Slide extends Component {
//     services = [
//         {
//             icon: <FcApproval/>,
//             title: 'Unique',
//             info: 'Exclusive products to your hands'
//         },
//         {
//             icon: <FcGlobe/>,
//             title: 'Care',
//             info: 'Take care of your health'
//         },
//         {
//             icon: <FcOnlineSupport/>,
//             title: 'Support',
//             info: 'Always support your problems'
//         },
//         {
//             icon: <FcAutomotive/>,
//             title: 'Free Ship',
//             info: 'Free ship for all bill > 700'
//         }
//     ];

//     render() {
//         const serviceList = this.services.map((item, index) => {
//             return (
//                 <article key={index} className="services">
//                     <span>{item.icon} </span>
//                     <h6>{item.title}</h6>
//                     <p>{item.info}</p>
//                 </article>
//             )
//         });

//         return (
//             <section className="services" >
//                 <Title title="services" /> 
//                 <div className="services-center">
//                     { serviceList }
//                 </div>
//             </section>
//         );
//     }
// }
