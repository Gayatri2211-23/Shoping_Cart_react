import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeItem } from "../redux/Slice";

function Cart() {
    const productData = useSelector(state => state.productDetails.value);
    console.log(productData);
    var sum = 0;
    var discount = 5;


    const dispatch = useDispatch();

    return <div className="container" style={{ marginLeft:"150px" ,width: '97%' }}><br /><br /><br /><br />
        <div className="row">
            <div className="col-md-7">
                <h4 className="mt-2"> Product Details</h4><br/>
                {productData.map((product, index) => {
                    console.log(product);
                    return <div className="container">
                        <div className="row border border-3 rounded" >
                            <div className="col-md-4"><img src={product.data.thumbnail} height={200} width={200} alt='not found' /></div>
                            <div className="col-md-5 p-4 text-center  justify-content-between">
                                <div className="row"><b>{product.data.title}</b><br /></div>
                                <div className="row"><b>$ {product.data.price}</b><br /></div>
                                <div className="row"><b>Quantity: {product.qty}</b><br /></div>
                                <div className="row mt-4"><table className="text-center align-middle"><tr className="text-center align-middle p-4">
                                    <td className="border border-dark p-2 rounded"> <div style={{ cursor: "pointer" }} onClick={() => dispatch(decrementQty(product.data.id))}>-</div></td>
                                    <td className="border border-dark rounded">&nbsp; {product.qty} &nbsp;</td>
                                    <td className="border border-dark p-2 rounded"><div style={{ cursor: "pointer" }} onClick={() => dispatch(incrementQty(product.data.id))}>+</div></td>
                                </tr>
                                </table></div>
                            </div>
                            <div className=" col-md-3 align-top d-flex justify-content-end mt-3">
                                <div style={{ cursor: "pointer" }} onClick={() => dispatch(removeItem(product.data.id))}><i class="bi bi-trash3" style={{ fontSize: "25px" }}></i><br /><br /><br /> <br /><br /><b>$ {(product.data.price * product.qty).toFixed(3)}</b></div>
                            </div>

                        </div><br />
                    </div>
                })}
            </div>

            <div className="col-md-5 mt-4" style={{ fontSize: '18px' }}>
                <div className="container mt-5 border border-3 border-solid rounded p-5">
                    <b>Price Details ( {productData.length} Items)</b><br /><br />
                    <div className="row"><div className="col-md-8">Total Product Price</div><div className="col-md-4">
                        {productData.map((product, index) => {
                            sum = sum + product.data.price * product.qty;
                        })}<b>$ {sum.toFixed(2)}</b>
                    </div></div>
                    <div className="row"><div className="col-md-8">Total Discounts</div><div className="col-md-4"><b> $ {discount}</b></div></div>
                    <hr />
                    <div className="row"><div className="col-md-8">Order Total</div><div className="col-md-4"><b>$ {(sum - discount).toFixed(2)}</b></div></div><br /><br />
                    <button className="btn btn-success btn-block" type="button">Order</button>

                </div>

            </div>
        </div>

    </div>
}
export default Cart; 