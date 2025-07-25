<script lang="ts">
    import { navigdateTo } from '@/lib/extension-runtime'
    interface Props {
        isActive?: boolean;
    }

    let { isActive = false }: Props = $props();

</script>

<div id="tab-2" class="{`tab-pane ${isActive ? 'active' : ''}`} dark:text-gray-100 text-gray-800" style="font-size: 1rem; text-align: left;">
    <h2 class="mb-0 text-lg font-semibold text-gray-900 dark:text-white text-[1.05rem]">Source Code</h2>
    <p class="text-sm text-gray-600 dark:text-gray-400 px-4 mb-2">This extension allows you to log in to <a style="color: blueviolet;" onclick={() => { navigdateTo('https://farcaster.xyz')}} href="#link1">farcaster.xyz</a> without needing a mobile device, and using only your custody account imported into your EVM wallet of choice.</p>
    <p class="text-sm text-gray-600 dark:text-gray-400 px-4">This extension is open-source, and the source can be found on GitHub here: <a style="color: blueviolet;" onclick={() => {
    navigdateTo('https://github.com/andrei0x309/farcaster-easy-login')
    }} href="#link2">Repo Link</a></p>

    <h2 class="mb-0 mt-2 text-lg font-semibold text-gray-900 dark:text-white text-[1.05rem]">Farcaster related Projects</h2>
    <ul class="px-2 max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-left text-[0.9rem]">
        <li class="flex items-center">
            <p class="p-1 m-0">
                <b>Clear Wallet</b> - an open-source browser EVM wallet with farcaster actions(if you have imported custody PK) ( login to farcaster.xyz do SIWF, etc.):
            <a style="color: blueviolet;" onclick={() => { navigdateTo('https://github.com/andrei0x309/clear-wallet')}} href="#link3">GitHub Repo</a>
        </p>
        </li>
        <li class="flex items-center">
            <p class="p-1 m-0">
                <b>Farcaster Snapchain Utils</b> - an open-source library to interact with farcaster snapchain instances on behalf of one or more FIDs and signer PKs.
             <a style="color: blueviolet;" onclick={() => { navigdateTo('https://github.com/andrei0x309/farcaster-snapchain-utils')}} href="#link4">GitHub Repo</a>
             </p>
        </li>
        <li class="flex items-center">
            <p class="p-1 m-0">
                <b>Fosscaster.xyz</b> - an open-source web UI client that uses farcaster.xyz API.
           <a style="color: blueviolet;" onclick={() => { navigdateTo('https://github.com/andrei0x309/farcaster-easy-login')}} href="#link5">GitHub Repo</a>
           </p>
      </li>
    </ul>
    <h2 class="mb-0 mt-2 text-lg font-semibold text-gray-900 dark:text-white text-[1.05rem]">All Farcaster Projects</h2>
    <ul class="px-2 max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-left text-[0.9rem]">
        <li class="flex items-center">
            <p class="p-1 m-0">
                <b>Farcaster projects</b> - you can check here a list of all farcaster projects I worked on.
           <a style="color: blueviolet;" onclick={() => { navigdateTo('https://flashsoft.eu/projects/technology/farcaster')}} href="#link6">GitHub Repo</a>
           </p>
      </li>
    </ul>
</div>