<script>
  import { collection, orderBy, query } from "firebase/firestore";
  import { collectionData } from "rxfire/firestore";
  import { map, startWith, tap } from "rxjs/operators";
  import { firestore } from "../firebase";
  import ProfileImg from "./ProfileImg.svelte";
  import { user } from "./user.store.js";

  import { fly } from "svelte/transition";

  let currentUser = null;
  user.subscribe((u) => (currentUser = u));

  const messageRef = query(
    collection(firestore, "messages"),
    orderBy("date", "asc")
  );
  const messages = collectionData(messageRef, { idField: "id" }).pipe(
    startWith([]),
    map((messages) => {
      return messages.map((message) => {
        message.date = message.date.toDate();
        return message;
      });
    })
  );
</script>

{#each $messages as message}
  <div
    transition:fly={currentUser === message.from
      ? { x: 200, duration: 800 }
      : { x: -200, duration: 800 }}
    class="content {currentUser === message.from ? 'me' : 'other'}"
  >
    <div class="message">
      {message.text}
    </div>
    <div class="img">
      <ProfileImg user={message.from} />
    </div>
  </div>
  <!-- <div class="date">
    <i>{message.date.toLocaleTimeString()}</i>
  </div> -->
{/each}

<style>
  .content {
    display: flex;
    align-items: center;
  }
  .message {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .me {
    flex-direction: row-reverse;
  }
  .other {
    flex-direction: row;
  }
  .message {
    order: 1;
  }
  .date {
    font-size: 8px;
  }
</style>
