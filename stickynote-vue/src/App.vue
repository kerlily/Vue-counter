<template>
 <main>
  <div class="container">
    <header>
      <h1 class="header-title">Memo</h1>
      <button class="header-button">+</button>
    </header>
    <div>[card]</div>
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
</style>