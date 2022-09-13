<script>
  export let user;

  async function getIcon() {
    const response = await fetch(
      `https://avatars.dicebear.com/api/adventurer-neutral/${user}.svg`
    );
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      if (blob) {
        resolve(URL.createObjectURL(blob));
      }
      reject("error");
    });
  }
  
  const icon$ = getIcon();
</script>

{#if user}
  {#await icon$ then src}
    <img {src} width="30" height="30" alt="icon" />
  {/await}
{/if}

<style>
  img {
    border-radius: 50%;
  }
</style>
