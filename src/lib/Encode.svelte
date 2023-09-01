<script lang="ts">
    let str = "";
  	let code = "";
  	function toASCII (str: string) {
		return [...str].map(result => result.codePointAt(0)).join(" ");
  	}
    import { Button, Tooltip, Input} from 'flowbite-svelte';
    async function copyValue() {
    try {
      await navigator.clipboard.writeText(code);
    } catch (error) {
      console.error("Error copying value");
    }
    }

    function ClearIn() {
        str="";
    }
</script>


<div class="window">

    <div class="inputField">
        <input bind:value={str} placeholder="Enter the text" class="inputText text-black dark:text-white"/>
        {#if str}
            <button class="clearBtn" on:click={ClearIn} >
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                </svg>
            </button>
        {/if}
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
    .clearBtn {
        position: absolute;
        right: 10px;
        padding: 20px;
        bottom: 14%;
        cursor: pointer;
        margin-left: 10px;
    }
    .inputField{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .inputText{
        display: flex;
        margin-right: 10px;
        align-items: center;
        font-family: "Fira Code";
        justify-content: center;
        margin-bottom: 20px;
        font-size: 1em;
        font-weight: 500;
        font-size: 10;
        padding-right: 50px;
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
