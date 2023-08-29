<script lang="ts">
    let str = "";
  	let code = "";
  	function toASCII (str: string) {
		return [...str].map(result => result.charCodeAt(0)).join(" ");
  	}
    import { Button } from 'flowbite-svelte';
    import {Tooltip} from 'flowbite-svelte';

    async function copyValue() {
    try {
      await navigator.clipboard.writeText(code);
    } catch (error) {
      console.error("Error copying value");
    }
  }
</script>

<div class="container">
    <div class="window">
        <div class="title text-black dark:text-white">
            Encoder
        </div>

        <div class="inputField">
            <input bind:value={str} placeholder="Enter the text" class="inputText text-black dark:text-white"/>
        </div>

        <div class="Btn">
            <Button on:click={() => {code = toASCII(str)}} color="blue">
                Convert
            </Button>
            <Tooltip>
                Convert text
            </Tooltip>
        </div>

        <p class="code text-black dark:text-white">
            {code}
        </p>

        <div class="Btn">
            <Button on:click={copyValue} color="red">
                Copy
            </Button>
            <Tooltip>
                Copy code
            </Tooltip>
        </div>
        
    </div>
</div>

<style>
    .inputField{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title{
        font-size: 50px;
        font-weight: bold;
        font-family: "Fira Code";
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .inputText{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        background-color: rgba(199, 199, 199, 0.281);
        font-family: "Fira Code";
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-size: 10;
        border: 1px rgba(199, 199, 199, 0.281);
        border-radius: 3px;
    }
    .code{
        padding: 25px;
        font-family: "Fira Code";
    }
</style>