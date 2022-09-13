<script>
  import ProfileImg from "./ProfileImg.svelte";
    import { user } from "./user.store.js";

  let currentUser = null;
  let icon$ = null;
  user.subscribe((x) => {
    currentUser = x;
  });
</script>

<nav>
  <div class="title"><img src="https://svelte.dev/_app/immutable/assets/stopwar-947a4798.svg" alt="logo" width="100" height="100"></div>
  <div class="img-container"> <ProfileImg user={currentUser}/> {currentUser}</div>
  
</nav>

<style>
  nav {
    width: 70vw;
    height: 75px;
    padding: 1em;
    background-color: rgba(233, 156, 14, 0.822);
    display: flex;
    margin: 0 auto;
    align-items: center;
    margin-top: 100px;
  }
  .img-container{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90px;
  }
  .title {
    flex-grow: 99;
  }
</style>
