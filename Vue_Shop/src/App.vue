<template>
  <div id="shop">
    <div class="container-fluid">
      <site-header/>   
      <post :posts="posts"
      />
      <single-page/>
      <cart/>
      <site-footer/>
    </div>    
  </div>
</template>

<script>
  export default {
    name: 'shop',
    data() {
      return {
        posts: [
          {
            src: require ('./assets/images/Bitter Taste - Leave Me Broken (EP) (2019).jpg'),
            title: 'Bitter Taste - Leave Me Broken (EP) (2019)',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed beatae molestiae, illo assumenda, illum optio omnis iste voluptas amet, dolorum dicta. Hic maiores perferendis quas, voluptates quo ratione omnis!',
            genre: 'Metallic Hardcore',
            price: 14.99
          },
          {
            src: require ('./assets/images/Brothers Till We Die - The Thin Line Between Death And Immortality (2017).jpg'),
            title: 'Brothers Till We Die - Line Between Death And Immortality (2017)',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed beatae molestiae, illo assumenda, illum optio omnis iste voluptas amet, dolorum dicta. Hic maiores perferendis quas, voluptates quo ratione omnis!',
            genre: 'Hardcore',
            price: 14.99
          },
          {
            src: require ('./assets/images/Dead Kennedys - Give Me Convenience or Give Me Death (Remastered) (2001).jpg'),
            title: 'Dead Kennedys - Convenience or Give Me Death (2001)',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed beatae molestiae, illo assumenda, illum optio omnis iste voluptas amet, dolorum dicta. Hic maiores perferendis quas, voluptates quo ratione omnis!',
            genre: 'Hardcore Punk',
            price: 14.99
          },
          {
            src: require ('./assets/images/Hollowed Out - Life Among the Lifeless (2017).jpg'),
            title: 'Hollowed Out - Life Among the Lifeless (2017)',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed beatae molestiae, illo assumenda, illum optio omnis iste voluptas amet, dolorum dicta. Hic maiores perferendis quas, voluptates quo ratione omnis!',
            genre: 'Beatdown Hardcore',
            price: 14.99
          },
          {
            src: require ('./assets/images/Misantropic - Insomnia (2010).jpg'),
            title: 'Misantropic - Insomnia (2010)',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed beatae molestiae, illo assumenda, illum optio omnis iste voluptas amet, dolorum dicta. Hic maiores perferendis quas, voluptates quo ratione omnis!',
            genre: 'Crust, D Beat',
            price: 14.99
          },
          {
            src: require ('./assets/images/Spawn Of Disgust -  No Warning Shots (EP) (2016).jpg'),
            title: 'Spawn Of Disgust -  No Warning Shots (EP) (2016)',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed beatae molestiae, illo assumenda, illum optio omnis iste voluptas amet, dolorum dicta. Hic maiores perferendis quas, voluptates quo ratione omnis!',
            genre: 'Beatdown Hardcore',
            price: 14.99
          },
          {
            src: require ('./assets/images/Brothers Till We Die - We Will Never Grow Up (2014).jpg'),
            title: 'Brothers Till We Die - We Will Never Grow Up (2014)',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed beatae molestiae, illo assumenda, illum optio omnis iste voluptas amet, dolorum dicta. Hic maiores perferendis quas, voluptates quo ratione omnis!',
            genre: 'Hardcore',
            price: 14.99
          },
          {
            src: require ('./assets/images/The Warriors - Monomyth (2019).jpg'),
            title: 'The Warriors - Monomyth (2019)',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed beatae molestiae, illo assumenda, illum optio omnis iste voluptas amet, dolorum dicta. Hic maiores perferendis quas, voluptates quo ratione omnis!',
            genre: 'Hardcore',
            price: 0
          }
        ]
      }
    }
  }
</script>

<style>

</style>
