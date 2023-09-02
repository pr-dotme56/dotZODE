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
        <input bind:value={str} placeholder="Enter the text" type="text" class="inputText bg-gray-200 border border-gray-300 text-gray-900 text-sm w-full rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        {#if str}
            <span class="clearBtn" on:click={ClearIn}>
                <div class="clearBtnBackground">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                    </svg>
                </div>
            </span>
        {/if}
    </div>
    
    <div class="Btn">
        <Button on:click={() => {code = toASCII(str)}} color="blue" id="ConvertBtn" size="md">
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
    .clearBtnBackground {
        background-color: #334155;
        padding: 5px; 
    }
    .clearBtn {
        position: absolute;
        right: 10px;
        padding: 10px;
        top: 0%;
        cursor: pointer;
        
    }
    .inputField{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .inputText{
        margin-bottom: 10px;
        height: 48;
    }
    .code{
        padding: 25px;
        font-family: "Fira Code";
    }
</style>
