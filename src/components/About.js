function About(){

    return<div className="container" style={{marginTop:"100px"}}>
        <h1 className="text-center" style={{textDecoration:"underline", fontFamily:"Callibri"}}>ABOUT</h1>
        <br/>
        <p  className="lh-lg"> Welcome to our Shopping Cart! Here, you can manage your selected items, 
        adjust quantities, and proceed to checkout with ease. Enjoy a seamless shopping experience as you review and 
        finalize your purchase.</p>
        <br/>
        <b>Viewing Your Cart</b><br/>
        <p className="lh-lg">As you add items to your cart, they will appear here in a neatly organized list. Each entry includes:</p>
        <ul>
            <li><b>Product Image and Name: </b>Easily identify your items.</li>
            <li><b>Price:</b> Clearly displayed for each product.</li>
            <li><b>Quantity Selector:</b> Adjust the number of items with plus and minus buttons.</li>
            <li><b>Remove Option: </b>Delete items you no longer wish to purchase.</li>
       </ul>
       <br/>
       <b>Adding More Items</b>
       <p className="lh-lg">Continue exploring our store and effortlessly add products to your cart. Use the "Add to Cart" button available on each product page to include more items in your shopping cart.</p>
       <br/>
       <b>Adjusting Item Quantities</b>
       <p className="lh-lg">Need more or fewer items? Our quantity adjustment feature allows you to update the number of units per product directly within the cart. Simply click the plus (+) button to add more or the minus (-) button to reduce the quantity. Watch as the totals update in real-time.</p>
       <br/>
       <b>Order Summary</b>
       <p className="lh-lg">Review all your selected items in the order summary section. This area provides a comprehensive breakdown of your order:</p>
       <ul>
            <li><b>Itemized List:</b> Each product with its respective quantity and price.</li>
            <li><b>Subtotal:</b> The total cost of items before any additional charges.</li>
            <li><b>Grand Total:</b> The final amount you'll be charged.</li>
       </ul>
       <br/>
       <b>Placing Your Order</b>
       <p className="lh-lg">After confirming your details, place your order with confidence. A confirmation message will appear, summarizing your purchase and providing an order number. You'll also receive an email confirmation with all pertinent details.</p>
    <br/><br/><br/>
    </div>
}
export default About