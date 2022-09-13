
<script>
    import {user} from './user.store';
    let pseudo = '';

    function save() {
        user.set(pseudo);
    }
</script>

<div class="container">
    <h4>Choose your pseudo</h4>
    <div class="content">
        <div>
            <input bind:value={pseudo} type="text">
        </div>
        <div>
            <button disabled='{pseudo == ''}' on:click={save} type="button">Save</button>
        </div>
    </div>
</div>

<style>
    h4 {
        text-transform: uppercase;
    }
    .container {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .content {
        display: flex;
        flex-direction: column;
    }
    .content div{
        height: 50px;
        padding: .5em;
    }
</style>