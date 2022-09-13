<script>
  import Chatbox from "./lib/Chatbox.svelte";
  import Info from "./lib/Info.svelte";
  import PseudoChoice from "./lib/PseudoChoice.svelte";

  import { user } from "./lib/user.store";

  let currentUser = null;
  user.subscribe((x) => (currentUser = x));
</script>

<main>
  {#if currentUser}
    <Info />
    <Chatbox />
  {:else}
    <PseudoChoice />
  {/if}
</main>
