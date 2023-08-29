<script lang="ts">
    import { Button } from "flowbite-svelte";
    import {Tooltip} from 'flowbite-svelte';
    let ASCII = "";
	let value = "";
	function toString(ASCII: string) {
		let intStr = ASCII.split(" ").map(Number);
		return String.fromCodePoint.apply(null, intStr);
	}
</script>

<div class="container">
    <div class="window">
        <div class="title text-black dark:text-white">
            Decoder
        </div>

        <div class="inputField">
            <input bind:value={ASCII} placeholder="Enter the code" class="inputText text-black dark:text-white"/>
        </div>

        <div class="Btn">
            <Button on:click={() => {value = toString(ASCII)}} color="blue">
                Convert
            </Button>
            <Tooltip>
                Convert text
            </Tooltip>
        </div>

        <p class="value  text-black dark:text-white">
            {value}
        </p>
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
    .value{
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Fira Code";
    }
</style>