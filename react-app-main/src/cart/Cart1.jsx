import React from "react";

class CartA extends React.Component{
    state={

        

        product1:
        {image:"https://rukminim1.flixcart.com/image/416/416/ks99aq80/computer/o/h/g/na-gaming-laptop-lenovo-original-imag5ve2rpxqp3ac.jpeg?q=70",
        product:"Lenovo Legion 5 Ryzen ",
           Price:103990,
           qty:1,
        total:""},
     product2:{
         image:"https://rukminim1.flixcart.com/image/312/312/kpmy8i80/television/q/u/v/u-series-50-u1s-50uc1a00-oneplus-original-imag3tpydevtfnd9.jpeg?q=70",
    product:"OnePlus (50 inch)(4K) Android TV",
    price:43999,
    qty:1,
    total:""
},
product3:{
    image:"https://rukminim1.flixcart.com/image/312/312https://rukminim1.flixcart.com/image/312/312/jefzonk0/dslr-camera/g/v/r/eos-80d-80d-canon-original-imaf329wfqqyawwx.jpeg?q=70/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
    product:"Canon EOS 80D DSLR Camera",
    price:86499,
    qty:1,
    total:"",
},
product3:{
    image:"https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/mobile/6/h/y/iphone-12-mjnm3hn-a-apple-original-imag2k2v6ehvnzfd.jpeg?q=70",
    product:"APPLE iPhone 12 (Purple, 128 GB)",
    price:5699,
    qty:1,
    total:"",

    
},
product4:{
    image:"https://rukminim1.flixcart.com/image/495/594/kelptow0/waistcoat/5/z/c/36-blugrw-04-trulyfab-original-imafv8zb574q5xsy.jpeg?q=50",
    product:"Solid Men Waistcoat",
    price: 949,
    qty:1,
    total:null,

},
product5:{
    image:"https://rukminim1.flixcart.com/image/312/312/k7f34i80/washing-machine-new/h/y/j/ww60r20glma-tl-samsung-original-imafpns894qh5zta.jpeg?q=70",
    product:"SAMSUNG 6 kg 5 Star",
    price: 21890,
    qty:1,
    total:null,

},
product5:{
    image:"https://rukminim1.flixcart.com/image/495/594/kruyw7k0/watch/u/z/4/ed439-casio-original-imag5jspmxmhychc.jpeg?q=50",
    product:"ED439 Edifice ( EF-558SG-1AVDF ) Analog Watch",
    price: 10196,
    qty:1,
    total:null,

},
product6:{
    image:"https://rukminim1.flixcart.com/image/800/960/kggviq80/gown/s/v/t/na-xl-3-4-sleeve-stitched-rite1052-ftdiva-na-original-imafwphyt4ysr7we.jpeg?q=50",
    product:"Paisley Rayon Blend Stitched Anarkali Gown ",
    price: 626,
    qty:1,
    total:null,

},
product7:{
    image:"https://rukminim1.flixcart.com/image/800/960/kffq2kw0/gown/5/d/f/na-l-3-4-sleeve-stitched-sl-4011-santlal-na-original-imafvwgkusnhzfa8.jpeg?q=50",
    product:"Printed Rayon Blend Stitched Anarkali Gown",
    price: 598,
    qty:1,
    total:null,

},
product8:{
    image:"https://rukminim1.flixcart.com/image/416/416/k5y7tzk0/deodorant/r/2/z/450-deodorant-spray-perfume-cool-action-and-allure-avatar-original-imafzgzn8sfgkzu4.jpeg?q=70",
    product:"SET WET Deodorant Spray Perfume ",
    price: 368,
    qty:1,
    total:null,

},
product9:{
    image:"https://rukminim1.flixcart.com/image/416/416/klgx0280/block-construction/e/d/g/100-pcs-building-blocks-shapes-puzzles-skill-development-hand-original-imagyh5gkzra5d6k.jpeg?q=70",
    product:"Kids creation 100 Pcs Building Blocks Shapes",
    price: 279,
    qty:1,
    total:null,

},
product10:{
    image:"https://rukminim1.flixcart.com/image/416/416/k4d27ww0/wardrobe-closet/z/s/g/particle-board-fk6004-flipkart-perfect-homes-espresso-original-imaf9m4hqmz7qpx9.jpeg?q=70",
    product:"Door Wardrobe",
    price: 9900,
    qty:1,
    total:null,

}



}

