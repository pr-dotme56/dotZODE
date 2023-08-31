<script lang="ts">
    let str = "";
  	let code = "";
  	function toASCII (str: string) {
		return [...str].map(result => result.charCodeAt(0)).join(" ");
  	}
    import { Button, Tooltip, Input} from 'flowbite-svelte';

    async function copyValue() {
    try {
      await navigator.clipboard.writeText(code);
    } catch (error) {
      console.error("Error copying value");
    }
  }
</script>


<div class="window">

    <div class="inputField">
        <input bind:value={str} placeholder="Enter the text" class="inputText text-black dark:text-white"/>
    </div>

    <div class="Btn">
        <Button on:click={() => {code = toASCII(str)}} color="blue" id="ConvertBtn">
            Convert
        </Button>
        <Tooltip arrow={false} trigger="click" triggeredBy="#ConvertBtn">
            Converted!
        </Tooltip>
    </div>

    <p class="code text-black dark:text-white">
        <Input class="md-6" disabled readonly value= {code} placeholder="Generated code" size="lg"/>
    </p>

    <div class="Btn">
        <Button on:click={copyValue} color="red" id="CopyBtn">
            Copy
        </Button>
        <Tooltip arrow={false} trigger="click" triggeredBy="#CopyBtn">
            Copied!
        </Tooltip>
    </div>      
</div>


<style>
    .inputField{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .inputText{
        display: flex;
        align-items: center;
        font-family: "Fira Code";
        justify-content: center;
        margin-bottom: 20px;
        font-size: 1em;
        font-weight: 500;
        font-size: 10;
        background-color: rgba(199, 199, 199, 0.281);
        padding: 0.6em 1.2em;
        border: 1px rgba(199, 199, 199, 0.281);
        border-radius: 3px;
    }
    .code{
        padding: 25px;
        font-family: "Fira Code";
    }
</style>
