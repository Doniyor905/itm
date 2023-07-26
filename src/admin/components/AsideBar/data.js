const data = [
  {
    title: "Dashboard"
  },
  {
    title: "Catalog",
    subTitle: ["List", "Add Product"],
    icon: "fas fa-chevron-right fa-rotate-90",
    urlTo: "/admin/catalogList",
  },
  {
    title: "Sell/Orders",
    subTitle: ["List", "Order Detail", "Add Sale", "POS"],
    icon: "fas fa-chevron-right fa-rotate-90",
    urlTo: ["/orderList", "/orderDetail", "/addSale", "/pos"],
  },
  {
    title: "Accounts",
    subTitle: ["List", "Balance Sheet", "Trial Balance", "Cash Flow", "Payment Account Report"],
    icon: "fas fa-chevron-right fa-rotate-90",  
    urlTo: ["/accountList", "/balanceSheet", "/rialBalance", "/cashFlow", "/paymentAccountReport"],

  },
  {
    title: "Settings",
    subTitle: ["Bussiness Setting", "Website Settings", "App Settings", "Warehouse", "Language", "Currency", "Payement Methods", "Tax Settings", "Coupon Settings"],
    icon: "fas fa-chevron-right fa-rotate-90",  
  },
];

export default data

