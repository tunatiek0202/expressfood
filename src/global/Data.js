export const filterData = [{name:"Fast food",image: require('../assets/Fastfood.png'),id:'0'},
                           {name:"Burgers",image: require('../assets/Burgers.png'),id:'1'},
                           {name:"Salads",image: require('../assets/Salads.png'),id:'2'},
                           {name:"Hotdog",image: require('../assets/Hotdog.png'),id:'3'},
                           {name:"Chinese",image: require('../assets/Chinese.png'),id:'4'},
                           {name:"Mexican",image: require('../assets/Mexican.png'),id:'5'},
                           {name:"Seafood",image: require('../assets/Seafood.png'),id:'6'},
                            ];
export const filterData2 = [{name:"Fast food",image:'https://quantrinhahang.edu.vn/wp-content/uploads/2019/06/fast-food-la-gi.jpg' , id:"0"},
                            {name:"Burgers",image: 'https://images.squarespace-cdn.com/content/v1/5ec1febb58a4890157c8fbeb/19ebb9ed-4862-46e1-9f7c-4e5876730227/Beetroot-Burger.jpg',id:"1"},
                            {name:"Salads",image:"https://www.eatingwell.com/thmb/rmLlvSjdnJCCy_7iqqj3x7XS72c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chopped-power-salad-with-chicken-0ad93f1931524a679c0f8854d74e6e57.jpg",id:"2"},
                            {name:"Hotdog",image: "https://file.hstatic.net/200000680207/file/goi_y_cach_lam_banh_hotdog_ccda2308332c4bad92e1d982c28957ce_grande.jpg",id:"3"},
                            {name:"Chinese",image:"https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/cach_lam_banh_pizza_thom_ngon_chuan_nha_hang_u_B_Cu_H_1680490692_2481182f2e.png",id:"4"},
                            {name:"Mexican",image:"https://media.cnn.com/api/v1/images/stellar/prod/230320152734-02-mexican-foods-birria.jpg?c=original&q=h_618,c_fill",id:"5"},  
                            {name:"Sea food",image:"https://statics.vinpearl.com/nha-trang-seafood-11_1696181917.jpg",id:"6"},
                            {name:"Chinese Food",image:"https://www.hotelmousai.com/blog/wp-content/uploads/2021/11/Chinise-food-768x527.jpg",id:"7"},
                            {name:"Mexican pie",image:"https://wishesndishes.com/images/2018/05/Easy-Taco-Pie-Recipe-3.jpg",id:"8"},  
                            {name:"Ocean dish",image:"https://www.womenstuff.co.za/wp-content/uploads/2021/12/OB-Sea-Bream_header.jpeg",id:"9"},
                            ];


