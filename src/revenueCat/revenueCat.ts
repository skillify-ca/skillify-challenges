// You have a list of sales data for your company, and you want to calculate the total revenue for each day.

// write a function that returns a list of products sorted by total revenue for a given day.
// There some products that are not sold that day, and you want to include those days in your result as well.

// each item in the list is an object with the following properties:
// date: the date of the sale
// price: the price of the sale
// product: the name of the product sold

// sample data
const products = ["apple", "orange", "banana"];

type Sale = {
  date: string;
  price: number;
  product: string;
};

const sales: Sale[] = [
  { date: "2020-01-01", price: 100, product: "apple" },
  { date: "2020-01-01", price: 200, product: "apple" },
  { date: "2020-01-01", price: 300, product: "orange" },
  { date: "2020-01-02", price: 100, product: "orange" },
  { date: "2020-01-02", price: 200, product: "orange" },
  { date: "2020-01-02", price: 300, product: "orange" },
];

type RevenueResult = {
  product: string;
  revenue: number;
};

function getSalesData(products: string[], sales: Sale[], date: string) {
  const results: RevenueResult[] = [];

  // for each product calculate the total revenue for the given date

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productSalesForDate = sales.filter(
      (sale) => sale.product === product && sale.date === date
    );
    const totalRevenue = productSalesForDate.reduce(
      (total, sale) => total + sale.price,
      0
    );
    results.push({
      product: product,
      revenue: totalRevenue,
    });
  }

  // sort the products by revenue
  results.sort((a, b) => b.revenue - a.revenue);
  // return the result
  return {
    date: date,
    results,
  };
}

// expected result
const expectedResult = getSalesData(products, sales, "2020-01-01");
console.log(expectedResult);
