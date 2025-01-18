import { defineStore } from 'pinia';
import axios from 'axios';
import { onMounted, ref } from 'vue';

export const useCounterStore = defineStore('cart', () => {
  const products = ref([])
  const cart = ref([])
  const count = useState('count', () => 0)

async function fetchProducts(){
  try {
      const response = await axios.get('https://fakestoreapiserver.reactbd.com/nextamazon');
      products.value = response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  function addToCart(product: any) {
    const existingProductIndex = cart.value.findIndex((item: any) => item._id === product._id);
    if (existingProductIndex !== -1) {
      cart.value[existingProductIndex].quantity += 1
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
    alert("Product added to cart")
  }

  function transferToCart(product: any) {
    const index = products.value.findIndex((p: any) => p.__id === product._id)
    if (index !== -1) {
      const [productToTransfer] = products.value.splice(index, 1)
      addToCart(productToTransfer)
    }
  }

  function removeFromCart(_id: number) {
    const index = cart.value.findIndex((item: any) => item._id === _id);
    if (index !== -1) {
      cart.value.splice(index, 1)
    } else {
      console.log('Product not found in cart')
    }
    alert("Product removed from cart")
  }

  function inc() {
    count.value += 1
  }
  function dec() {
    if(count.value > 1){
      count.value -= 1
    }
  }

  onMounted(() => {
    fetchProducts()
  })

  return {
    products,
    cart,
    count,
    inc,
    dec,
    fetchProducts,
    addToCart,
    transferToCart,
    removeFromCart,
  }
})