export const restaurantsData = [
    {restaurantName:"KFC", farway:"21.2",
    businessAddress:"22 Nguyen Trai, TDM", image:'https://dulichmy365.files.wordpress.com/2016/07/kfc9.jpg?w=816',
    averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.33333,Ing: 28.0444444} , discount:10,deliverytime:15,
    collectTime:5, foodType:"Burgers,wraps,Milkshakes...",
    productData:[{name:"Hand cut chips", price:29000,image:"https://d12n9cpx6835mo.cloudfront.net/extras_chips_large_web_mobile.jpg?v=118.5"},
                {name:"Big Mac",price:50.50, image:"https://media.designrush.com/articles/346685/conversions/KFC-Fixed-It-details.jpg"},
                {name:"Chicken Burger",price:70,image:"https://www.poultryworld.net/app/uploads/2021/04/001_910_IMG_zerochickenkfc-848x565.jpg"},
                ],
                id:0,
    },
    {restaurantName:"Mc Donalds", farway:"21.2",
    businessAddress:"22 Nguyen Trai, TDM", image:'https://phuongnamdigital.com/thumbh/360/uploads/tin-tuc/mcdonald.jpg',
    averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.33333,Ing: 28.0444444} , discount:10,deliverytime:15,
    collectTime:5, foodType:"Burgers,wraps,Milkshakes...",
    productData:[{name:"Hand cut chips", price:29000,image:"https://www.tasteofhome.com/wp-content/uploads/2022/10/GettyImages-1237064706.jpg"},
                {name:"Big Mac",price:50000, image:"https://kyluc.vn/userfiles/upload/images/modules/news/2020/3/14/0_V-big-mac-2.jpg"},
                {name:"Chicken Burger",price:70000,image:"https://qsrmedia.com.au/sites/default/files/styles/article_node_main_image/public/2021-05/mcdonaldsaustraliaclassicchickenrangeweb.jpg?itok=o0cLHFwZ"},
                ],
                id:1,
    },
    {restaurantName:"Steer", farway:"21.2",
    businessAddress:"22 Nguyen Trai, TDM", image:'https://live.staticflickr.com/6123/5934822521_29b3456749_b.jpg',
    averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.33333,Ing: 28.0444444} , discount:10,deliverytime:15,
    collectTime:5, foodType:"Burgers,wraps,Milkshakes...",
    productData:[{name:"Hand cut chips", price:29000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8WLk7jYCkhuHoX5cVeENwYdPDqHNdAEB2ofm1ViHqa6-XfV5alCo7vgZck4-DPzrDlg&usqp=CAU"},
                {name:"Big Mac",price:50000, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs1dVLumlZDfArfNvtd40LIv3w3lMcRbvmsIFDA1j7qbyOnyyFUIaEQIajWXkR2cCQf_Y&usqp=CAU"},
                {name:"Chicken Burger",price:70000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82Qy-xOdV8DGPCXwNp2jYrW2Sr-Ps9yOxdaRiWajFx_izNgxQE6h3_3kREP3HQSyYOJ4&usqp=CAU"},
                ],
                id:2,
    },
    {restaurantName:"Lotteria", farway:"21.2",
    businessAddress:"22 Nguyen Trai, TDM", image:'https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/11/lotteria-750x468.jpg',
    averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.33333,Ing: 28.0444444} , discount:10,deliverytime:15,
    collectTime:5, foodType:"Burgers,wraps,Milkshakes...",
    productData:[{name:"Hand cut chips", price:29000,image:"https://image.entabe.jp/upload/20221226/images/lotteria-mishima-yukari-collaboration2.jpg"},
                {name:"Big Mac",price:50000, image:"https://img.giftpop.vn/brand/LOTTERIA/2PEMP2019237501_BASIC_origin.jpg"},
                {name:"Chicken Burger",price:70000,image:"https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/trex-_ce5160042661625a2563b8ef8a419b391574821746.jpg"},
                ],
                id:3,
    },
    
]

export const menuData = [
    
  {title:"BEEF",special:false,key:0, },
  {title:"CHICKEN", special:false,key:1},
  {title:"VEGGIE BURGER",special:false ,key:2},
  {title:"FRIES& CORN",special:false ,key:3},
  {title:"SALADS",special:false,key:4},
  {title:"HAPPY MEALS",special:false,key:5},
  {title:"SAHRE BOX",special:false,key:6},
  {title:"MILKSHAKES",special:false,key:7},
  {title:"COLD DRINKS",special:false,key:8},
  {title:"DESSERTS",special:false,key:9},
  {title:"HOT DRINKS",special:false,key:10},

  ] ;

export const specialData =[
  {title:"LIMITED OFFER",key:0},
  {title:"GO CHILLI",key:1},
  {title:"GO CHEESE",key:2},
  {title:"MCCHICKEN DELUXE PROMO",key:3},
];   
export const menu = [
  { key: 1, title: 'BEEF' },
  { key: 2, title: 'CHICKEN' },
  { key: 3, title: 'VEGGIE BURGER' },
  { key: 4, title: 'SHARE BOX' },
  { key: 5, title: 'Happy Meals' },
  { key: 6, title: 'Fries' },
  { key: 7, title: 'Sides' },
  { key: 8, title: 'Milkshakes' },
] 

