import Button from "../UI/Button";
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItem = (
        <ul className="m-0 p-0 max-h-80 overflow-auto">
            {
                [{ id: 'c1', name: 'Chicken Pizza', price: 12.99 }].map((item) => (
                    <li>{item.name}</li>
                ))
            }
        </ul>
    );
    return (
        <Modal onHideBackdrop={props.onHideCartHandler}>
            <div className="flex flex-col text-base font-semibold my-2">
                <h5>{cartItem}</h5>
                <div className="flex items-center font-bold text-2xl justify-between mt-2">
                    <span>Total Amount</span>
                    <span>35.62</span>
                </div>
            </div>
            <div className="text-right">
                <Button onClick={props.onHideCartHandler} className="border-[1px] border-[#5a1a01] text-[#8a2b06] ">Close</Button>
                <Button className="text-sky-50 bg-[#763115]">Order</Button>
            </div>
        </Modal>
    );
}

export default Cart;