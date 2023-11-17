import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    products: [],
    productsInBag: []
  }),
  actions: {
    loadProducts() {
      axios
        .get('https://fakestoreapi.com/products')
        .then(response => this.products = response.data)
    },
    loadBag() {
      if (localStorage.getItem("productsInBag")) {
        this.productsInBag = JSON.parse(localStorage.getItem("productsInBag"))
      }
    },
    addInBag(product) {
      product.quantity = 1
      this.productsInBag.push(product)
      localStorage.setItem("productsInBag", JSON.stringify(this.productsInBag))
    },
    isInBag(product) {
      return this.productsInBag.some((item) => item.id === product.id)
    },
    removeFromBag(product) {
      let updatedBag = this.productsInBag.filter(item => item.id != product.id)
      this.productsInBag = updatedBag
      localStorage.setItem("productsInBag", JSON.stringify(this.productsInBag))
    },
    priceIndividual(product) {
      let price = (product.quantity * product.price).toFixed(2)
      return price
    },
    orderTotal() {
      let total = 0
      this.productsInBag.forEach(item => {
        total += item.price * item.quantity
      })
      return total.toFixed(2)
    }
  },
  getters: {

  }
})