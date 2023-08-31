<script lang="ts">
    import { Button, Tooltip, Textarea } from "flowbite-svelte";
    let ASCII = "";
	let value = "";
	function toString(ASCII: string) {
		let intStr = ASCII.split(" ").map(Number);
		return String.fromCodePoint.apply(null, intStr);
	}
</script>


<div class="window">
    <div class="inputField">
        <input bind:value={ASCII} placeholder="Enter the code" class="inputText text-black dark:text-white"/>
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
        <Textarea placeholder="Decoded message" rows="5" disabled readonly value= {value}/>
    </p>
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
    .value{
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Fira Code";
    }
</style>
