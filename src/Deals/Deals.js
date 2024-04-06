function Deals() {
    const [property, setProperty] = useState([
        {
            url: "file:///C:/Users/asus/Downloads/project/images1.jpg ",
           name: "TRQ White Shoes",
           category: "Shoes",
            seller: "AMZ Seller Ghz",
            price: 1999,
        },
        {
            url: "file:///C:/Users/asus/Downloads/project/images1.jpg ",
            name: "TRQ White Shoes",
            category: "Shoes",
             seller: "AMZ Seller Ghz",
             price: 1999, 
        },
        {
            url: "file:///C:/Users/asus/Downloads/project/images1.jpg ",
            name: "TRQ White Shoes",
            category: "Shoes",
             seller: "AMZ Seller Ghz",
             price: 1999, 

        },
        {
            url: "file:///C:/Users/asus/Downloads/project/images1.jpg ",
            name: "TRQ White Shoes",
            category: "Shoes",
             seller: "AMZ Seller Ghz",
             price: 1999, 
        }
    ]);
        const [cart, setCart] = useState([]);
        const [showCart, setShowCart] = useState(false);