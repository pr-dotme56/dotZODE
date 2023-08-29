<script lang="ts">
    import Encode from '$lib/Encode.svelte';
    import Decode from '$lib/Decode.svelte';
    import { Tabs, TabItem, DarkMode } from 'flowbite-svelte';
</script>

<div class="window  bg-white dark:bg-slate-800">
  <div class="mode">
    <DarkMode/>
  </div>
  <Tabs style="pill">
    <TabItem open>
      <span slot="title">Encode</span>
        <Encode/>
    </TabItem>
  
    <TabItem open>
      <span slot="title">Decode</span>
        <Decode/>
    </TabItem>
  </Tabs>
</div>

<style lang="postcss">
  .mode{
    padding: 15px;
  }
  .window{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }
</style>
  