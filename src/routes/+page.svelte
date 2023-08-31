<script lang="ts">
    import Encode from '$lib/Encode.svelte';
    import Decode from '$lib/Decode.svelte';
    import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<div class="window  bg-white dark:bg-slate-800">
  <Tabs style="pill">
    <TabItem open>
      <span slot="title">Encoder</span>
        <Encode/>
    </TabItem>
    <TabItem open>
      <span slot="title">Decoder</span>
        <Decode/>
    </TabItem>
  </Tabs>
</div>

<style lang="postcss">
  .window{
    font-family: "Fira Code";
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }
</style>
  