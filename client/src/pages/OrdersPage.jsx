import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

const OrdersPage = () => {
  const token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const userId = decodedToken.id;
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const response = await axios.post(
      "http://localhost:5000/order/getOrderByUserId",
      { userId }
    );
    setOrders(response.data);
  };

  useEffect(() => {
    getOrders();
    console.log(orders);
  }, []);

  return (
    <>
      <div className="bg-gray h-[184px] flex items-center justify-center">
        <div className="font-bold text-green ml-4 text-[60px]">Your Orders</div>
      </div>
      {orders.map((order, index) => (
        <div key={index}>
          <div className="container mx-auto">
            <p className="font-bold text-green mt-4 text-[35px]">
              {" "}
              Order {index + 1} :
            </p>
          </div>
          <div className="container mx-auto flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Plant Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Quantite
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Price
                        </th>
                        <th scope="col" className="pl-6 py-4">
                          Total Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.Plants.map((plant, index) => (
                        <tr
                          className="border-b dark:border-neutral-500"
                          key={index}
                        >
                          <td class="whitespace-nowrap px-6 py-4">
                            {plant.plant.Name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">{plant.plant.Quantity}</td>
                          <td className="whitespace-nowrap px-6 py-4">{plant.plant.Price}</td>
                          <td className="whitespace-nowrap px-6 py-4">{plant.plant.Price*plant.plant.Quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default OrdersPage;
