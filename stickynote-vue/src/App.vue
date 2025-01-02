<template>
 <main>
  <div class="container">
    <header>
      <h1 class="header-title">Memo</h1>
      <button class="header-button">+</button>
    </header>
    <div class="card-container">
      <div class="card">
        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, error eveniet excepturi accusantium quo ipsum maxime? Animi esse, incidunt quo perferendis distinctio blanditiis laboriosam, quos velit iste officiis illo.</p>
        <p class="card-date">182378912</p>
      </div>
       <div class="card">
        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, error eveniet excepturi accusantium quo ipsum maxime? Animi esse, incidunt quo perferendis distinctio blanditiis laboriosam, quos velit iste officiis illo.</p>
        <p class="card-date">182378912</p>
      </div>
       <div class="card">
        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, error eveniet excepturi accusantium quo ipsum maxime? Animi esse, incidunt quo perferendis distinctio blanditiis laboriosam, quos velit iste officiis illo.</p>
        <p class="card-date">182378912</p>
      </div>
       <div class="card">
        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, error eveniet excepturi accusantium quo ipsum maxime? Animi esse, incidunt quo perferendis distinctio blanditiis laboriosam, quos velit iste officiis illo.</p>
        <p class="card-date">182378912</p>
      </div>
    </div>
  </div>
 </main>
</template>

<style scoped>
  main{
    height: 100vh;
    width: 100vw;
  }

  .container{
    max-width: 900px;
    padding: 10px;
    margin: 0 auto;
  }

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-title{
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 25px;
    color: rgb(2, 78, 119);

  }

  .header-button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: rgb(2, 78, 119);
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }

  .card {
    width: 225px;
    height: 225px;
    padding: 15px;
    border-radius: 15px;
    background-color: #efff95;
    margin-right: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
   
  .card-container{
    display: flex;
    flex-wrap: wrap;
  }
</style>