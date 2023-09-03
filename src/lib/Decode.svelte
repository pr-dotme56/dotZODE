<script lang="ts">
    import { Button, Tooltip } from "flowbite-svelte";
    let ASCII = "";
	let value = "";
	function toString(ASCII: string) {
		let intStr = ASCII.split(" ").map(Number);
		return String.fromCodePoint.apply(null, intStr);
	}
    function ClearIn() {
        ASCII="";
    }
</script>


<div class="window">
    <div class="inputField">
        <input bind:value={ASCII} placeholder="Enter the code" type="text" class="inputText pr-10 mb-2.5 h-12 relative bg-gray-200 border border-gray-300 text-gray-900 text-sm w-full rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        {#if ASCII}
            <button class="clearBtn" on:click={ClearIn} >
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                </svg>
            </button>
        {/if}
    </div>

    <div class="Btn">
        <Button on:click={() => {value = toString(ASCII)}} color="blue" id="ConvertBtn">
            Convert
        </Button>
        <Tooltip arrow={false} trigger="click" triggeredBy="#ConvertBtn">
            Converted!
        </Tooltip>
    </div>

    <p class="value  text-black dark:text-white">
        <textarea id="textar" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Decoded message" rows="5" readonly value= {value}/>
    </p>
</div>


<style>
    .clearBtn {
        position: absolute;
        right: 2px;
        padding: 10px;
        bottom: 20%;
        cursor: pointer;
    }
    #textar{
        resize: none;
    }
    .inputField{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .value{
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Fira Code";
    }
</style>
