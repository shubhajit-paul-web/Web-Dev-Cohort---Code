// 💡 New Application: "Online Food Ordering System" 🍔🍕

class FoodItem {
    /**
     * @param {string} name - Name of the food (e.g., "Burger")
     * @param {string} price - Price in ₹
     * @param {number} category - Type of food (e.g., "Fast Food")
     */
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getDetails() {
        return `${this.name} - ₹${this.price}`;
    }
}

class Order {
    /**
     * @param {number} orderId 
     * @param {Array} items 
     * @param {number} totalAmount 
     * @param {string} status 
     */
    constructor(orderId, items = [], status) {
        this.orderId = orderId;
        this.items = items;
        this.totalAmount = 0;
        this.status = status;
    }

    // Adds a food item to the cart
    addItem(itemObj) {
        this.items.push(itemObj);
        console.log(`🛒 Added "${itemObj.name}" to your cart.`);
    }

    // Removes a food item by name
    removeItem(itemName) {
        itemName = itemName.toLowerCase();
        for(let index in this.items) {
            if (this.items[index].name.toLowerCase() === itemName) {
                this.items.splice(index, 1);
                console.log(`🗑️ Removed "${itemName}" from cart.`);
                return;
            }
        }
        console.log(`🚫 Item "${itemName}" is not available.`);
    }

    // Updates totalAmount
    calculateTotal() {
        let total = this.items.reduce((acc, currentItem) => acc += currentItem.price, 0);
        this.totalAmount += total;

        console.log("");
        console.log(`🧾 Your order total is ₹${total}.`);
        return total;
    }

    // Updates status
    updateStatus(newStatus) {
        // Status (Preparing, Out for Delivery, Delivered)
        this.status = newStatus;
    }

    // Returns full order info as string
    getSummary() {
        console.log("");
        console.log(`🧾 Order Summary (ID: #${this.orderId})`);
        console.log("-----------------------------");
        this.items.forEach(function(item, index) {
            console.log(`${index+1}. ${item.name} - ₹${item.price}`);
        });
        console.log("");
        console.log(`💵 Total: ₹${this.totalAmount}`);
        console.log(`📦 Status: ${this.status}`);
        console.log("-----------------------------");
    }
}

class Restaurant {
    /**
     * @param {string} name - Name of the restaurant
     * @param {Array} menu - List of FoodItem objects
     * @param {Array} currentOrders - All active orders
     */
    constructor(name, menu, currentOrders = []) {
        this.name = name;
        this.menu = [...menu];
        this.currentOrders = currentOrders;
    }

    // Prints all food items with price
    showMenu() {
        console.log(`🍽️ Welcome to ${this.name} Restaurant!`);
        console.log(""); // added extra line space
        console.log("🥗 Menu:");
        
        this.menu.forEach(function(item, index) {
            console.log(`${index+1}. ${item.name} - ₹${item.price}`);
        });
    }

    // Starts a new order, returns order object
    createOrder() {
        let orderId = Math.floor((Math.random() * 899) + 100);

        let newOrder = new Order(orderId);
        newOrder.status = "Preparing";

        console.log("");
        console.log(`✅ New Order created with ID: #${orderId}`);
        console.log(`🛒 Ready to add items now!`);
        console.log("");
        
        return newOrder;
    }

    // Adds the order to currentOrders
    placeOrder(orderObj) {
        this.currentOrders.push(orderObj);
        console.log(`📦 Order placed successfully! Order ID: #${orderObj.orderId}`);
        console.log(`🍽️ Status: ${orderObj.status}`);
        console.log(orderObj);
        
    }

    // Returns status of specific order
    trackOrder(orderId) {
        for(let item of this.currentOrders) {
            if (item.orderId === orderId) {
                console.log(`Status: ${item.status}`);
                return;
            }
        }
    }

    // Cancels an order
    cancelOrder(orderId) {
        for(let item of this.currentOrders) {
            if (item.orderId === orderId) {
                if (item.status !== "Delivered") {
                    console.log(`❌ Order #${item.orderId} has been cancelled successfully.`);
                    return;
                }
                console.log(`⚠️ Order #${item.orderId} cannot be cancelled. It’s already delivered.`);
                return;
            }
        }

        console.log(`🚫 Order #${item.orderId} not found. Please check the ID.`);
    }
}

// Food items
const foodOne = new FoodItem("Burger", 120, "Junk Food");
const foodTwo = new FoodItem("Pizza", 80, "Junk Food");
const foodThree = new FoodItem("Apple", 50, "Fruit");
const foodFour = new FoodItem("Mango", 75, "Fruit");

// Restaurant 1: The Saffron Tree
const RestaurantKolkata = new Restaurant("The Saffron Tree", [foodOne, foodTwo, foodThree, foodFour]);
// const RestaurantDelhi = new Restaurant();

// Show menu
RestaurantKolkata.showMenu();

// Create order
const orderOne = RestaurantKolkata.createOrder();
// const orderTwo = RestaurantDelhi.createOrder();

orderOne.addItem(foodOne);
orderOne.addItem(foodTwo);

orderOne.calculateTotal();

orderOne.updateStatus("Out of Delivery");

RestaurantKolkata.placeOrder(orderOne)

orderOne.getSummary();