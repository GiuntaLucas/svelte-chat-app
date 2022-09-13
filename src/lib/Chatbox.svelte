<script>
  import Messages from "./Messages.svelte";
  import { collection, addDoc } from "firebase/firestore";
  import { firestore } from "../firebase";
  import { user } from "./user.store.js";

  let box;
  let message = "";
  let currentUser = null;
  user.subscribe((u) => (currentUser = u));

  async function handleOnSubmit(e) {
    const item = {
      text: message,
      from: currentUser,
      date: new Date(),
    };
    const messagesRef = collection(firestore, "messages");
    await addDoc(messagesRef, item);
    message = "";
    box.scrollTo(0, box.scrollHeight);
  }
</script>

<div class="container">
  <div bind:this={box} class="messages-container">
    <Messages />
  </div>
  <form class="new-message" on:submit|preventDefault={handleOnSubmit}>
    <input bind:value={message} />
    <button disabled={message == ""} type="submit">Send</button>
  </form>
</div>

<style>
  .container {
    width: 70vw;
    height: 500px;
    border: 1px rgba(233, 156, 14, 0.822) solid;
    margin: 0 auto;
    margin-top: 5em;
    padding: 1em;
    display: flex;
    flex-direction: column;
  }
  .messages-container {
    flex-grow: 99;
    overflow-y: scroll;
  }
  .new-message {
    height: 100px;
    border-top: 1px rgba(233, 156, 14, 0.822) solid;
    display: flex;
    align-items: center;
  }
  .new-message input {
    margin-top: 0.5em;
    margin-right: 2em;
    background: transparent;
    border: none;
    color: white;
    border: none;
    overflow: auto;
    outline: none;
    height: 95px;
    width: 100%;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
  }
  /* width */
  ::-webkit-scrollbar {
    width: 1px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
</style>