export const menuDetailedData =[
  { 
    meal:"Big Mac",
    price:70000,
    image:"https://kyluc.vn/userfiles/upload/images/modules/news/2020/3/14/0_V-big-mac-2.jpg",
    details:"McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

                    [{name:"Jalapeno Dip",price:25.000,checked:false,id:10},{name:"Sweet & Sour Dip",price:5.000,checked:false ,id:11},{name:'BBQ Dip',price:25.000 ,checked:false,id:12},
                    ],

                    [{name:"Small Coke",price:25.000 ,checked:false,id:13 },{name:"Small Fanta Orange",price:20.000 ,checked:false,id:14},{name:'Small Sprite',price:25.000,checked:false ,id:15},
                    {name:'Small Coke Zero',price:25.000 ,checked:false,id:16},{name:'Small Syoney Zero',price:5.000 ,checked:false,id:17},{name:'Small Apple Juice',price:25.000 ,checked:false,id:18},
                    {name:'Small Strawberry Shake',price:25.000 ,checked:false,id:19},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:20},
                    ],

                    [{name:"Small Coke",price:25.000,checked:false ,id:21},{name:"Small Fanta Orange",price:5.000,checked:false ,id:22},{name:'Small Sprite',price:25.000,checked:false ,id:23},
                    {name:'Small Coke Zero',price:25.000 ,checked:false,id:24},{name:'Small Syoney Zero',price:9.000 ,checked:false,id:25},{name:'Small Apple Juice',price:15.000,checked:false ,id:26},
                    {name:'Small Strawberry Shake',price:25.000,checked:false ,id:27},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:28},{name:'Small Vanilla Shake',price:25.000 ,checked:false,id:29},
                      ],
                        
                    [{name:"debonairs sauce",price:25.000 ,checked:false,id:30},{name:"BBQ Sauce",price:5.000,checked:false ,id:31},{name:'Tikka Sauce',price:50.000,checked:false ,id:32},
                    ],

                    [
                    {name:"Small Coke",price:25.000 ,checked:false,id:33},{name:"Small Fanta Orange",price:10.000 ,checked:false,id:34},{name:'Small Sprite',price:25.000 ,checked:false,id:35},
                    {name:'Small Coke Zero',price:25.000 ,checked:false,id:36},{name:'Small Syoney Zero',price:5.000 ,checked:false,id:37},{name:'Small Apple Juice',price:30.000 ,checked:false,id:38},
                    {name:'Small Strawberry Shake',price:25.000,checked:false ,id:39},{name:'Small Chocolate Shake',price:50.000 ,checked:false,id:40},{name:'Small Vanilla Shake',price:25.000,checked:false ,id:41},
                    ],
                    ],
    minimum_quatity:[2,1,1,null,null],
    counter:[0,0,0,0,0],
    required: [true,true,true,false,false],              
    id:0
  },

  { 
    meal:"Hand cut chips", 
    price:29000,
    image:"https://d12n9cpx6835mo.cloudfront.net/extras_chips_large_web_mobile.jpg?v=118.5",
    details:"Two 100% fresh beef burger patties that are hot,deliciously",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

      [{name:"Jalapeno Dip",price:25.000,checked:false,id:0},{name:"Sweet & Sour Dip",price:25.000,checked:false ,id:1},{name:'BBQ Dip',price:25.000 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:25.000 ,checked:false,id:0 },{name:"Small Fanta Orange",price:5.000 ,checked:false,id:1},{name:'Small Sprite',price:25.000,checked:false ,id:2},
      {name:'Small Coke Zero',price:5.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:7.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:50.000 ,checked:false,id:6},{name:'Small Chocolate Shake',price:80.000 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:5.000,checked:false ,id:0},{name:"Small Fanta Orange",price:25.000,checked:false ,id:1},{name:'Small Sprite',price:25.000,checked:false ,id:2},
      {name:'Small Coke Zero',price:25.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:5.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:50.000,checked:false ,id:6},{name:'Small Chocolate Shake',price:70.000 ,checked:false,id:7},{name:'Small Vanilla Shake',price:125.000 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:25.000 ,checked:false,id:0},{name:"BBQ Sauce",price:25.000,checked:false ,id:1},{name:'Tikka Sauce',price:25.000,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:25.000 ,checked:false,id:0},{name:"Small Fanta Orange",price:25.000 ,checked:false,id:1},{name:'Small Sprite',price:25.000 ,checked:false,id:2},
      {name:'Small Coke Zero',price:8.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:5.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:90.000,checked:false ,id:6},{name:'Small Chocolate Shake',price:50.000 ,checked:false,id:7},{name:'Small Vanilla Shake',price:125.000,checked:false ,id:8},
      ],
      ],
      minimum_quatity:[2,1,2,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false], 
      id:1
  },

  {
    meal:"Chicken Burger",
    price:45000,
    image:"https://qsrmedia.com.au/sites/default/files/styles/article_node_main_image/public/2021-05/mcdonaldsaustraliaclassicchickenrangeweb.jpg?itok=o0cLHFwZ",
    details:"",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

      [{name:"Jalapeno Dip",price:25.000,checked:false,id:0},{name:"Sweet & Sour Dip",price:25.000,checked:false ,id:1},{name:'BBQ Dip',price:25.000 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:25.000 ,checked:false,id:0 },{name:"Small Fanta Orange",price:25.000 ,checked:false,id:1},{name:'Small Sprite',price:25.000,checked:false ,id:2},
      {name:'Small Coke Zero',price:25.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:25.000 ,checked:false,id:6},{name:'Small Chocolate Shake',price:125.000 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:5.000,checked:false ,id:0},{name:"Small Fanta Orange",price:25.000,checked:false ,id:1},{name:'Small Sprite',price:25.000,checked:false ,id:2},
      {name:'Small Coke Zero',price:5.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:50.000,checked:false ,id:6},{name:'Small Chocolate Shake',price:50.000 ,checked:false,id:7},{name:'Small Vanilla Shake',price:25.000 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:25.000,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:25.000 ,checked:false,id:0},{name:"Small Fanta Orange",price:25.000 ,checked:false,id:1},{name:'Small Sprite',price:25.000 ,checked:false,id:2},
      {name:'Small Coke Zero',price:25.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:25.000,checked:false ,id:6},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:7},{name:'Small Vanilla Shake',price:25.000,checked:false ,id:8},
      ],
      ],

      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],   
    id:2
  },

  {
    meal:"Big Mac",
    price:50000,
    image:"https://media.designrush.com/articles/346685/conversions/KFC-Fixed-It-details.jpg",
    details:"McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

      [{name:"Jalapeno Dip",price:25.000,checked:false,id:0},{name:"Sweet & Sour Dip",price:25.000,checked:false ,id:1},{name:'BBQ Dip',price:25.000 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:25.000 ,checked:false,id:0 },{name:"Small Fanta Orange",price:25.000 ,checked:false,id:1},{name:'Small Sprite',price:25.000,checked:false ,id:2},
      {name:'Small Coke Zero',price:25.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:25.000 ,checked:false,id:6},{name:'Small Chocolate Shake',price:125.000 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:25.000,checked:false ,id:0},{name:"Small Fanta Orange",price:25.000,checked:false ,id:1},{name:'Small Sprite',price:25.000,checked:false ,id:2},
      {name:'Small Coke Zero',price:25.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:25.000,checked:false ,id:6},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:7},{name:'Small Vanilla Shake',price:25.000 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:25.000,checked:false,id:0},{name:"BBQ Sauce",price:25.000,checked:false ,id:1},{name:'Tikka Sauce',price:25.000,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:25.000 ,checked:false,id:0},{name:"Small Fanta Orange",price:25.000 ,checked:false,id:1},{name:'Small Sprite',price:25.000 ,checked:false,id:2},
      {name:'Small Coke Zero',price:25.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:25.000,checked:false ,id:6},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:7},{name:'Small Vanilla Shake',price:125.000,checked:false ,id:8},
      ],
      ],
    
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],    
    id:3
  },

  
  { 
    
    meal:"Hand cut chips", 
    price:29000,
    image:"https://www.tasteofhome.com/wp-content/uploads/2022/10/GettyImages-1237064706.jpg",
    details:"Two 100% fresh beef burger patties that are hot,deliciously",
    
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    
    preferenceData: [

      [{name:"Jalapeno Dip",price:25.000,checked:false,id:0},{name:"Sweet & Sour Dip",price:25.000,checked:false ,id:1},{name:'BBQ Dip',price:25.000 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:25.000 ,checked:false,id:0 },{name:"Small Fanta Orange",price:25.000 ,checked:false,id:1},{name:'Small Sprite',price:25.000,checked:false ,id:2},
      {name:'Small Coke Zero',price:25.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:25.000 ,checked:false,id:6},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:25.000,checked:false ,id:0},{name:"Small Fanta Orange",price:25.000,checked:false ,id:1},{name:'Small Sprite',price:25.000,checked:false ,id:2},
      {name:'Small Coke Zero',price:25.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:25.000,checked:false ,id:6},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:7},{name:'Small Vanilla Shake',price:25.000 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:25.000 ,checked:false,id:0},{name:"BBQ Sauce",price:25.000,checked:false ,id:1},{name:'Tikka Sauce',price:25.000,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:25.000 ,checked:false,id:0},{name:"Small Fanta Orange",price:25.000 ,checked:false,id:1},{name:'Small Sprite',price:25.000 ,checked:false,id:2},
      {name:'Small Coke Zero',price:25.000 ,checked:false,id:3},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:4},{name:'Small Apple Juice',price:25.000 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:25.000,checked:false ,id:6},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:7},{name:'Small Vanilla Shake',price:25.000,checked:false ,id:8},
      ],
      ],

    minimum_quatity:[2,1,1,null,null],
    counter:[0,0,0,0,0],
    required: [true,true,true,false,false],     
    id:4
  },

  { 
    meal:"Big Mac",
    price:70000,
    image:"https://img.giftpop.vn/brand/LOTTERIA/2PEMP2019237501_BASIC_origin.jpg",
    details:"McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

                    [{name:"Jalapeno Dip",price:25.000,checked:false,id:10},{name:"Sweet & Sour Dip",price:25.000,checked:false ,id:11},{name:'BBQ Dip',price:25.000 ,checked:false,id:12},
                    ],

                    [{name:"Small Coke",price:25.000 ,checked:false,id:13 },{name:"Small Fanta Orange",price:25.000 ,checked:false,id:14},{name:'Small Sprite',price:25.000,checked:false ,id:15},
                    {name:'Small Coke Zero',price:25.000 ,checked:false,id:16},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:17},{name:'Small Apple Juice',price:125.000 ,checked:false,id:18},
                    {name:'Small Strawberry Shake',price:25.000 ,checked:false,id:19},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:20},
                    ],

                    [{name:"Small Coke",price:25.000,checked:false ,id:21},{name:"Small Fanta Orange",price:25.000, checked:false ,id:22},{name:'Small Sprite',price:25.000,checked:false ,id:23},
                    {name:'Small Coke Zero',price:25.000 ,checked:false,id:24},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:25},{name:'Small Apple Juice',price:25.000,checked:false ,id:26},
                    {name:'Small Strawberry Shake',price:25.000,checked:false ,id:27},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:28},{name:'Small Vanilla Shake',price:25.000 ,checked:false,id:29},
                      ],
                        
                    [{name:"debonairs sauce",price:25.000 ,checked:false,id:30},{name:"BBQ Sauce",price:25.000,checked:false ,id:31},{name:'Tikka Sauce',price:25.000,checked:false ,id:32},
                    ],

                    [
                    {name:"Small Coke",price:25.000 ,checked:false,id:33},{name:"Small Fanta Orange",price:25.000 ,checked:false,id:34},{name:'Small Sprite',price:25.000 ,checked:false,id:35},
                    {name:'Small Coke Zero',price:25.000 ,checked:false,id:36},{name:'Small Syoney Zero',price:25.000 ,checked:false,id:37},{name:'Small Apple Juice',price:25.000 ,checked:false,id:38},
                    {name:'Small Strawberry Shake',price:25.000,checked:false ,id:39},{name:'Small Chocolate Shake',price:25.000 ,checked:false,id:40},{name:'Small Vanilla Shake',price:25.000,checked:false ,id:41},
                    ],
                    ],
    minimum_quatity:[2,1,1,null,null],
    counter:[0,0,0,0,0],
    required: [true,true,true,false,false],              
    id:5
  },

];