(this.webpackJsonpprouducts=this.webpackJsonpprouducts||[]).push([[1],{29:function(e,t){},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a(0),r=a.n(n),l=a(13),c=a.n(l),p=(a(35),a(24)),s=a(25),d=a(15),o=a(2),D=a(22),u=r.a.lazy((function(){return a.e(20).then(a.bind(null,120))})),m=r.a.lazy((function(){return a.e(21).then(a.bind(null,121))})),h=r.a.lazy((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,122))})),g=r.a.lazy((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,123))})),S=r.a.lazy((function(){return a.e(18).then(a.bind(null,124))})),B=r.a.lazy((function(){return a.e(17).then(a.bind(null,125))})),G=Object(i.jsx)("div",{className:"pt-3 text-center",children:Object(i.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})});var H=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");if(e){var t=Object(s.a)(e);l(t.role),"admin"===a&&console.log("\u0111\xfang")}}),[]),Object(i.jsx)(d.a,{children:Object(i.jsx)(D.a,{children:Object(i.jsx)(r.a.Suspense,{fallback:G,children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/loginNghia",exact:!0,component:m}),Object(i.jsx)(o.a,{path:"/login",exact:!0,component:h}),Object(i.jsx)(o.a,{path:"/register",exact:!0,component:g}),Object(i.jsx)(o.a,{path:"/admin",component:"admin"===a?S:B}),Object(i.jsx)(o.a,{path:"/",component:u})]})})})})},y=a(21),I=a(10),b=function(e){e&&e instanceof Function&&a.e(22).then(a.bind(null,126)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),i(e),n(e),r(e),l(e)}))},x=a(28),A=a(9),v=a(8),k=JSON.parse(localStorage.getItem("IDName"))||[],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.e:return e={id:t.id},localStorage.setItem("IDName",JSON.stringify(e)),Object(A.a)({},e);default:return e}},L={numberCart:0,items:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.a:if(0===e.numberCart){var a={id:t.payload.id,quantity:1,title:t.payload.title,url:t.payload.url,price:t.payload.price};e.items.push(a)}else{var i=!1;if(e.items.map((function(a,n){a.id===t.payload.id&&(e.items[n].quantity++,i=!0)})),!i){var n={id:t.payload.id,quantity:1,title:t.payload.title,url:t.payload.url,price:t.payload.price};e.items.push(n)}}return Object(A.a)(Object(A.a)({},e),{},{numberCart:e.numberCart+1});case v.f:return e.numberCart++,e.items[t.payload].quantity++,Object(A.a)({},e);case v.b:var r=e.items[t.payload].quantity;return r>1&&(e.numberCart--,e.items[t.payload].quantity--),Object(A.a)({},e);case v.c:var l=e.items[t.payload].quantity;return Object(A.a)(Object(A.a)({},e),{},{numberCart:e.numberCart-l,items:e.items.filter((function(a){return a.id!==e.items[t.payload].id}))});default:return e}},U=[{id:1,review:2e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u laptop 1",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"1 Laptop Lenovo IdeaPad S340 14IIL i5 1035G1/8GB/512GB/Win10 (81VV003SVN)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Laptop Lenovo IdeaPad S340 14IIL i5 1035G1/8GB/512GB/Win10 (81VV003SVN)",url:"https://cdn.tgdd.vn/Products/Images/44/216292/Feature/lenovo-tet-2021-fix-720x333.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Lenovo",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:2,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u laptop 2",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5-7200U",pin:100,ram:40,ssd:2560,title:"laptop-2-1",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"2 Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:3,review:2e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"3 Laptop Apple MacBook Air 2017 i5 1.8GHz/8GB/128GB (MQD32SA/A)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Apple",cpuDetail:"3 Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:4,review:2e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"4 Laptop Lenovo IdeaPad S340 14IIL i5 1035G1/8GB/512GB/Win10 (81VV003SVN)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Laptop Lenovo IdeaPad S340 14IIL i5 1035G1/8GB/512GB/Win10 (81VV003SVN)",url:"https://cdn.tgdd.vn/Products/Images/44/214708/lenovo-ideapad-s340-14iil-i5-1035g1-8gb-512gb-win1-8-214708-2-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Lenovo",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:5,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"5 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:6,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"6 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:7,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"7 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:8,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"8 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:9,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"9 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:10,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"10 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:11,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"11 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:12,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"12 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:13,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"13 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:14,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"14 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:15,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"15 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:16,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:"23.490.000",textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"16 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019}],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.d:default:return e}},P=a(29),j=a.n(P),w=Object(I.c)({IDName:C,GetProduct:M,GetCarts:N,GetUser:j.a}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,O=Object(I.e)(w,z(Object(I.a)(x.a)));c.a.render(Object(i.jsx)(y.a,{store:O,children:Object(i.jsx)(H,{})}),document.getElementById("root")),b()},8:function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"f",(function(){return c})),a.d(t,"b",(function(){return p}));var i="ID",n="GETPRODUCT",r="ADD_PRODUCT_TO_CART",l="DELETE_CART",c="INCREASE_QUANTITY",p="DECREASE_QUANTITY"}},[[41,2,3]]]);
//# sourceMappingURL=main.372dd504.chunk.js.map