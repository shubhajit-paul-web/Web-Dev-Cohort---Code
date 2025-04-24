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
}

class Order {
    /**
     * @param {number} orderId 
     * @param {Array} items 
     * @param {number} totalAmount 
     * @param {string} status 
     */
    constructor(orderId, items, status) {
        this.orderId = orderId;
        this.items = items;
        this.status = status;
    }

    addItem(itemName) {
        this.items = item;
        console.log();
    }

    removeItem(itemName) {
        itemName = itemName.toLowerCase();
        for(let index in this.items) {
            if (this.items[index].toLowerCase() === itemName) {
                this.items.splice(index, 1);
                console.log(`🗑️ Removed "${itemName}" from cart.`);
                return;
            }
        }
        console.log(`🚫 Item "${itemName}" is not available.`);
    }

    calculateTotal() {
        return this.items.reduce((acc, currentNum) => acc += currentNum, 0);
    }

    updateStatus(newStatus) {
        // Status (Preparing, Out for Delivery, Delivered)
        this.status = newStatus;
    }
}

class Restaurant {
    /**
     * @param {string} name - Name of the restaurant
     * @param {Array} menu - List of FoodItem objects
     * @param {Array} currentOrders - All active orders
     */
    constructor(name, menu, currentOrders) {
        this.name = name;
        this.menu = menu;
        this.currentOrders = currentOrders;
    }

    addItem(...items) { // [{}, {}, {}]
        if (items.length > 0) {
            this.menu.push(...items); // {}, {}, {}
        }   
    }

    showMenu() {
        console.log(`🍽️ Welcome to ${this.name} Restaurant!`);
        console.log(""); // added extra line space
        console.log("🥗 Menu:");
        
        this.menu.forEach(function(item, index) {
            console.log(`${index+1}. ${item} - ₹${item.price}`);
        });
    }
}
