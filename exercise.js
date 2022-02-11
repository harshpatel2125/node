// getCustomer(1, (customer) => {
// 	console.log("Customer: ", customer);
// 	if (customer.isGold) {
// 		getTopMovies((movies) => {
// 			console.log("Top movies: ", movies);
// 			sendEmail(customer, movies, (res) => {
// 				console.log("Email sent to ...", res);
// 			});
// 		});
// 	}
// });

async function display() {
	try {
		let displayTopMovies;
		const displayCustomer = await getCustomer(1);
		if (displayCustomer.isGold) {
			displayTopMovies = await getTopMovies();
		}
		const email = await sendEmail(displayCustomer, displayTopMovies);
		console.log(email);
	} catch (err) {
		console.log(err.message);
	}
}

display();

function getCustomer() {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res({
				id: 1,
				name: "Mosh Hamedani",
				isGold: false,
				email: "email",
			});
		}, 2000);
	});
}

function getTopMovies() {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(["movie1", "movie2"]);
		}, 2000);
	});
}

function sendEmail(customer, movies) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			if (movies) res({ customer: customer, movie: movies });
			else rej(new Error("Customer is not GOLD"));
		}, 2000);
	});
}

// getUser()
// 	.then((res) => githubRepo(res))
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err));

async function displayUsers() {
	try {
		const users = await getUser();
		console.log(users);
	} catch (err) {
		console.log(err.message);
	}
}

displayUsers();

function getUser(arg) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			if (arg) res({ id: arg, name: "Harsh" });
			else rej(new Error("ID Bad Request"));
		}, 2000);
	});
}

function githubRepo(arg) {
	return new Promise((res, rej) => {
		if (arg) res(["repo1", "repo2", "repo3", "repo4"]);
		else rej(new Error("Bad Request"));
	});
}

// mongoose exercise product CRUD

// const productSchema = new mongoose.Schema({
// 	name: {
// 		type: String,
// 		required: [true, "name is required"],
// 		trim: true,
// 	},
// 	category: {
// 		type: String,
// 		enum: ["mobile", "laptop", "tab"],
// 	},
// 	seller: String,
// 	tags: {
// 		type: Array,
// 		validate: {
// 			validator: function (params) {
// 				return params && params.length > 0;
// 			},
// 			message: "A Product should have at least 1 Tag",
// 		},
// 	},
// 	doi: { type: Date, default: Date.now },
// 	isPublished: Boolean,
// 	price: {
// 		type: Number,
// 		required: function () {
// 			return this.isPublished;
// 		},
// 	},
// });

// const Products = mongoose.model("Products", productSchema);

// const products = new Products({
// 	name: " Mobile ",
// 	category: "laptop",
// 	seller: "Harsh",
// 	tags: ["mobile"],
// 	price: "3000",
// 	isPublished: true,
// });

// async function validateProduct() {
// 	try {
// 		products.validate((res) => {
// 			if (res) {
// 				console.log(res.message);
// 			} else {
// 				createProduct();
// 			}
// 		});
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// }

// async function createProduct() {
// 	const result = await products.save();
// 	console.log(result);
// }

// validateProduct();

// async function getAllProducts() {
// 	const result = await Products.find();
// 	console.log(result);
// }

// async function getFilterProduct() {
// 	const pageNumber = 1;
// 	const pageSize = 2;
// 	const result = await Products.find({ seller: /.*rs.*/i })
// 		.sort({
// 			name: 1,
// 		})
// 		.skip((pageNumber - 1) * pageSize)
// 		.limit(pageSize);
// 	console.log(result);
// }

// async function updateProduct(id) {
// get document first and then update

// const product = await Products.findById(id);
// if (!product) return;
// product.set({
// 	name: "Laptop",
// 	seller: "Harsh",
// });
// const result = await product.save();

//Update with id

// 	const result = await Products.findByIdAndUpdate(
// 		id,
// 		{
// 			$set: {
// 				name: "Laptop",
// 				seller: "Harsh R. Patel",
// 			},
// 		},
// 		{ new: true }
// 	);

// 	console.log(result);
// }

// async function deleteProduct(id) {
// 	const result = await Products.findByIdAndDelete({ _id: id }, { new: true });
// 	console.log(result);
// }

// getAllProducts();

// getFilterProduct();

// updateProduct("6204fc906ea3c06af8813d85");

// deleteProduct("6204fcf44980de31228e73d2");
