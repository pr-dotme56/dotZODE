<script lang="ts">
    import { clipboard } from "@skeletonlabs/skeleton";
    import { ListBox, ListBoxItem, popup } from '@skeletonlabs/skeleton';
    import type {PopupSettings} from '@skeletonlabs/skeleton';

    let listValue: string;
    let listValue2: string;
    
    const popupCombobox: PopupSettings = {
	    event: 'focus-click',
	    target: 'popupCombobox',
	    placement: 'bottom',
	    closeQuery: '.listbox-item'
    };

    const popupCombobox2: PopupSettings = {
    event: 'focus-click',
    target: 'popupCombobox2',
    placement: 'bottom',
    closeQuery: '.listbox-item',
    };

    let str = "";
  	let code = "";

    function handle() {
        // Binary 
        if (listValue === "ASCII" && listValue2 === "Binary") {
            return code = txtToBin(str);
        } else if (listValue === "Octal" && listValue2 === "Binary"){
            return code = octToBin(str);
        } else if (listValue === "Hex" && listValue2 === "Binary"){
            return code = hexToBin(str);
        }
        else if (listValue === "Binary" && listValue2 === "Binary"){
            return code = "Error!";
        }

        // ASCII
        if (listValue === "Binary" && listValue2 === "ASCII") {
            return code = binToASC(str);
        } else if (listValue === "Octal" && listValue2 === "ASCII"){
            return code = octToASC(str);
        } else if (listValue === "Hex" && listValue2 === "ASCII"){
            return code = hexToASC(str);
        } else if (listValue === "ASCII" && listValue2 === "ASCII"){
            return code = "Error!";
        }

        // Octal
        if (listValue === "Binary" && listValue2 === "Octal") {
            return code = binToOct(str);
        } else if (listValue === "ASCII" && listValue2 === "Octal"){
            return code = txtToOct(str);
        } else if (listValue === "Hex" && listValue2 === "Octal"){
            return code = hexToOct(str);
        } else if (listValue === "Octal" && listValue2 === "Octal"){
            return code = "Error!";
        }

        // Hex
        if (listValue === "Binary" && listValue2 === "Hex") {
            return code = binToHex(str);
        } else if (listValue === "ASCII" && listValue2 === "Hex"){
            return code = txttoHex(str);
        } else if (listValue === "Octal" && listValue2 === "Hex"){
            return code = octToHex(str);
        } else if (listValue === "Hex" && listValue2 === "Hex"){
            return code = "Error!";
        }
    }

    function textClearIn() {
        str="";
    }

    // ASCII ------------------------------
    function txtToASC (str: string) {
      return [...str].map(result => result.codePointAt(0)).join(" ");
  	}
    function binToASC(str: string) {
      return (str.match(/.{1,8}/g) || []).map(result => String.fromCharCode(parseInt(str, 2))).join("")
    }
    function octToASC(str: string) {
      return String.fromCharCode(parseInt(str, 8))
    }
    function hexToASC(str: string) {
      return String.fromCharCode(parseInt(str, 16))
    }
    // ------------------------------------

    // Binary
    function txtToBin(str: string) {
        return  str.split("").map(result => result.charCodeAt(0).toString(2).padStart(8, "0")).join("");
    }
    function octToBin(str: string) {
        return parseInt(str, 8).toString(2).padStart(4, "0")
    }
    function hexToBin(str: string) {
        return parseInt(str, 16).toString(2).padStart(4, "0")
    }
    // ------------------------------------

    //Hexadecimal
    function txttoHex(str: string) {
        return [...str].map(result => result.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")).join(" ");
    }
    function binToHex(str: string) {
        return parseInt(str, 2).toString(16).toUpperCase()
    }
    function octToHex(str: string) {
        return parseInt(str, 8).toString(16).toUpperCase()
    }
    //

    //Octal
    function txtToOct(str: string) {
        return [...str].map(result => result.charCodeAt(0).toString(8)).join(" ")
    }
    function binToOct(str: string) {
        return parseInt(str, 2).toString(8)
    }
    function hexToOct(str: string) {
        return parseInt(str, 16).toString(8)
    }
    //
</script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />


<div class="window ">
    <div class="mb-16">
        <!-- First Button -->
        <button class="btn variant-filled-secondary w-48 justify-between" use:popup={popupCombobox}>
          <span class="capitalize">{listValue ?? "Select"}</span>
          <span class="material-symbols-rounded">expand_more</span>
        </button>
    
        <!-- Second Button -->
        <button class="btn variant-filled-secondary w-48 justify-between mt-4" use:popup={popupCombobox2}>
          <span class="capitalize">{listValue2 ?? "Select"}</span>
          <span class="material-symbols-rounded">expand_more</span>
        </button>
    
        <!-- First Dropdown List -->
        <div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
          <ListBox rounded="rounded-none">
            <ListBoxItem bind:group={listValue} name="medium" value="ASCII">ASCII</ListBoxItem>
            <ListBoxItem bind:group={listValue} name="medium" value="Binary">Binary</ListBoxItem>
            <ListBoxItem bind:group={listValue} name="medium" value="Octal">Octal</ListBoxItem>
            <ListBoxItem bind:group={listValue} name="medium" value="Hex">Hexadecimal</ListBoxItem>
          </ListBox>
        </div>
    
        <!-- Second Dropdown List -->
        <div class="card w-48 shadow-xl py-2" data-popup="popupCombobox2">
          <ListBox rounded="rounded-none">
            <ListBoxItem bind:group={listValue2} name="medium" value="Octal">Octal</ListBoxItem>
            <ListBoxItem bind:group={listValue2} name="medium" value="Hex">Hexadecimal</ListBoxItem>
            <ListBoxItem bind:group={listValue2} name="medium2" value="Binary">Binary</ListBoxItem>
            <ListBoxItem bind:group={listValue2} name="medium2" value="ASCII">ASCII</ListBoxItem>
          </ListBox>
        </div>
    
    </div>

    <div class="inputField relative flex items-center justify-center">
        <input bind:value={str} placeholder="Enter the text" type="text" class="input rounded-md py-3 relative mb-3 pr-10"/>
        {#if str}
            <button class="clearBtn absolute p-3 bottom-3 right-0" on:click={textClearIn}>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                </svg>
            </button>
        {/if}
    </div>
    
    <div class="flex justify-center ">
        <button type="button" class="btn variant-filled-primary" on:click={handle}>
            Convert
        </button>
    </div>
    
    <input placeholder="Generated code" type="text" class="input rounded-md mt-4 mb-4" value={code} readonly>
    
    <div class="flex justify-center ">
        <button use:clipboard={code} type="button" class="btn variant-filled-error">
            Copy
        </button>
    </div>      
</div>

<style>
    .card[data-popup="popupCombobox"], .card[data-popup="popupCombobox2"] {
        z-index: 9999;
    }
</style>