    render(){

        return (
            <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover bg light">
                            <thead>
                                <tr>
                                    <th>image</th>
                                    <th >product name</th>
                                    <th> price</th>
                                    <th> qty</th>
                                    <th> total</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={this.state.product1.image } alt="" height="80px" /> </td>
                                    <td>{this.state.product1.product}</td>
                                    <td>{this.state.product1.Price}</td>

                                    <i class="fas fa-minus-circle"></i> 

                                    <span><td>{this.state.product1.qty}</td></span>

                                    <i onClick={this.update} class="fas fa-plus-circle"></i>

                                    <td>{this.state.product1.total}</td>
                                </tr>
                                <tr>
                                <td><img src={this.state.product2.image} alt="" height="80px" /></td>
                                <td>{this.state.product2.product}</td>
                                <td>{this.state.product2.price}</td>
                                <i class="fas fa-minus-circle"></i>
                                <td>{this.state.product2.qty}</td>
                                <i onClick={this.update} class="fas fa-plus-circle"></i>
                                <td>{this.state.product2.total}</td>
                                
                                </tr>
                                <tr>
                                    <td><img src={this.state.product3.image} alt="" height="110px" width="100px" /></td>
                                    <td>{this.state.product3.product}</td>
                                    <td>{this.state.product3.price}</td>
                                    <i class="fas fa-minus-circle"></i>
                                    <td>{this.state.product3.qty}</td>
                                    <i onClick={this.update} class="fas fa-plus-circle"></i>
                                    <td>{this.state.product3.total}</td>
                                </tr>
                                <tr>
                                    <td><img src={this.state.product4.image} alt="" height="110px" width="100px" /></td>
                                    <td>{this.state.product4.product}</td>
                                    <td>{this.state.product4.price}</td>
                                    <i class="fas fa-minus-circle"></i>
                                    <td>{this.state.product4.qty}</td>
                                    <i onClick={this.update} class="fas fa-plus-circle"></i>
                                    <td>{this.state.product4.total}</td>
                                </tr>
                                <tr>
                                    <td><img src={this.state.product5.image} alt="" height="110px" width="100px" /></td>
                                    <td>{this.state.product5.product}</td>
                                    <td>{this.state.product5.price}</td>
                                    <i class="fas fa-minus-circle"></i>
                                    <td>{this.state.product5.qty}</td>
                                    <i onClick={this.update} class="fas fa-plus-circle"></i>
                                    <td>{this.state.product5.total}</td>
                                </tr>
                                <tr>
                                    <td><img src={this.state.product6.image} alt="" height="110px" width="100px" /></td>
                                    <td>{this.state.product6.product}</td>
                                    <td>{this.state.product6.price}</td>
                                    <i class="fas fa-minus-circle"></i>
                                    <td>{this.state.product6.qty}</td>
                                    <i onClick={this.update} class="fas fa-plus-circle"></i>
                                    <td>{this.state.product6.total}</td>
                                </tr>
                                <tr>
                                    <td><img src={this.state.product7.image} alt="" height="110px" width="100px" /></td>
                                    <td>{this.state.product7.product}</td>
                                    <td>{this.state.product7.price}</td>
                                    <i class="fas fa-minus-circle"></i>
                                    <td>{this.state.product7.qty}</td>
                                    <i onClick={this.update} class="fas fa-plus-circle"></i>
                                    <td>{this.state.product7.total}</td>
                                </tr>
                                <tr>
                                    <td><img src={this.state.product8.image} alt="" height="110px" width="100px" /></td>
                                    <td>{this.state.product8.product}</td>
                                    <td>{this.state.product8.price}</td>
                                    <i class="fas fa-minus-circle"></i>
                                    <td>{this.state.product8.qty}</td>
                                    <i onClick={this.update} class="fas fa-plus-circle"></i>
                                    <td>{this.state.product8.total}</td>
                                </tr>
                                <tr>
                                    <td><img src={this.state.product9.image} alt="" height="110px" width="100px" /></td>
                                    <td>{this.state.product9.product}</td>
                                    <td>{this.state.product9.price}</td>
                                    <i class="fas fa-minus-circle"></i>
                                    <td>{this.state.product9.qty}</td>
                                    <i onClick={this.update} class="fas fa-plus-circle"></i>
                                    <td>{this.state.product9.total}</td>
                                </tr>
                                <tr>
                                    <td><img src={this.state.product10.image} alt="" height="110px" width="100px" /></td>
                                    <td>{this.state.product10.product}</td>
                                    <td>{this.state.product10.price}</td>
                                    <i class="fas fa-minus-circle"></i>
                                    <td>{this.state.product10.qty}</td>
                                    <i onClick={this.update} class="fas fa-plus-circle"></i>
                                    <td>{this.state.product10.total}</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}
export default CartA;